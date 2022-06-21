import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { ScrollView, Animated, Platform } from 'react-native'
import { useDimensions } from 'react-native-web-hooks'

import CardContent from '../../molecules/card-content'

const OFFSET = 0

type Props = {
  items: {
    title: string
    id: string
    thumbnail: string
    description: string
  }[]
}

export default function CardCarousel({ items }: Props) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    setData(items.slice(0, 10))
    setIsLoading(false)
    return () => {
      setData(null)
    }
  }, [])

  const scrollX = useRef(new Animated.Value(0)).current

  const web = Platform.OS === 'web'

  const { window, screen } = useDimensions()
  const size = web ? window : screen
  const { width } = size
  const ITEM_WIDTH = useMemo(() => width - OFFSET * 2, [width])

  const refScroll = React.useRef<ScrollView | undefined>()

  /*  useEffect(() => {
    if (refScroll.current) {
      refScroll.current.scrollTo({ x: ITEM_WIDTH * data.length, y: 0, animated: false })
    }
  }, [width]) */
  if (isLoading) {
    return <></>
  }

  return (
    <ScrollView
      horizontal={true}
      decelerationRate={'normal'}
      snapToInterval={ITEM_WIDTH}
      style={{
        paddingHorizontal: 0,
      }}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      bounces={false}
      ref={refScroll}
      disableIntervalMomentum
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: false,
      })}
      scrollEventThrottle={12}
    >
      {data.map((item, idx) => {
        const inputRange = [(idx - 1) * ITEM_WIDTH, idx * ITEM_WIDTH, (idx + 1) * ITEM_WIDTH]

        const translate = scrollX.interpolate({
          inputRange,
          outputRange: [0.85, 1, 0.85],
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
        })

        return (
          <Animated.View
            style={{
              width: ITEM_WIDTH,
              height: '100vh',
              opacity: opacity,
              transform: [{ scale: translate }],
              marginLeft: idx === 0 ? OFFSET : undefined,
              marginRight: idx === data.length - 1 ? OFFSET : undefined,
            }}
            key={idx}
          >
            <CardContent
              offset={ITEM_WIDTH * idx}
              item_width={ITEM_WIDTH}
              item={item}
              index={idx}
              refScroll={refScroll}
              length={data.length}
              height={'100vh'}
            />
          </Animated.View>
        )
      })}
    </ScrollView>
  )
}
