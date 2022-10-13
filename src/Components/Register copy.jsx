import React, { useState } from 'react'
import '../Styles/Register.css'

import { Container, Row, Col, Form, FloatingLabel, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import Joi, { schema } from 'joi-browser'



export default function Register() {
   const navigate = useNavigate()

   let [state, setState] = useState({
      fristName: '',
      lastName: '',
      email: '',
      phone: '',
      password:'',
      PasswordCon: '',
      errorsMsg: {},
   })


   function handelInput(e){
      let inputState = {...state}
      inputState[e.currentTarget.name] = e.currentTarget.value
      setState(inputState)
   }


   schema = {
      fristName: Joi.string().alphanum().min(3).max(30).required(),
      lastName: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
      phone: Joi.string().length(11).required(),
      password: Joi.string().min(3).max(15).required(),
      PasswordCon: Joi.string().required().valid(Joi.ref('password')),
   }


   function checkValidity (){
      let errorsMsg = {};
      let inputState = {...state}
      delete (inputState.errorsMsg)
      console.log(inputState);
      let response = Joi.validate(inputState, schema, {abortEarly: false})

      console.log(response)

      if(response.error === null){
         // setState({errorsMsg})
         return null
      }else{
         for(const e of response.error.details){
            errorsMsg[e.path] = e.message
         }
         setState({errorsMsg})
         console.log(errorsMsg)
         console.log(state)
         return errorsMsg
      }


   }



   let [validated, setValidated] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
     let response = checkValidity();
     if (response !== null) {
         e.preventDefault();
         // e.stopPropagation();
         console.log(state.errorsMsg);
         return console.log(validated, 'not Valid');
     }else{
         setValidated(true);
         console.log(state);
         return console.log(validated, 'Valid');
      }
   };

  return (
   <Container className='my-5'>
      <Row>
         <Col xs={12} md={12} lg={8} className='mx-auto'>
            <div className=' bg-light px-3 px-lg-5'>
            <h1 className='text-center py-5'>Register</h1>

            <Form  validated={validated} onSubmit={handleSubmit} >
               <Row className="row-cols-1 row-cols-lg-2 g-2 ">

                  <Col>
                     <FloatingLabel controlId="fristName" label="Frist Name">
                        <Form.Control type="text" name='fristName' placeholder="Frist Name"  className='rounded-0'
                        value={state.fristName} onChange={handelInput} />
                        {state.errorsMsg.fristName && (
                           <Alert variant='danger'>{state.errorsMsg.fristName}</Alert>
                        )}
                     </FloatingLabel>
                  </Col>
                  <Col>
                     <FloatingLabel controlId="lastName" label="Last Name">
                        <Form.Control type="text" name='lastName' placeholder="Last Name"  className='rounded-0'
                        value={state.lastName} onChange={handelInput} />
                        {state.errorsMsg.lastName && (
                           <Alert variant='danger'>{state.errorsMsg.lastName}</Alert>
                        )}
                     </FloatingLabel>
                  </Col>

                  <Col>
                     <FloatingLabel controlId="emailInput" label="Email address">
                        <Form.Control type="email" name='email' placeholder="name@example.com"  className='rounded-0'
                        value={state.email} onChange={handelInput} />
                        {state.errorsMsg.email && (
                           <Alert variant='danger'>{state.errorsMsg.email}</Alert>
                        )}
                     </FloatingLabel>
                  </Col>
                  <Col>
                     <FloatingLabel controlId="phoneNumber" label="Phone number">
                        <Form.Control type="tel" name='phone' placeholder="Phone number"  className='rounded-0'
                        value={state.phone} onChange={handelInput} />
                        {state.errorsMsg.phone && (
                           <Alert variant='danger'>{state.errorsMsg.phone}</Alert>
                        )}
                     </FloatingLabel>
                  </Col>
                  <Col>
                     <FloatingLabel controlId="passInput" label="Password">
                        <Form.Control type="Password"  name='password' placeholder="Password"   className='rounded-0'
                        value={state.password} onChange={handelInput} />
                        {state.errorsMsg.password && (
                           <Alert variant='danger'>{state.errorsMsg.password}</Alert>
                        )}
                     </FloatingLabel>
                  </Col>
                  <Col>
                     <FloatingLabel controlId="passInputCon" label="Password confirmation">
                        <Form.Control type="Password" name='PasswordCon' placeholder="Password confirmation"  className='rounded-0'
                        value={state.PasswordCon} onChange={handelInput}  />
                        {state.errorsMsg.PasswordCon && (
                           <Alert variant='danger'>{state.errorsMsg.PasswordCon}</Alert>
                        )}
                     </FloatingLabel>
                  </Col>
               </Row>
               <Button variant="dark" size="lg" className='rounded-0 w-100 my-4' type="submit">
                   Register
               </Button>
            </Form>

               <Button variant="outline-dark" size="lg" className='rounded-0 w-100 mb-5' type="button"
               onClick={() => navigate('/SignIn')}>
                  Sign In
               </Button>

            </div>
         </Col>
      </Row>

   </Container>
  )
}
