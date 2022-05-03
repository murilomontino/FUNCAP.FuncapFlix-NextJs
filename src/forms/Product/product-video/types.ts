import { GettersVideosInfo, TypesProducts } from '@/types'

import { Getter } from '@/services/config/types'

export interface FormProductVideoFile {
  type: TypesProducts
  selectedVideo: GettersVideosInfo
  file: File
  url: string
  onChangeUrl: (url: string) => void
  onChangeFile: (file: File) => void
  onChangeSelectedVideo: (video: GettersVideosInfo) => void
  onChangeType: (value: TypesProducts) => void
  onSubmit: () => Promise<Getter<GettersVideosInfo>>
  reset: () => void
  validated: {
    err: string[]
    isValid: boolean
  }
}

export const mapTypeVideo = [
  {
    value: TypesProducts.MP4,
    label: 'Vídeo',
  },
  {
    value: TypesProducts.URL,
    label: 'Link',
  },
]
