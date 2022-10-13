import React from "react";
import '../Styles/SectionsH.css'

import { Container, Row, Col, Image } from "react-bootstrap";

import ImageC1 from '../images/cate-df-1_360x.jpg';
import ImageC2 from '../images/cate-df-2_360x.jpg';
import ImageC3 from '../images/cate-df-3_360x.jpg';
import ImageC4 from '../images/cate-df-4_360x.jpg';



export default function SectionsH () {
   const SectionsHImgs =
      [{id:1001, img:ImageC1, type:'Accessories', itemsCount:5},
       {id:1002, img:ImageC2, type:'Bag Brand', itemsCount:20},
       {id:1003, img:ImageC3, type:'Clothing', itemsCount:6},
       {id:1004, img:ImageC4, type:'Shoes', itemsCount:8}
      ]




   return (
         <Container fluid>
            <Row className="my-5 p-3 p-lg-5" >

               {SectionsHImgs.map( el => (
                  <Col xs={12} md={6} lg={3} key={el.id} className='mb-5 mb-lg-0' >
                     <div>
                        <div className="d-inline-block overflow-hidden">
                           <Image className="SectionsHImgs" src={el.img} alt='Cat 1' width='100%'/>
                        </div>
                        <div className="py-3">
                           <span className="fs-3 fw-bold">{el.type}</span>
                           <span className="fs-5 "> {el.itemsCount} items</span>
                        </div>
                     </div>
                  </Col>
               ))}
            </Row>
         </Container>
   )

}

