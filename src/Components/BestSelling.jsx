import React, {  useRef  } from "react";
import '../Styles/BestSelling.css'
import "swiper/css/bundle";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { useCart } from "react-use-cart";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBasketShopping, faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';
// import { useSwiper } from "swiper/react";
// Import Swiper styles
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination/pagination.min.css"
import "../../node_modules/swiper/modules/navigation/navigation.min.css"



// import Swiper core and required modules








export default function BestSelling(props){
   library.add(faBasketShopping,faAnglesRight, faAnglesLeft)
   const { addItem } = useCart();
   const navigate = useNavigate()

   const directToDetails = (e) =>{
      console.log(e);
      navigate('/ProductDetails', {state: e})
   }
   // const swiper = useSwiper();

// ------------------------------------------------------------
const prevRef = useRef(null);
const nextRef = useRef(null);

// -------------------------------------------------------------

   return(
      <section className="bg-light">

         <Container fluid className="p-3 p-lg-5">
            <div className=" d-flex flex-column flex-md-row justify-content-between  align-items-center align-items-lg-end ">
               <h1 className="fw-bolder">Best Selling</h1>
               <h6 className="text-muted fw-bolder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla</h6>
            </div>

            <Row className=" p-3 p-lg-5 pb-lg-0 mb-5 mb-lg-0" >
            <Col lg={12} className='' >
               <Row className="bestSellingC flex-wrap" >
               <Swiper
                  breakpoints={{
                     0: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                     },
                     // when window width is >= 640px
                     640: {
                        slidesPerView: 2,
                        slidesPerGroup: 1,
                     },
                     // when window width is >= 768px
                     768: {
                        slidesPerView: 4,
                        slidesPerGroup: 1,
                     },
                  }}
                  slidesPerView={4.2}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  allowSlideNext={true}
                  autoplay={true}
                  delay={3000}
                  pagination={{clickable: true,}}
                  modules={[ Navigation]}
                  navigation={{
                     prevEl: prevRef.current ? prevRef.current : undefined,
                     nextEl: nextRef.current ? nextRef.current : undefined,
                   }}
                   onInit={(swiper) => {
                     swiper.params.navigation.prevEl = prevRef.current;
                     swiper.params.navigation.nextEl = nextRef.current;
                     swiper.navigation.update();
                   }}
                  className="mySwiper"
                  >
               {props.BestSellingData.map(e => (
                  <Col xs={6} md={6} lg={4} key={e.id} className='bestSellingI mb-5 mb-lg-0' >
                     <SwiperSlide>
                        <div className="d-inline-block overflow-hidden">
                           <Image className="SectionsHImgs" src={e.img[0]} alt='Cat 1' fluid
                              onClick={() => directToDetails(e)}
                           />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                           <div className="py-3 me-5">
                              <h4 className="text-muted">{e.type}</h4>
                              <h4 className="fw-bold">${e.price}</h4>
                           </div>

                           <Button variant="outline-dark" className='rounded-0'  title='Basket Shopping'
                            onClick={() => addItem(e)}>
                              <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className='fs-4' />
                           </Button>
                        </div>
                     </SwiperSlide>
                  </Col>
               ))}
               </Swiper>

               </Row>
            </Col>
               {/* <Col lg={1} className='bg-light pt-4'>
                  <div className="d-flex flex-column align-items-center justify-content-around ">

                     <div variant="outline-dark" className=' rounded-0'
                     ref={prevRef} >
                        <FontAwesomeIcon icon="fa-solid fa-angles-right swiper-button-prev" />
                     </div>

                     <Button variant="outline-dark my-3 w-50" className=' rounded-0 '
                     ref={nextRef} >
                     <  FontAwesomeIcon icon="fa-solid fa-angles-left swiper-button-next" />
                     </Button>

                     <Button variant="outline-dark" className='AllProductsBtn rounded-0'> All Products </Button>
                  </div>

               </Col> */}
            </Row>
         </Container>
      </section>
   )
}