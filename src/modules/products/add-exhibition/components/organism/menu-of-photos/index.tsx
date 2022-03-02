import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'

import Button from '@/components/atom/button'

import Artist from '../../molecules/artist'
import Exhibition from '../../molecules/exhibition'
import PhotosOfEvent from '../../molecules/photos-of-event'
import SendExhibition from '../../molecules/send-exhibition'
import { Container, ContainerButton, Important } from './styles'

import { useSize } from '@/hooks/use-size'

const MenuOfPhotos = () => {
  const { size } = useSize()

  const [selected, setSelected] = useState(0)

  const [loading, setLoading] = useState(true)

  const ref = useRef<FlatList>(null)

  const scrollToIndex = (index: number) => {
    ref.current.scrollToOffset({
      offset: size.width * index,
      animated: true,
    })
    setSelected(index)
  }

  const data = [
    <Exhibition key={1} />,
    <Artist key={2} />,
    <PhotosOfEvent key={3} />,
    <SendExhibition key={4} />,
  ]

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false)
    }
  }, [data])

  const BottomsMap = [
    {
      label: 'Exposição',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Artista',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Fotos do Evento',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
    {
      label: 'Enviar Exposição',
      onPress: (index: number) => {
        scrollToIndex(index)
      },
    },
  ]

  return (
    <Container>
      <ContainerButton>
        {BottomsMap.map((item, index) => (
          <Button
            key={index}
            text={item.label}
            onPress={() => item.onPress(index)}
            selectable
            selected={selected === index}
          />
        ))}
      </ContainerButton>

      <Important>* Campos Obrigatórios</Important>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View
          style={{
            minHeight: size.height,
            width: size.width,
          }}
        >
          <FlatList
            ref={ref}
            initialScrollIndex={selected}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            onScroll={(e) => {
              const index = Math.round(
                e.nativeEvent.contentOffset.x / size.width
              )
              setSelected(index)
            }}
            horizontal
            scrollEnabled={false}
            disableScrollViewPanResponder
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
            renderItem={({ item }) => (
              <View
                style={{
                  flex: 1,
                  zIndex: 99,
                  padding: 12,
                  width: size.width,
                }}
              >
                {item}
              </View>
            )}
          />
        </View>
      )}
    </Container>
  )
}

export default MenuOfPhotos
