import React, {useContext} from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import NameContext from '../NameContext';

import {useNavigate} from 'react-router-dom'

export default function RelatedProducts(props) {
   const navigate = useNavigate()

   const directToDetails = (e) =>{
      navigate('/ProductDetails', {state: e})
      console.log(e);
   }

   const {BestSellingData}  = useContext(NameContext);


   return (
      // <NameContext.Consumer>

      <Container fluid className="my-5 p-3 p-lg-5">
         <h1 className='mt-5 pt-5'>Related Products</h1>
         <Row >

            {BestSellingData.filter(e => e.type === props.location.state.type)
            .filter(e => e.id !== props.location.state.id)
            .map( (el)=> (
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

                     </div>

                  </div>
               </Col>
            ))}

         </Row>
      </Container>

      // </NameContext.Consumer>
   )
}
