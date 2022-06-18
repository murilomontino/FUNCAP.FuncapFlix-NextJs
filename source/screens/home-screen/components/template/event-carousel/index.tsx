import React, { useState, useLayoutEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import event from '@/public/images/evento.jpeg'
import theme from '@/theme'
import SwiperCore, { EffectFade, Navigation, Thumbs, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// episodes
import Img from '@/components/atom/image'

import EventCard from '../../organisms/event-card'

const EventCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    SwiperCore.use([EffectFade, Navigation, Thumbs, Pagination])
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section id="iq-trending" className="s-margin p-20 align-items-center">
      <Container fluid>
        <Row>
          <Col sm="12" className="overflow-hidden">
            <div className="d-flex align-items-center justify-content-between">
              <h4
                className="main-title"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#fff',
                  marginBottom: '12px',
                  fontFamily: theme.FONTS.TITLE_900,
                }}
              >
                Eventos
              </h4>
            </div>
            <div id="trending-contens">
              <div id="prev4" className="swiper-button swiper-button-prev">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div id="next4" className="swiper-button swiper-button-next">
                <i className="fa fa-chevron-right"></i>
              </div>
              <Swiper
                as="ul"
                thumbs={{ swiper: thumbsSwiper }}
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation={{
                  prevEl: '#prev4',
                  nextEl: '#next4',
                }}
                slidesPerView={5}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 2 },
                  991: { slidesPerView: 3 },
                  1400: { slidesPerView: 4 },
                  1500: { slidesPerView: 5 },
                }}
                loop={true}
                className="list-inline p-0 m-0 row align-items-center iq-rtl-direction"
              >
                <SwiperSlide as="li">
                  <a to="#">
                    <div className="movie-slick position-relative">
                      <Img image={event} staticImage updateClassName="img-fluid" alt="" />
                    </div>
                  </a>
                </SwiperSlide>
              </Swiper>
            </div>
            <div>
              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={1}
                freeMode={true}
                watchSlidesProgress={true}
                id="trending-slider"
                className="mt-3  list-inline p-0 m-0  d-flex align-items-center iq-rtl-direction"
              >
                <SwiperSlide as="li">
                  <EventCard thumbnail={event} />
                </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default EventCarousel
