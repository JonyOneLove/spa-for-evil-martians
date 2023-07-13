import banner1 from '@/assets/images/banner-1.jpg'
import banner2 from '@/assets/images/banner-2.jpg'
import banner3 from '@/assets/images/banner-3.jpg'
import banner4 from '@/assets/images/banner-4.jpg'
import banner5 from '@/assets/images/banner-5.jpg'
import banner6 from '@/assets/images/banner-6.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './style.scss'

const banners = [banner1, banner2, banner3, banner4, banner5, banner6, banner6]

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        530: {
          slidesPerView: 1.4,
          centeredSlides: false,
        },
        870: {
          slidesPerView: 2.5,
          centeredSlides: true,
        },
        1270: {
          slidesPerView: 2.5,
          centeredSlides: true,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
      className='swiper-block'
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index} className='swiper-block__slide'>
            <div className='swiper-block__content'>
              <img src={banner} alt='' />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
