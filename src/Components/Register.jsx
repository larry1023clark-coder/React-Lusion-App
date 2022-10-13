import React from 'react'
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import {registerSchema} from './Schemas';








export default function Register() {
  const navigate = useNavigate()

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 500));
    actions.resetForm();
    navigate('/SignIn')
  };

  const {
    isValid,
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password:'',
      passwordCon: '',
      terms: false,
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  console.log(errors);

  console.log(touched);
  console.log(isSubmitting);
  console.log(errors.firstName);
  console.log(errors.lastName);
  console.log(errors.email);
  console.log(touched.terms);
  console.log(values.terms);
  console.log(isValid);







  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const form = checkValidity()
  //   if (form === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   console.log(form);

  //   setValidated(true);
  // };






  return (
    <Container className='my-5'>
      <Row>
        <Col xs={12} md={12} lg={8} className='mx-auto'>
          <div className=' bg-light px-3 px-lg-5'>
            <h1 className='text-center py-5'>Register</h1>

            <Form noValidate validated={isSubmitting}  onSubmit={handleSubmit} action='/SignIn' autoComplete='off'>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" >
                  <FloatingLabel controlId="firstName" label="Frist Name">
                    <Form.Control type="text" name='firstName' placeholder="State"  className='rounded-0  mb-3 mb-lg-0'
                     value={values.firstName}
                     onInput={handleChange}
                     onBlur={handleBlur}
                     isInvalid={errors.firstName ? true : false }
                     isValid={ values.firstName !=='' && !errors.firstName ? true : false }/>

                    <Form.Control.Feedback type="inValid" className='text-danger'> {errors.firstName} </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <FloatingLabel controlId="lastName" label="Last Name">
                    <Form.Control type="text" name='lastName' placeholder="State"   className='rounded-0'
                     value={values.lastName}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     isInvalid={errors.lastName ? true : false }
                     isValid={ values.lastName !=='' && !errors.lastName ? true : false }/>

                    <Form.Control.Feedback type="inValid" className='text-danger'> {errors.lastName} </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <FloatingLabel controlId="email" label="Email Address">
                    <Form.Control type="text" name='email' placeholder="Email" required  className='rounded-0 mb-3 mb-lg-0'
                     value={values.email} onChange={handleChange}
                     isInvalid={errors.email ? true : false }
                     isValid={ values.email !=='' && !errors.email ? true : false }/>
                    <Form.Control.Feedback type="inValid" className='text-danger'>
                      {errors.email}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <FloatingLabel controlId="phoneNumber" label="Phone number">
                    <Form.Control type="tel" name='phone' placeholder="State" required  className='rounded-0'
                     value={values.phone} onChange={handleChange}
                     isInvalid={errors.phone ? true : false }
                     isValid={ values.phone !=='' && !errors.phone ? true : false }/>
                    <Form.Control.Feedback type="inValid" className='text-danger'>{errors.phone}</Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <FloatingLabel controlId="passInput" label="Password">
                    <Form.Control type="password" name='password' placeholder="password" required  className='rounded-0 mb-3 mb-lg-0'
                     value={values.password} onChange={handleChange}
                     isInvalid={errors.password ? true : false }
                     isValid={ values.password !=='' && !errors.password ? true : false }/>
                    <Form.Control.Feedback type="inValid" className='text-danger'>
                      {errors.password}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom06">
                  <FloatingLabel controlId="passInputCon" label="Password confirmation">
                    <Form.Control type="password" name='passwordCon' placeholder="State" required  className='rounded-0'
                     value={values.passwordCon} onChange={handleChange}
                     isInvalid={errors.passwordCon ? true : false }
                     isValid={ values.passwordCon !=='' && !errors.passwordCon ? true : false }/>
                    <Form.Control.Feedback type="inValid" className='text-danger'>
                    {errors.passwordCon}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required name='terms' id='terms'
                  label="Agree to terms and conditions"
                  feedback={errors.terms}
                  feedbackType="inValid"
                  value={values.terms} onChange={handleChange}
                  isInvalid={touched !== null && !!errors.terms ? true :false }
                  isValid={ values.terms && true  }
                  className={errors.terms ? 'text-danger' : ''}
                />
              </Form.Group>
              <Button variant="dark" size="lg" className='rounded-0 w-100 my-4' type="submit">Submit</Button>
            </Form>

            <Button variant="outline-dark" size="lg" className='rounded-0 w-100 mb-5' type="button"
              onClick={() => navigate('/SignIn')}> Sign In
            </Button>

          </div>
        </Col>
      </Row>
    </Container>
  )
}
