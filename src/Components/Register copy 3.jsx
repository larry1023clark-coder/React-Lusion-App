import React, {useState} from 'react'
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import Joi, { schema } from 'joi-browser';



export default function Register() {
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false);

  let [state, setState] = useState({
    fristName: '',
    lastName: '',
    email: '',
    phone: '',
    password:'',
    passwordCon: '',
    terms: false,
    errors: {},
 })


 console.log(state.terms);

  const handelInput = (e) =>{
    // clone
    let inputState = {...state}
    // edite
    inputState[e.currentTarget.name] = e.currentTarget.value
    // update state
    setState(inputState)
  }

  schema = {
    fristName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(11).required(),
    password: Joi.string().min(3).max(15).required(),
    passwordCon: Joi.string().required().valid(Joi.ref('password')),
    terms: Joi.boolean().invalid(false).required(),
  }


  const checkValidity = ()=>{
    let errors = {};
    let inputState = {...state}
    delete (inputState.errors)
    console.log(inputState);
    let response = Joi.validate(inputState, schema, {abortEarly: false})
    console.log(response)
    if(response.error === null){
        setState({errors})
        return false
    }else{
      for(const e of response.error.details){
        errors[e.path] = e.message
      }
      console.log(response);
      setState({errors})
      console.log(errors)
      return errors
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const form = checkValidity()
    if (form === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(form);

    setValidated(true);
  };

  // const handleSubmit = (event) => {
  //   checkValidity()
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
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

            <Form noValidate validated={validated} onSubmit={handleSubmit} action='/SignIn'>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <FloatingLabel controlId="fristName" label="Frist Name">
                    <Form.Control type="text" name='fristName' placeholder="State" required  className='rounded-0  mb-3 mb-lg-0'
                     value={state.fristName} onChange={handelInput}/>
                    <Form.Control.Feedback type="invalid">
                      {state.errors.fristName}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <FloatingLabel controlId="lastName" label="Last Name">
                    <Form.Control type="text" name='lastName' placeholder="State" required  className='rounded-0'
                     value={state.lastName} onChange={handelInput}/>
                    <Form.Control.Feedback type="invalid">
                      {state.errors.lastName}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <FloatingLabel controlId="email" label="Email Address">
                    <Form.Control type="text" name='email' placeholder="Email" required  className='rounded-0 mb-3 mb-lg-0'
                     value={state.email} onChange={handelInput} />
                    <Form.Control.Feedback type="invalid">
                      {state.errors.email}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <FloatingLabel controlId="phoneNumber" label="Phone number">
                    <Form.Control type="tel" name='phone' placeholder="State" required  className='rounded-0'
                     value={state.phone} onChange={handelInput} />
                    <Form.Control.Feedback type="invalid">
                      {state.errors.phone}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                  <FloatingLabel controlId="passInput" label="Password">
                    <Form.Control type="text" name='Password' placeholder="password" required  className='rounded-0 mb-3 mb-lg-0'
                     value={state.password} onChange={handelInput} />
                    <Form.Control.Feedback type="invalid">
                      {state.errors.password}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom06">
                  <FloatingLabel controlId="passInputCon" label="Password confirmation">
                    <Form.Control type="text" name='PasswordCon' placeholder="State" required  className='rounded-0'
                     value={state.passwordCon} onChange={handelInput} />
                    <Form.Control.Feedback type="invalid">
                    {state.errors.PasswordCon}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required name='terms'
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  value={state.terms} onChange={handelInput}
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
