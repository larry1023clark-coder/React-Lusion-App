import React from 'react'
import '../Styles/LandingShop.css'

import { Image } from 'react-bootstrap'

import LandingShopBg from '../images/bg-Shop.jpg'



export default function LandingShop() {
  return (
    <div className='position-relative'>
      <Image src={LandingShopBg} fluid />
      <div className='position-absolute top-50 start-50 translate-middle'>
         <h1>Our Shop</h1>

      </div>
    </div>
  )
}
