import React, { useState } from 'react'
import '../Styles/SignIn.css'

import { Container, Row, Col, Form, Button, FloatingLabel, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




export default function SignIn () {
   const navigate = useNavigate()

   let [state, setState] = useState({
      email: '',
      password: '',
      errors: {
      }
   })

   let emailSetuation = []
   let passSetuation = []


   console.log(state);
   console.log(state);
   let handelChange = e =>{
      let newState = {...state};                                  // clone
      newState[e.currentTarget.name] = e.currentTarget.value      // edite
      setState(newState)                                          // update state
   }


   let validateChick = () =>{
      // clone
      let newState = {...state}
      // edite
      if(state.email === ""){
         newState.errors.email = 'isInvalid'
         emailSetuation = ['isInvalid']
         // newState.errors.email.setuation = "isInvalid"
         // newState.errors.email.type = "invalid"
         // newState.errors.email.message = "Please enter an Email."
      }else{
         delete newState.errors.email
         // newState.errors.email.message = "isValid"
         emailSetuation = ["isValid"]
         // newState.errors.email.type = "valid"
      };


      if(state.password === ""){
         newState.errors.password = 'isInvalid'
         passSetuation = ['isInvalid']
         // newState.errors.password.setuation = "isInvalid"
         // newState.errors.password.type = "invalid"
         // newState.errors.password.message = "Please enter an password."
      }else{
         delete newState.errors.password
         // newState.errors.password = "isValid"
         passSetuation = ["isValid"]
         // newState.errors.password.type = "valid"
      };
      // update state
      setState(newState);
      console.log(newState);
      console.log(...emailSetuation);
      return Object.keys(newState.errors).length === 0 ? false : newState.errors;
   }

   let submitValidate = e =>{
      const errors = validateChick()
      if(errors){
         e.preventDefault()
         return console.log('not Valid');
      }else{
         return console.log('Valid');
      }
   }



   return (
    <Container>
      <Row>
         <Col xs={12} md={8} lg={6} className='my-5 mx-auto'>
            <div className='bg-light p-2 p-lg-5'>
               <h1 className='text-center'>Sign In</h1>
               <Form className='mt-5' onSubmit={submitValidate} action='/' >

                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                     <Form.Control type="email" placeholder="Email address" className='rounded-0'
                        name='email' value={state.email || "" } onChange={handelChange} {...emailSetuation}
                     />

                     <Form.Control.Feedback  type="invalid">
                        can not emppty
                     </Form.Control.Feedback>
                     {state.errors.email &&(
                        <Alert variant='danger'> {state.errors.email} </Alert>
                     )}
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password" className='my-4'>
                     <Form.Control type="password" name='password' placeholder="Password"  className='rounded-0'
                        value={state.password || "" }  onChange={handelChange} {...passSetuation}
                     />

                     <Form.Control.Feedback type="invalid">
                        can not emppty
                     </Form.Control.Feedback>

                     {state.errors.password &&(
                        <Alert variant='danger'> {state.errors.password} </Alert>
                     )}
                  </FloatingLabel>

                  <Link to="/" className='mt-4'> Forget your password ? </Link> <br /> <br />

                  <Button variant="dark" size="lg" className='rounded-0 w-100 mb-3' type="submit">
                     Submit
                  </Button>

                  <Button variant="outline-dark" size="lg" className='rounded-0 w-100' type="button"
                     onClick={() => navigate('/Register')}>
                     Register
                  </Button>
               </Form>
            </div>
         </Col>
      </Row>
    </Container>
   )
}
