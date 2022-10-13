import React from 'react'
import '../Styles/MainFooter.css'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

import {Container, Row, Col, Button, Form, InputGroup} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'


export default function MainFooter () {
   library.add(faFacebookF, faTwitter, faPinterest )


   return (
      <footer className='bg-light py-5 px-0  px-sm-5'>

      <Container fluid >
      <Row className='text-center text-lg-start'>
         <Col xs={12} md={6} lg={2} className='mb-5 m-lg-0'>
            <div className='footerList'>
               <h3 className='fw-bold mb-4'>Company</h3>
               <ul className='list-unstyled '>
                  <li> <Link to='/AboutUs'>About Us</Link> </li>
                  <li> <Link to='/ContactUs'>Contact Us</Link> </li>
                  <li> <Link to='/'>Store Location</Link> </li>
                  <li> <Link to='/'>Careers</Link> </li>
               </ul>
            </div>
         </Col>

         <Col xs={12} md={6} lg={3} className='mb-5 m-lg-0'>
            <div className='footerList'>
               <h3 className='fw-bold mb-4'>Help</h3>
               <ul className='list-unstyled '>
                  <li> <Link to='/'>Order Tracking</Link> </li>
                  <li> <Link to='/'>FAQ's</Link> </li>
                  <li> <Link to='/'>Privacy Policy</Link> </li>
                  <li> <Link to='/'>Terms & Conditions</Link> </li>
               </ul>
            </div>
         </Col>

         <Col xs={12} md={12} lg={3} className='mb-5 m-lg-0'>
            <div className='followUs'>
               <h3 className='fw-bold mb-4'>Follow Us</h3>
               <h5 className='fw-bold mb-4'>And get free shopping on <br /> all yours orders!</h5>

               <div className='d-flex d-flex justify-content-center justify-content-lg-start'>
                  <Link to="https://www.facebook.com" target="_blank">
                     <h4> <FontAwesomeIcon icon="fa-brands fa-facebook-f" /></h4>
                  </Link>

                  <Link to="https://twitter.com" target="_blank">
                     <h4> <FontAwesomeIcon icon="fa-brands fa-twitter" /></h4>
                  </Link>

                  <Link to="https://www.pinterest.com" target="_blank">
                     <h4>  <FontAwesomeIcon icon="fa-brands fa-pinterest" /></h4>
                  </Link>
               </div>
            </div>
         </Col>

         <Col xs={12} md={12} lg={4}>
            <div className='signUpNow'>
               <h3 className='fw-bold mb-4'>Sign Up now & get 10% off</h3>
               <h5 className='fw-bold mb-4'>Be the frist to know about our new arrivals <br /> and exclusive offers.</h5>

               <InputGroup className="mt-5">
                  <Form.Control
                     placeholder="Your email address"
                     aria-label="Your email address"
                     aria-describedby="basic-addon2"
                     className='border border-white rounded-0'
                  />
                  <Button variant="dark" size="lg" id="button-addon2" className='rounded-0' >
                     Submit
                  </Button>
               </InputGroup>
            </div>
         </Col>
      </Row>
      </Container>
      </footer>
   )

}
