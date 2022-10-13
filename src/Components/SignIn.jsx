import React from 'react'
import '../Styles/SignIn.css'

import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik';
import {signInSchema} from './Schemas';



export default function SignIn () {
   const navigate = useNavigate()


   const onSubmit = async (values, actions) => {
      console.log(values);
      console.log(actions);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      actions.resetForm();
      navigate('/')
      return values
   };


   const {
      // isValid,
      // isValidating,
      values,
      errors,
      // touched,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
   } = useFormik({
      initialValues: {
      email: '',
      password:'',
      },
      validationSchema: signInSchema,
      onSubmit,
   });








   return (
    <Container>
      <Row>
         <Col xs={12} md={8} lg={6} className='my-5 mx-auto'>
            <div className='bg-light p-2 p-lg-5'>
               <h1 className='text-center'>Sign In</h1>
               <Form className='mt-5'  noValidate validated={isSubmitting}  onSubmit={handleSubmit} action='/SignIn' autoComplete='off'>

                  <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                     <Form.Control type="email" placeholder="Email address" className='rounded-0'
                        name='email'
                        value={values.email}
                        onInput={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.email ? true : false }
                        isValid={ values.email !=='' && !errors.email ? true : false }
                     />
                     {console.log(values)}
                     <Form.Control.Feedback type="inValid" className='text-danger'>
                     {errors.email}
                     </Form.Control.Feedback>

                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password" className='my-4'>
                     <Form.Control type="password" name='password' placeholder="Password"  className='rounded-0'
                        value={values.password}
                        onInput={handleChange}
                        onBlur={handleBlur}
                        isInvalid={errors.password ? true : false }
                        isValid={ values.password !=='' && !errors.password ? true : false }
                     />

                     <Form.Control.Feedback type="invalid" className='text-danger'>
                     {errors.password}
                     </Form.Control.Feedback>


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
