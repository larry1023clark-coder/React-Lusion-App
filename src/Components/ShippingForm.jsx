import React, { useEffect } from 'react'
import { useState } from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';



export default function ShippingForm() {


   useEffect( () => {
      console.log('useEffect log');
      fetch('https://countriesnow.space/api/v0.1/countries')
      .then(res => res.json())
      .then(data => setCountryAndCity(data.data))
      .catch(error => console.log('error', error));
   }, [])



   let [countryAndCity, setCountryAndCity] = useState([])
   let [slectedCountry, setSlectedCountry] = useState(0)
   let [city, setCity] = useState([])


   function slectedFunc(e){
      let newSlected = slectedCountry;
      newSlected = e.target.value
      setSlectedCountry(newSlected)
   }

   useEffect(  () => {
      async function slectCity(){
         let newCity = city
         newCity = countryAndCity[slectedCountry].cities
         setCity(newCity)
      }
      slectCity()
   }, [slectedCountry])


   console.log(countryAndCity);
   console.log(slectedCountry);
   console.log(city);

   return (
    <Container>
      <div>
         <h3>Shipping address</h3>

         <Form action="" method="post">
            <FloatingLabel label="Country/region">
            <Form.Select aria-label="Default select example" className='rounded-0 '
             onChange={(e) => slectedFunc(e)} >
               <option>Country/region</option>
               { countryAndCity.map((e, i) =>(
               <option key={i} value={i} > {e.country} </option>
               ))}
            </Form.Select>
            </FloatingLabel>
            <Row className="my-3">
               <Form.Group as={Col} md="6" >
                  <FloatingLabel controlId="firstName" label="Frist Name">
                    <Form.Control type="text" name='firstName' placeholder="State"  className='rounded-0  mb-3 mb-lg-0'
                     />
                    <Form.Control.Feedback type="inValid" className='text-danger'>  </Form.Control.Feedback>
                  </FloatingLabel>
               </Form.Group>

               <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <FloatingLabel controlId="lastName" label="Last Name">
                    <Form.Control type="text" name='lastName' placeholder="State"   className='rounded-0'
                     />
                    <Form.Control.Feedback type="inValid" className='text-danger'>  </Form.Control.Feedback>
                  </FloatingLabel>
               </Form.Group>
            </Row>
            <FloatingLabel controlId="firstName" label="Address" className='mt-3'>

            <Form.Control type="text" name='address1' placeholder="Address"  className='rounded-0  mb-3 mb-lg-0'
               />
            <Form.Control.Feedback type="inValid" className='text-danger'>  </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel controlId="address2" label="Apartment, suite, etc. (optional)" className='mt-3'>
               <Form.Control type="text" name='address2' placeholder="Apartment, suite, etc. (optional)"  className='rounded-0  mb-3 mb-lg-0'
               />
               <Form.Control.Feedback type="inValid" className='text-danger'>  </Form.Control.Feedback>
            </FloatingLabel>

            <Row className="my-3">
               <Form.Group as={Col} md="8" >
                  <FloatingLabel label="City">
                     <Form.Select aria-label="Default select example" className='rounded-0 mb-3'>
                        <option>select City</option>
                        {city.map((e, i) => (
                        <option key={i} value={e}>{e}</option>
                        ))}
                     </Form.Select>
                  </FloatingLabel>
               </Form.Group>

               <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <FloatingLabel controlId="lastName" label="Postal code">
                    <Form.Control type="text" name='lastName' placeholder="State"   className='rounded-0'
                     />
                    <Form.Control.Feedback type="inValid" className='text-danger'>  </Form.Control.Feedback>
                  </FloatingLabel>
               </Form.Group>
            </Row>

            <Form.Check type='checkbox' id='Shipaddress'
            label='Save this information for next time'
            />
            <div className='text-center'>
               <Button variant="dark" className='rounded-0 my-3 px-5' size='lg' >
                  Continue to shipping
               </Button>
            </div>

         </Form>
      </div>
    </Container>
  )
}
