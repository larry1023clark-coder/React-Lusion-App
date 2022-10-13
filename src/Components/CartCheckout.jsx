import React from 'react'
import { useState } from 'react';
import { Container, Accordion, Image, InputGroup, Form, Button } from 'react-bootstrap';

import { useCart } from 'react-use-cart';




export default function CartCheckout() {


  const {
    items,
    cartTotal,
  } = useCart();


  let [giftCode, setGiftCode] = useState('')

  function handelGiftCode(e){
    let newGiftCode = giftCode
    newGiftCode = e.currentTarget.value
    setGiftCode(newGiftCode)
  }



  return (
    <Container>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cart Deteals</Accordion.Header>
        <Accordion.Body className='bg-light'>
          {items.map(e => (
            <div key={e.id} className='d-flex align-items-center  gap-4 round my-4'>
              <div>
                <Image src={e.img[0]} width='70px' className='cartItem border' />
                <span className='position-absolute top-25 translate-middle badge rounded-pill bg-black'>
                  {e.quantity}
                </span>
              </div>
              <h5>{e.name}</h5>
              <h5 className='flex-grow-1 text-end'>${e.price * e.quantity}</h5>
            </div>
          ))}
          <hr />
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Gift card or discount code"
              aria-label="Gift card or discount code"
              aria-describedby="basic-addon2"
              className='border  rounded-0'
              name='giftCode'
              value={giftCode}
              onChange={handelGiftCode}
            />
            <Button variant="dark" size="lg" id="button-addon2" className='rounded-0'
             disabled={giftCode === '' && true} >
              Apply
            </Button>
          </InputGroup>
          <hr />
          <div>
            <div className='d-flex justify-content-between'>
              <h6 className=' text-muted'>Subtotal</h6>
              <h5>${cartTotal}</h5>
            </div>
            <div className='d-flex justify-content-between text-muted'>
              <h6>Shipping</h6>
              <h6>Calculated at next step</h6>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
              <h6>Total</h6>
              <h4>USD ${cartTotal}</h4>
            </div>
          </div>


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  )
}
