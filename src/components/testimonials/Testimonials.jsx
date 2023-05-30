import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

function Testimonials() {
  const data=[
    {
      avater:AVT1,
      name: 'Lebron james',
      review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum. '
       
    },
    {
      avater:AVT2,
      name: 'mike tyson',
      review:'lorem Ips is Lorem Ipsj   jjlnlongjbdcjbsjbkxbxkbkxzb'
       
    },
    {
      avater:AVT3,
      name: 'mike',
      review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum. '
       
    },
    {
      avater:AVT4,
      name: 'bruno',
      review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum. '
       
    }
  ]
  return (
    <section id='testimonials'>
      <h5>Review from clientd</h5>
      <h2> Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
     >

         {
          data.map(({avater, name, review},index)=>{
            return( <SwiperSlide className='testimonial' key={index}>
            <div className="client__avater">
              <img src={avater} alt='Avater one'>
  
              </img>
  
            </div> 
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
          </SwiperSlide>
      

            )
          })
         }
       
    </Swiper>
    </section>
  )
}

export default Testimonials