import React from 'react'
import { View, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import { useFormMusicTags } from '@/forms/Product/product-music/hooks'

import SendFormMusicButton from '../../atoms/send-form-music-button'

const Right = () => {
  const web = Platform.OS === 'web'
  const { window, screen } = useDimensions()
  const size = web ? window : screen

  const { onChangeTags, tags } = useFormMusicTags()

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        minHeight: size.width < 1127 ? 400 : size.height,
        marginRight: web ? 0 : 40,
        padding: 20,
        maxWidth: 300,
        justifyContent: 'flex-start',
      }}
    >
      <SendFormMusicButton />
    </View>
  )
}

export default Right
