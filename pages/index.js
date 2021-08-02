
import HeroSection from '../Components/heroSection'
import styles from '../styles/Index.module.css'
import  {  Head } from 'next/document'
import NavbarPrimary from '../Components/navbarPrimary'


import SwiperCore, { Navigation,Parallax,EffectFade ,Autoplay,Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skills from '../Components/skills'
import Tools from '../Components/tools'
import Footer from '../Components/Footer'
import Contact from '../Components/contact'
import Work from '../Components/work'
import Workmedium from '../Components/workmedium'
import Worksmall from '../Components/worksmall'


SwiperCore.use([Navigation ,Parallax,Autoplay, EffectFade,Mousewheel, Pagination, Scrollbar, A11y]);

export default function Home() {
  return (
   
    <div className={styles.container}>
      
      <NavbarPrimary/>
    
      <div className={styles.swiper}>
        <Swiper id="swiper"
        effect="coverflow"
        spaceBetween={0}
        slidesPerView={1}
        
       
        direction={'vertical'}
        scrollbar={{ draggable: true }}
        autoplay={{
          "delay": 12000,
          "disableOnInteraction": false
          }}
        parallax={true}
        speed={1000}
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
          <Work />
          <Workmedium/>
          <Worksmall/>
        </SwiperSlide> 
        <SwiperSlide>
          <Skills />
        </SwiperSlide>
        <SwiperSlide>
          <Tools />
        </SwiperSlide>   
        <SwiperSlide>
          <Contact />
        </SwiperSlide>  
        
        <SwiperSlide>
          <Footer />
        </SwiperSlide> 
      </Swiper>
      </div>
     
      
    </div>
  )
}
