import React from 'react'
import '../Styles/AboutUs.css'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowUpFromWaterPump, faArrowsToEye, faPlus} from '@fortawesome/free-solid-svg-icons'

import sec1Image from '../images/bg-about05.png'
import sec3Image1 from '../images/noun_Art_2035634.png'
import sec3Image2 from '../images/noun_Sewing Machine_4266660.png'
import sec3Image3 from '../images/noun_Delivery Bike_1367906.png'
import sec3Image4 from '../images/noun_Problem Solving_3239817.png'
import sec3Image5 from '../images/noun_Policies_3146996.png'
import sec3Image6 from '../images/noun_Pinky Promise_4103302.png'

import sec4Image1 from '../images/team1.jpg'
import sec4Image2 from '../images/team1-1.jpg'
import sec4Image3 from '../images/team2.jpg'
import sec4Image4 from '../images/team3.jpg'

import sec5Image1 from '../images/avatar-tes.jpg'
import sec5Image2 from '../images/avatar-tes2.jpg'
import sec5Image3 from '../images/avatar-tes3.jpg'




export default function AboutUs() {
   const navigate = useNavigate()

   library.add(faArrowUpFromWaterPump, faArrowsToEye, faPlus)

   const Sections4Imgs =
      [{id:1, img:sec4Image1, name:'Christina', position:'Head of design'},
       {id:2, img:sec4Image2, name:'Lisa John', position:'Head of design'},
       {id:3, img:sec4Image3, name:'Hiddleston', position:'Head of design'},
       {id:4, img:sec4Image4, name:'Adelaide', position:'Head of design'}
      ]


   return (
      <div>
         <Container className='my-5'>
            <Row xs={1} lg={2}>
               <Col>
                  <div>
                     <Image src={sec1Image} width='100%'  />
                  </div>
               </Col>

               <Col>
                  <div className='d-flex flex-column justify-content-center h-100 ps-lg-4 mt-5 mt-lg-0'>
                     <div className='d-flex mb-3'>
                        <h1 className='section1h1'> 09</h1>
                        <div className='ps-5'>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-water-pump" className='section1i' />
                        <p>YEARS <br /> EXPERIENCE WORKING</p>
                        </div>
                     </div>
                     <h4>Lusion providing rare & beautiful items sourced both locally & globally</h4>
                     <p>
                        We have worked hand-in-hand with a large scale of customers all over the world accomplishing a wide range of industries and services for 10+ years. Each of our work represents our dedication to the quality.
                        <br /><br />
                        Please browse through our case studies to see the difference we can bring to your business.
                        <br /><br />
                        Our comprehensive experience is the key to give our Clients best services.
                     </p>
                     <Button variant="outline-dark" size="lg" className='rounded-0 me-lg-auto mx-xs-auto' type="button"
                        onClick={() => navigate('/ContactUs')}>
                        Contact Us
                     </Button>
                  </div>
               </Col>
            </Row>
         </Container>

         <div className='bg-light py-5'>
            <Container>
               <h2 className='my-5 pb-5'>Responsible and sustainable development</h2>
            <Row xs={1} lg={3}>
               <Col>
                  <div className='sec2 p-5 bg-white'>
                     <div className='sec2Icon bg-dark mx-auto mb-3'>
                        <FontAwesomeIcon icon="fa-solid fa-arrows-to-eye" className='text-light fs-1'/>
                     </div>
                     <h2>Our Vision</h2>
                     <ul>
                        <li><Link to='/' className='text-muted text-decoration-none'> Good Service </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> For Community </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Long Term Development </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Save Our Planet </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Help People </Link></li>
                     </ul>
                  </div>
               </Col>
               <Col>
                  <div className='sec2 p-5 bg-white'>
                     <div className='sec2Icon bg-dark mx-auto mb-3'>
                        <FontAwesomeIcon icon="fa-solid fa-arrows-to-eye" className='text-light fs-1'/>
                     </div>
                     <h2>Our Mision</h2>
                     <ul>
                        <li><Link to='/' className='text-muted text-decoration-none'> Change The Habits </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Best Quality </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Think Big Do Bigger </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Stability & competence </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Safer & Better Life </Link></li>
                     </ul>
                  </div>
               </Col>
               <Col>
                  <div className='sec2 p-5 bg-white'>
                     <div className='sec2Icon bg-dark mx-auto mb-3'>
                        <FontAwesomeIcon icon="fa-solid fa-arrows-to-eye" className='text-light fs-1'/>
                     </div>
                     <h2>Our Promise</h2>
                     <ul>
                        <li><Link to='/' className='text-muted text-decoration-none'> Sustainable Relationship </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Renew Commitment </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Provide The Best Solution </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Profitable Relationship </Link></li>
                        <li><Link to='/' className='text-muted text-decoration-none'> Adapt With People's Needs </Link></li>
                     </ul>
                  </div>
               </Col>
            </Row>
            </Container>
         </div>

         <Container fluid className='py-5 bg-white'>

            <Row xs={2} md={3} lg={6} >
               <Col>
                  <div className='sec3 border-end text-center'>
                     <Image src={sec3Image1} width='50%'className='sec3Image' />
                     <h5>Design</h5>
                  </div>
               </Col>
               <Col>
                  <div className='sec3 border-end text-center'>
                     <Image src={sec3Image2} width='50%'className='sec3Image' />
                     <h5>Design</h5>
                  </div>
               </Col>
               <Col>
                  <div className='sec3 border-end text-center'>
                     <Image src={sec3Image3} width='50%'className='sec3Image' />
                     <h5>Design</h5>
                  </div>
               </Col>
               <Col>
                  <div className='sec3 border-end text-center'>
                     <Image src={sec3Image4} width='35%'className='sec3Image' />
                     <h5>Design</h5>
                  </div>
               </Col>
               <Col>
                  <div className='sec3 border-end text-center'>
                     <Image src={sec3Image5} width='40%' className='sec3Image' />
                     <h5>Design</h5>
                  </div>
               </Col>
               <Col>
                  <div className='sec3 border-end text-center'>
                     <Image src={sec3Image6} width='50%'className='sec3Image' />
                     <h5>Design</h5>
                  </div>
               </Col>
            </Row>
         </Container>


         <Container fluid>
            <h2 className='text-center pt-5'>The Leader Board Of Our Company</h2>
            <Row className="my-5 p-3 p-lg-5" >

               {Sections4Imgs.map( el => (
                  <Col xs={6} lg={3} key={el.id} className='mb-5 mb-lg-0' >
                     <div>
                        <div className='d-inline-block overflow-hidden'>
                        <Image className="SectionsHImgs border" src={el.img} alt='Cat 1' width='100%'/>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                           <div className="py-3">
                              <h5 className=" ">{el.name}</h5>
                              <h6 className="text-muted"> {el.position} items</h6>
                           </div>
                           <Button variant="outline-dark" className='rounded-0'  title='Basket Shopping'>
                              <FontAwesomeIcon icon="fa-solid fa-plus" />
                           </Button>
                        </div>
                     </div>
                  </Col>
               ))}

            </Row>
         </Container>

         <Container fluid className='bg-light pb-5 mb-5' >
            <div className=' mx-lg-5'>
               <h2 className='text-center py-5'>What Our Customers Say</h2>
            <Row xs={1} lg={3}>
               <Col>
                  <div className='text-center text-muted py-5 px-3 bg-white border'>
                     <Image src={sec5Image1} width='90px' />
                     <p className='my-4'>“We love our new duds and continue to be grateful for your efforts on behalf of our planet.”</p>
                     <h6><span className='text-info'> Mary Jane </span> Head of design </h6>

                  </div>
               </Col>
               <Col>
               <div className='text-center text-muted py-5 px-3 bg-white border'>
                     <Image src={sec5Image2} width='90px' />
                     <p className='my-4'>“We love our new duds and continue to be grateful for your efforts on behalf of our planet.”</p>
                     <h6><span className='text-info'> Mary Jane </span> Head of design </h6>

                  </div>
               </Col>
               <Col>
               <div className='text-center text-muted py-5 px-3 bg-white border'>
                     <Image src={sec5Image3} width='90px' />
                     <p className='my-4'>“We love our new duds and continue to be grateful for your efforts on behalf of our planet.”</p>
                     <h6><span className='text-info'> Mary Jane </span> Head of design </h6>

                  </div>
               </Col>
            </Row>
            </div>
            </Container>
      </div>
   )
}
