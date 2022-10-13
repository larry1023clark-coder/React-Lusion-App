import React from "react";
import './BestSelling.css'

import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useCart } from "react-use-cart";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBasketShopping, faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'





export default function BestSelling(props){
   library.add(faBasketShopping,faAnglesRight, faAnglesLeft)
   const { addItem } = useCart();


   return(
      <section className="bg-light">
         <Container fluid className="p-3 p-lg-5">
            <div className=" d-flex flex-column flex-md-row justify-content-between  align-items-center align-items-lg-end ">
               <h1 className="fw-bolder">Best Selling</h1>
               <h6 className="text-muted fw-bolder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nulla</h6>
            </div>

            <Row className=" p-3 p-lg-5 pb-lg-0" >
            <Col lg={12} className='mb-5 mb-lg-0' >
               <Row className="bestSellingC " >

               {props.BestSellingData.map( (el) => (

                  <Col xs={6} md={6} lg={3} key={el.id} className='bestSellingI my-5 mb-lg-0' >
                     <div>
                        <div className="d-inline-block overflow-hidden">
                           <Image className="SectionsHImgs" src={el.img[0]} alt='Cat 1' fluid />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                           <div className="py-3">
                              <h4 className="text-muted">{el.type}</h4>
                              <h4 className="fw-bold">${el.price}</h4>
                           </div>

                           <Button variant="outline-dark" className='rounded-0'  title='Basket Shopping'
                            onClick={() => addItem(el)}>
                              <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className='fs-4' />
                           </Button>

                        </div>

                     </div>
                  </Col>

               ))}

               </Row>
            </Col>
               {/* <Col lg={1} className='bg-light pt-4'>
                  <div className="d-flex flex-column align-items-center justify-content-around ">
                     <Button variant="outline-dark" className='rounded-0'>
                        <FontAwesomeIcon icon="fa-solid fa-angles-right" />
                     </Button>

                     <Button variant="outline-dark my-3 w-50" className='rounded-0'>
                     <FontAwesomeIcon icon="fa-solid fa-angles-left" />

                     </Button>
                     <Button variant="outline-dark" className='AllProductsBtn rounded-0'> All Products </Button>
                  </div>
               </Col> */}
            </Row>
         </Container>
      </section>
   )
}