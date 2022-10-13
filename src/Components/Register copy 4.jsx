import React, {useState} from 'react'
import { Container, Row, Col, FloatingLabel, Form, InputGroup, Button } from 'react-bootstrap';

import { useFormik, Formik} from 'formik';

import { useNavigate } from 'react-router-dom';
// import Formik from 'react-formik-ui'

import * as yup from 'yup';





export default function Register() {
  const navigate = useNavigate()

  const schema = yup.object().shape({
    firstName: yup.string().required().min(3).max(30),
    lastName: yup.string().required().min(3).max(30),
    // email: yup.string().email().required(),
    // phone: yup.string().length(11).required(),
    // password: yup.string().min(3).max(15).required(),
    passwordCon: yup.string().required().oneOf([yup.ref('password'), null]),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });



  return (

    <Container className='my-5'>
    <Row>
      <Col xs={12} md={12} lg={8} className='mx-auto'>
        <div className=' bg-light px-3 px-lg-5'>
          <h1 className='text-center py-5'>Register</h1>

          <Formik


            validationSchema={schema}
            onSubmit={() => navigate('/SignIn')}
            initialValues={{
              firstName: '',
              lastName: '',
              username: '',
              city: '',
              state: '',
              zip: '',
              terms: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,

            }) => (
              <Form noValidate validated={false}  onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <FloatingLabel controlId="fristName" label="Frist Name">
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                        isValid={touched.lastName && !errors.lastName}
                      />
                      <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationFormik03">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      isInvalid={!!errors.city}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik04">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      isInvalid={!!errors.state}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Zip"
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                      isInvalid={!!errors.zip}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                    id="validationFormik0"
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            )}
          </Formik>
        </div>
        </Col>
      </Row>
    </Container>
  );
}