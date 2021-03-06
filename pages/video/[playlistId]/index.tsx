import React, { useEffect, useMemo, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import { build, db } from '@/database'
import { FindAllProductsByCategory, FindAllTvProgramsUseCase } from '@/domain/usecases'
import theme from '@/theme'
import { database } from 'backend/database'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next/types'

import TemplateFrontEnd from '@/components/templates/frontend'
import DetailsScreen from '@/screens/details-movies-screen'

import { Choose, When } from '@/utils/tsx-controls'

const VideoPageDetails = ({ staticVideos, staticPlaylist }) => {
  const { videoId } = useRouter().query

  const [video, setVideo] = useState(null)
  const [id, setId] = useState(null)

  useEffect(() => {
    if (videoId) {
      const video = staticVideos.find((video) => video.videoId === videoId)
      if (video) {
        setVideo(video)
        setId(videoId)
        return
      }
    }

    setVideo(staticVideos[0])
    setId(staticVideos[0].videoId)

    return () => {
      setVideo(null)
    }
  }, [videoId, staticVideos])

  const isLoading = useMemo(
    () => staticVideos === null || staticVideos === undefined || !id || !video,
    [staticVideos, id, video]
  )

  return (
    <TemplateFrontEnd>
      <Choose>
        <When condition={isLoading}>
          <Skeleton width="100%" height={'90vh'} baseColor={theme.COLORS.BOX_SKELETON} />
        </When>
        <When condition={!isLoading}>
          <DetailsScreen
            videoId={id}
            playlist={staticPlaylist}
            videos={staticVideos}
            item={video}
          />
        </When>
      </Choose>
    </TemplateFrontEnd>
  )
}

export default VideoPageDetails

export const getStaticPaths = async (context) => {
  await build()

  const audioVisual = await new FindAllProductsByCategory().execute(null, {
    category: ['152', '1'],
  })

  if (audioVisual.isRight()) {
    return {
      paths: [],
      fallback: false,
    }
  }

  const paths = await Promise.all([
    ...audioVisual.value.map((playlist) => ({
      params: { playlistId: playlist.id.toString() },
    })),
  ])
  await database.close()

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await build()
  const { playlistId } = params

  const playlist = await (
    await db.ModelInfoProducts.findOne({
      where: { id: playlistId },
    })
  ).get()

  const audioVisualEither = await new FindAllTvProgramsUseCase().execute(
    {
      isNecessarySubCategory: false,
    },
    {
      idProduct: playlist.id,
    }
  )

  const audioVisual = audioVisualEither.isLeft() ? audioVisualEither.value : null
  await database.close()
  return {
    props: {
      staticVideos: audioVisual,
      staticPlaylist: {
        ...playlist,
        createdAt: playlist?.createdAt?.toISOString(),
        updatedAt: playlist?.updatedAt?.toISOString(),
      },
    },
    revalidate: 60 * 60 * 24,
  }
}
