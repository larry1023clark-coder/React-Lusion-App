import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import '../Styles/SectionShop.css'

import { useNavigate } from 'react-router-dom'
import {useCart} from 'react-use-cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'



export default function SectionShop(props) {
   library.add(faBasketShopping)
   const navigate = useNavigate()
   const { addItem } = useCart();

   const directToDetails = (e) =>{
      console.log(e);
      navigate('/ProductDetails', {state: e})
   }


   return (
      <Container fluid>
         <Row className="my-5 p-3 p-lg-5" >

            {props.SectionShopData.map( (el)=> (
               <Col xs={12} md={6} lg={3} key={el.id} className='mb-5 mb-lg-0' >
                  <div>
                     <div className="d-inline-block overflow-hidden">
                        <Image className="SectionsHImgs" src={el.img[0]} alt='Cat 1' width='100%'
                        onClick={() => directToDetails(el)} />
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
      </Container>
   )
}
