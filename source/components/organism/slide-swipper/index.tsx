import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'

import theme from '@/theme'
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import CardSwipper from '@/components/molecule/card-swipper'
import TitleCarousel from '@/components/molecule/title-carousel'

import { Choose, For, When } from '@/utils/tsx-controls'

type Props = {
  title: string
  itemsPerView?: number
  id: string
  buttonText?: string
  width?: string
  height?: string
  queryString?: string
  link?: string
  allLink?: string
  items: {
    [key: string]: any
    title: string
    id: string
    thumbnail: string
  }[]
}

const CarouselSwipper = ({
  title,
  id,
  items,
  width,
  height,
  queryString,
  allLink,
  itemsPerView = 5.5,
  link = '/',
  buttonText = 'Assistir',
}: Props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination])

    setIsLoading(false)
  }, [])

  return (
    <section id={id} className={'overflow-hidden mb-5 position-relative'}>
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden">
            <Choose>
              <When condition={!items || isLoading}>
                <div className="w-100 align-items-center justify-content-center d-flex">
                  <Skeleton
                    width={'90vw'}
                    height={'30px'}
                    baseColor={theme.COLORS.BACKGROUND_TITLE}
                  />
                </div>
              </When>
              <When condition={!!title}>
                <div className="d-flex align-items-center justify-content-between">
                  <TitleCarousel title={title} link={'/' + (allLink || link)} />
                </div>
              </When>
            </Choose>

            <div id="favorites-contens">
              <div id={`prev-${id}`} className="swiper-button swiper-button-prev">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div id={`next-${id}`} className="swiper-button swiper-button-next">
                <i className="fa fa-chevron-right"></i>
              </div>
              <Choose>
                <When condition={!items || isLoading}>
                  <div
                    id="favorite-contens"
                    className="favorites-slider d-flex list-inline row p-0 m-0"
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                  >
                    <For items={[...Array(itemsPerView + 0.5)]}>
                      {(item, index) => (
                        <div className="block-images position-relative m-1" key={index}>
                          <Skeleton
                            height={height}
                            width={280}
                            baseColor={theme.COLORS.BOX_SKELETON}
                            borderRadius={2}
                          />
                        </div>
                      )}
                    </For>
                  </div>
                </When>
                <When condition={!!items}>
                  <Swiper
                    navigation={{
                      prevEl: `#prev-${id}`,
                      nextEl: `#next-${id}`,
                    }}
                    breakpoints={{
                      320: { slidesPerView: itemsPerView - 3 },
                      550: { slidesPerView: itemsPerView - 2 },
                      991: { slidesPerView: itemsPerView - 1 },
                      1400: { slidesPerView: itemsPerView },
                    }}
                    loop={items.length > itemsPerView}
                    slidesPerView={4}
                    spaceBetween={20}
                    as="ul"
                    className="favorites-slider list-inline  row p-0 m-0 iq-rtl-direction"
                  >
                    {items.map((item, index) => {
                      const queryOrBar = queryString ? queryString : '/'
                      const linkDefinitive = `${link}${queryOrBar}${item.videoId || item.id}`

                      return (
                        <SwiperSlide as="li" key={index} virtualIndex={index}>
                          <CardSwipper
                            linkDetails={linkDefinitive}
                            title={item.title}
                            thumbnail={item.thumbnail}
                            width={width}
                            height={height}
                            button={buttonText}
                          />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </When>
              </Choose>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CarouselSwipper
