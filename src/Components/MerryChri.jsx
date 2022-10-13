import React from "react";
import '../Styles/MerryChri.css'

import { Container, Row, Col, Button } from "react-bootstrap";






export default function MerryChri(){

   return(
      <Container className="merryChri">

         <Row >
            <Col sm={12} md={12} lg={7}>
               <div className="christmas text-center d-flex flex-column justify-content-center align-items-star mb-5 ps-5">
                  <div>
                     <h2 className="m-0 fs-1">MERRY</h2>
                     <h1>Christmas <br /> 40
                        <span className="fs-3"> <sup>%</sup> <sub>Off</sub>  </span> <br />
                     </h1>

                  </div>
                  <div>
                     <Button className="rounded-0 mt-4" variant="outline-dark" size="lg" >Shop Now</Button>
                  </div>
               </div>
            </Col>

            <Col sm={1}> </Col>

            <Col sm={12} md={12} lg={3}>
               <div className="christmas2 text-center d-flex flex-column justify-content-center align-items-center ps-5 ">
                  <h2 className="m-0 fs-1">Your Next</h2>
                  <h1>Purchase <br /> 10
                     <span className="fs-3"> <sup>%</sup> <sub>Off</sub>  </span> <br />
                  </h1>

                  <Button className="rounded-0 text-center" variant="outline-dark" size="lg" >Shop Now</Button>

               </div>
            </Col>

         </Row>

      </Container>
   )
}