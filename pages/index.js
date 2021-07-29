import Head from 'next/head'
import Image from 'next/image'

import HeroSection from '../Components/HeroSection'
import styles from '../styles/Index.module.css'

import NavbarPrimary from '../Components/NavbarPrimary'
import NavbarSecondary from '../Components/NavbarSecondary'

import SwiperCore, { Navigation,EffectFade ,Autoplay,Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skills from '../Components/skills'
import Tools from '../Components/Tools'

SwiperCore.use([Navigation,Autoplay, EffectFade,Mousewheel, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
    <div >
      <NavbarPrimary/>
      <NavbarSecondary/>
      <div className={styles.swiper}>
        <Swiper
        effect="coverflow"
        spaceBetween={0}
        slidesPerView={1}
        direction={'vertical'}
        // scrollbar={{ draggable: true }}
        autoplay={{
          "delay": 10000,
          "disableOnInteraction": false
          }}
        pagination={{"type":"progressbar",
        progressbarOpposite:true,
        }}
        mousewheel={true}
        className="swiper-pagination-black"
        >
        <SwiperSlide>
          <HeroSection />
        </SwiperSlide>
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Tools />
        </SwiperSlide>   
      </Swiper>
      </div>
     
      
    </div>
  )
}
