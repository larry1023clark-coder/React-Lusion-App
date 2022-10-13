import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../Styles/VintageS.css'

import vintageImg1 from '../images/vintage 01.jpg'
import vintageImg2 from '../images/vintage 02.jpg'
import vintageImg3 from '../images/vintage 03.jpg'
import vintageImg4 from '../images/vintage 04.jpg'
import vintageImg5 from '../images/vintage 05.jpg'
import vintageImg6 from '../images/vintage 06.jpg'


export default function VintageS() {
   const vintageImgs = [
      {id: 1, img:vintageImg1}, {id:  2, img:vintageImg2}, {id:3, img:vintageImg3},
      {id:4, img:vintageImg4}, {id:5, img: vintageImg5}, {id: 6, img: vintageImg6}
   ];


  return (
      <Container fluid className='px-2 px-lg-5 pb-5 mb-5'>
         <Row >
            <Col sm={12} md={12} lg={8} className='mb-5 mb-lg-0 ps-3 ps-lg-4'>
               <Row xs={2} lg={3} >

                  {vintageImgs.map((el) => {
                     return(
                     <Col className='p-0' key={el.id}>
                        <div>
                           <Image src={el.img} width='100%' />
                        </div>

                     </Col>
                     )
                  })}

               </Row>
            </Col>

            <Col sm={12} md={12} lg={4}>
               <div className='d-flex flex-column justify-content-evenly h-100 ps-lg-5 px-3 text-center text-lg-start'>
                  <h1 className='Vintage fw-bolder'>Vintage <br /> Stayle</h1>
                  <h5 className='text-muted fw-bold my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</h5>
                  <h2 className='fw-bolder'>____#Lusiontheme</h2>
               </div>

            </Col>
         </Row>

      </Container>
  )
}
