import React, {Fragment} from 'react'
import '../Styles/CartItems.css'

import {useCart } from "react-use-cart";
import { Image, Row, Col} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareMinus, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import {  far, faTrashCan } from '@fortawesome/free-regular-svg-icons'

import emptyImg from '../images/shopping-cart-empty-5.png'
import { useNavigate } from 'react-router-dom';







export default function CartItems(props) {
   const navigate = useNavigate()
   library.add(faSquareMinus, faSquarePlus, faTrashCan,  far )

   const {
      isEmpty,
      items,
      updateItemQuantity,
      removeItem,
   } = useCart();

   const directToDetails = (e) =>{
      navigate('/ProductDetails', {state: e})
      console.log(e);
   }



   if (isEmpty) return(
      <div className='d-flex flex-column align-items-center justify-content-center h-100 text-secondary' >
         <Image src={emptyImg} className=' w-75 mx-auto mb-5'/>
         <h1>Empty</h1>
      </div>);


   return (
      <Fragment>
      {items.map((el) =>(

      <div className='fullCartItem d-flex justify-content-between align-items-center p-3 bg' key={el.id}>
         <div className='trash-can'>
            <FontAwesomeIcon icon="fa-regular fa-trash-can " title='Remove item' className='fs-4'
            onClick={() => removeItem(el.id)} />
         </div>

         <Image src={el.img[0]} width='70px' className='cartItem border'
         onClick={() => directToDetails(el)}/>

         <div className='cartItem'>
            <Row>
               <Col> <div> <h6 className='productsType fw-bold'>{el.name}</h6> </div> </Col>
            </Row>
            <Row>
               <Col> <div> <h6 className='productsType fw-bold'>{el.type}</h6> </div> </Col>
            </Row>
            <Row>
               <Col> <div> <h5 className='fw-bold'>${el.price}</h5> </div> </Col>
               <Col>
                  <div className='d-flex justify-content-between  align-items-center fs-4'>
                     <FontAwesomeIcon icon="fa-solid fa-square-minus" className='faSquareMinus' title='Decrease quantity'
                     onClick={() => updateItemQuantity(el.id, el.quantity - 1)}/>

                     <h3 className='user-select-none mb-0 mx-3'>{el.quantity}</h3>

                     <FontAwesomeIcon icon="fa-solid fa-square-plus" className='faSquarePlus' title='Increase quantity'
                     onClick={() => updateItemQuantity(el.id, el.quantity + 1)}/>
                  </div>
               </Col>
            </Row>
            <hr className='m-0' />
         </div>
      </div>
      ))}
      </Fragment>
   )
}
