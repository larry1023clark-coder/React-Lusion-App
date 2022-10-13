import React from 'react';
import '../Styles/Carousel.css'

import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../images/Home-default-1510-3.png'
import Image2 from '../images/Home-default-1510-4.png'

export default function CarouselHome() {
   return (
      <Carousel className='bg-light' >
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={Image1}
               alt="White Collection"
            />
               <h1 className='MyCaption fs-sm-3'>The white <br /> Collection</h1>
            <Carousel.Caption>
            </Carousel.Caption>
         </Carousel.Item>

         <Carousel.Item>
            <img
               className="d-block w-100"
               src={Image2}
               alt="Black Collection"
            />

               <h1 className='MyCaption  fs-sm-3'>The Black <br /> Collection</h1>
            <Carousel.Caption >
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}

