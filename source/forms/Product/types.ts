/* eslint-disable @typescript-eslint/no-namespace */

import {
  Category,
  ExhibitionPhotosTypes,
  FinancialResources,
  TypeMusicAlbums,
  TypesProducts,
} from '@/types'

import { AttrsProduct } from '@/hooks/use-attrs-product'

export type Document = {
  type: 'success'
  name: string
  size?: number | undefined
  uri: string
  mimeType?: string | undefined
  lastModified?: number | undefined
  file?: Document.File
  output?: Document.Output
}

export type DocumentFile = {
  type: 'success'
  uri: string
  name: string
  size: number
  mimeType: string
}

export declare namespace Document {
  export type Type = 'success'
  export type Name = string
  export type Size = number | undefined
  export type Uri = string
  export type MimeType = string | undefined
  export type LastModified = number | undefined
  export type File = any
  export type Output = {
    lastModified: number
    lastModifiedDate: Date
    name: string
    size: number
    type: 'audio/mpeg'
    webkitRelativePath: string
  }[]
}

export interface FormProduct extends AttrsProduct {
  publishedDate?: string
  category: Category
  type: TypesProducts
  onChangePublishedDate?: (date: string) => void
  onChangeCategory?: (value: Category) => void
  onChangeType: (value: TypesProducts) => void
  onChangeImageURL: (value: string, title: string) => void
  resetProduct?: () => void
}

export interface FormProductBook extends FormProduct {
  title: string
  subTitle: string
  isbn: string
  sinopse: string
  sobreAObra: string
  numberOfPages: string
  publisher: string
  size: string
  illustrated: boolean
  illustrator: string
  file: Document
  onChangeFile: () => void
  onChangeIllustrator: (text: string) => void
  onChangeNumberOfPages: (text: string) => void
  onChangePublisher: (text: string) => void
  onChangeSize: (text: string) => void
  onChangeIllustrated: (value: boolean) => void
  onChangeISBN: (value: string) => void
  onChangeTitle: (text: string) => void
  onChangeSubTitle: (text: string) => void
  onChangeSinopse: (text: string) => void
  onChangeSobreAObra: (text: string) => void
  resetProductBook: () => void
}

export const mapTypeProduct: { [key in TypesProducts]: string } = {
  [TypesProducts.PDF]: 'Livro',
  [TypesProducts.MP3]: 'M??sica(s)',
  [TypesProducts.URL]: 'URL',
  [TypesProducts.CAPA]: 'Capa',
  [TypesProducts.PHOTOS]: 'Foto',
  [TypesProducts.MP4]: 'MP4',
  [TypesProducts.LINK]: 'Link',
  [TypesProducts.NAO_INFORMADO]: 'N??o informado',
}

export const mapTypeMusic: { [key in TypeMusicAlbums]: string } = {
  [TypeMusicAlbums.album]: '??lbum',
  [TypeMusicAlbums.album_interprete]: '??lbum Interprete',
  [TypeMusicAlbums.single]: 'Single',
  [TypeMusicAlbums.ep]: 'EP',
}

export const mapFinancialResources = [
  { label: 'Lei Aldir Blanc ', value: FinancialResources.LeiAldirBlanc },
  {
    label: 'Recursos do Artista',
    value: FinancialResources.RecursoDoArtista,
  },
  { label: 'Funcart', value: FinancialResources.Funcart },
  { label: 'Municipal', value: FinancialResources.Municipal },
  { label: 'Federal', value: FinancialResources.Federal },
]

type mapPhotos = {
  label: string
  value: ExhibitionPhotosTypes
}

export const mapTypeExhibitionPhoto: mapPhotos[] = [
  {
    label: 'Foto de Abertura',
    value: ExhibitionPhotosTypes.foto_de_abertura,
  },
  {
    value: ExhibitionPhotosTypes.foto_de_artista,
    label: 'Foto de Artista',
  },
  {
    value: ExhibitionPhotosTypes.foto_de_evento,
    label: 'Foto de Evento',
  },
  {
    value: ExhibitionPhotosTypes.foto_de_local,
    label: 'Foto de Local',
  },
  {
    value: ExhibitionPhotosTypes.foto_de_montagem,
    label: 'Foto de Montagem',
  },
  {
    value: ExhibitionPhotosTypes.outros,
    label: 'Outros',
  },
]
