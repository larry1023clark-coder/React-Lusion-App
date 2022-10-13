import React, { Fragment} from 'react'
import '../Styles/BasketShopping.css'

import CartItems from './CartItems';
import {useCart } from "react-use-cart";
import {Offcanvas, Button} from 'react-bootstrap';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';





export default  function BasketShopping (props) {
  const navigate = useNavigate()
  library.add(faBasketShopping)

  const {
    items,
    totalItems,
    totalUniqueItems,
    cartTotal,
    emptyCart,
  } = useCart();



  return (
    <Fragment>
      <Offcanvas show={props.show} onHide={props.handleClose} placement='end' scroll backdrop
       className='d-flex flex-column justify-content-between '>

        <Offcanvas.Header closeButton >
            <Offcanvas.Title >
              <div >
              <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className='fs-4 me-2' />
               Basket Shopping
              </div>

            </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className='shadow-lg p-0'>
            <CartItems products={props.products} setProductItems={props.setProductItems}
            increment={props.increment} decrement={props.decrement} deleteItem={props.deleteItem}
            emptyState={props.emptyState}/>
        </Offcanvas.Body>

        <div className="text-center mx-3">
          <hr />
          <h5 >Sub Total  &nbsp;
            { totalItems}
            {totalUniqueItems > 1? '  items': '  item'} :
            ${cartTotal.toFixed(2)}
          </h5>
          <Button variant="outline-dark" className='rounded-0 my-3 px-5'
          onClick={() => navigate('/Checkout')}>Check Out</Button>

          <Button variant="danger" disabled={items.length === 0 ? true : false} className='ms-5'
            onClick={() => emptyCart()} >Clear
          </Button>
        </div>

      </Offcanvas>
    </Fragment>
  );
}

