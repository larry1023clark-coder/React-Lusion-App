import React from 'react'
import '../Styles/ContactUs.css'

import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faPhone, faEnvelopeOpenText, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import contactUsImg from '../images/contact-us-v4.jpg'
export default function ContactUs() {

  library.add(faPhone, faEnvelopeOpenText, faLocationDot)


  const iframe = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54595.87958695696!2d29.885638000000004!3d31.214011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc201e7869ae9971f!2z2YLZhNi52Kkg2YLYp9mK2KrYqNin2Yo!5e0!3m2!1sar!2seg!4v1660793115247!5m2!1sar!2seg"
   width="100%" height="518" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`

  function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe? props.iframe : ""}} />);
  }



  return (
    <div>
      <Row>
        <Col xs={12} lg={5} >
          <div className='m-5 me-0'>
            <h2>Contact Info</h2>
            <div className='ms-4 mt-5'>
              <div className='d-flex'>
                <div className='contactIcon'>
                  <FontAwesomeIcon icon="fa-solid fa-phone" />
                </div>
                <div>
                  <h5>Phone:</h5>
                  <h6>
                    <Link to='tel:+98098760954' className='infoLink' >+98 0 9876 0954</Link>  /
                    <Link to='tel:+98098760955' className='infoLink' > +98 0 9876 0955</Link>
                  </h6>
                </div>
              </div>
              <hr />

              <div className='d-flex'>
                <div className='contactIcon'>
                  <FontAwesomeIcon icon="fa-solid fa-envelope-open-text" />
                </div>
                <div>
                  <h5>Email:</h5>
                  <h6>
                    <Link to='mail:mail@shopify.com' className='infoLink' >mail@shopify.com</Link>
                  </h6>
                </div>
              </div>
              <hr />

              <div className='d-flex'>
                <div className='contactIcon'>
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                </div>
                <div>
                  <h5>Address:</h5>
                  <h6  className='infoLink'> Box 565, Charlestown, Nevis, West Indies, Caribbean </h6>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col xs={12} lg={7} className='px-0'>
          <div>
          <Image src={contactUsImg} className='contactUsImg' />
          </div>
        </Col>
      </Row>

      <Container style={{marginTop: '-250px'}} className='mb-5'>
        <Row>
          <Col xs={12} lg={8} className='formSide p-5'>
            <div >
              <h4>Send us a message</h4>
              <Form className='my-4'>
                <Form.Control type="name" placeholder="Name" className="formInput mb-4" />
                <Form.Control type="email" placeholder="Email" className="formInput mb-4" />
                <Form.Control type="tel" placeholder="Phone" className="formInput mb-4" />
                <Form.Control as="textarea" rows={3} placeholder="Message" className="formInput mb-4" />
                <Button variant="outline-dark" type='button' className='formButton'>SEND MESSAGE</Button>
              </Form>
            </div>
          </Col>

          <Col className='p-lg-0 mt-5 mt-lg-0'>
            <Iframe iframe={iframe} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
