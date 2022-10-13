import React from 'react'
import { Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap';

import CartCheckout from './CartCheckout'
import ShippingForm from './ShippingForm';
import { Link } from 'react-router-dom';



export default function Checkout() {





   return (
    <Container className='my-5'>
      <Row>
        <Col xs={12} lg={6} className='order-1 order-lg-0'>

          <div className='px-2 mt-5 mt-lg-0'>
            <h3>Contact information</h3>
            <p className='text-end'>Already have an account? <Link to='/SignIn'>Log in</Link> </p>
            <FloatingLabel controlId="email" label="Email Address">
              <Form.Control type="text" name='email' placeholder="Email" className='rounded-0 mb-3 mb-lg-0'/>
              <Form.Control.Feedback type="inValid" className='text-danger'></Form.Control.Feedback>
            </FloatingLabel>
            <Form.Check name='terms' label="Email me with news and offers" />
          </div>
          <div className='my-5'>
            <ShippingForm />
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div>
            <CartCheckout />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
