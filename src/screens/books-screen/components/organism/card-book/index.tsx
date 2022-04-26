import React from 'react'
import { View } from 'react-native'

import { GetterBooks } from '@/types'

import CacheImage from '@/components/atom/cache-image'

import BookBasicInformation from '../../molecules/book-basic-information'
import BookFooter from '../../molecules/book-footer'
import BookSinopse from '../../molecules/book-sinopse'
import { viewStyles } from '../../styles'

import { useSize } from '@/hooks/utils/use-size'

type Props = {
  item: GetterBooks
}

const CardBooks = ({ item }: Props) => {
  const { size } = useSize()

  // telas menores < 640

  return (
    <View
      style={[
        viewStyles.viewCard,
        size.width < 640 && {
          flexDirection: 'column',
        },
      ]}
    >
      <View
        style={
          (viewStyles.viewContainerImage,
          size.width < 640 && {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          })
        }
      >
        <View style={viewStyles.viewImage}>
          <CacheImage capa={item.image} />
        </View>
      </View>
      <View style={[viewStyles.viewDetails]}>
        <BookBasicInformation item={item} />
        <BookSinopse item={item} />
        <BookFooter item={item} />
      </View>
    </View>
  )
}

export default CardBooks
