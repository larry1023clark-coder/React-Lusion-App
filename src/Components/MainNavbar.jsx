import React, {Fragment} from 'react';
import '../Styles/MainNavbar.css'

import { useCart } from 'react-use-cart';

import { NavLink, Link } from 'react-router-dom';
import { Container, Offcanvas, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'

import downListImg from '../images/blog-home-2_480x480.jpg'



export default function MainNavbar(props) {
   library.add(faBasketShopping, faUser)

   const { totalItems } = useCart();



  return (
      <Fragment>
        <Navbar  key='md' bg="light" expand="md" sticky="top">
            <Container fluid className="mx-2 mx-lg-5" >
               <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />

               <div>
                  <NavLink to="/" className='myBrand text-decoration-none text-dark'>Lusion</NavLink>
               </div>

               <Navbar.Offcanvas
                  id='offcanvasNavbar-expand-md'
                  aria-labelledby='offcanvasNavbarLabel-expand-md'
                  placement="start"
                  >
                  <Offcanvas.Header closeButton >
                     <Offcanvas.Title id='offcanvasNavbarLabel-expand-md' className='myBrand'>
                        Lusion
                     </Offcanvas.Title>
                  </Offcanvas.Header>



                  <Offcanvas.Body   >
                     <Nav className="d-flex justify-content-lg-center flex-grow-1 gap-2 align-items-center">
                        <NavLink className='NavLink me-3' to="/">Home</NavLink>
                        <NavLink className='NavLink me-3 nav-item' to="/Shop">Shop</NavLink>
                        <NavLink className='NavLink me-3' to="/AboutUs">About Us</NavLink>
                        <NavLink className='NavLink me-3' to="/ContactUs">Contact Us</NavLink>

                        <NavDropdown title="Pages"  className='fs-5'>
                           <div className='p-3'>
                              <Image src={downListImg} width='240px' />
                              <p>The New Essentials to Always Have On Hand T</p>
                           </div>
                           <NavDropdown.Divider />
                           <NavDropdown.Item > <Link to='/' className='Link-dropdown'> Home</Link>  </NavDropdown.Item>
                           <NavDropdown.Item > <Link to='/Shop' className='Link-dropdown'>Shop</Link>  </NavDropdown.Item>
                           <NavDropdown.Item > <Link to='/AboutUs' className='Link-dropdown'>About Us</Link>  </NavDropdown.Item>
                           <NavDropdown.Item > <Link to='/ContactUs' className='Link-dropdown'>Contact Us</Link>  </NavDropdown.Item>
                        </NavDropdown>
                     </Nav>
                  </Offcanvas.Body>
               </Navbar.Offcanvas>

                  <div className='basket-shopping'>
                     <Link to="/SignIn" className='text-decoration-none text-black fs-4'>
                        <FontAwesomeIcon icon="fa-solid fa-user" title='Sign In'/>
                     </Link>

                     <FontAwesomeIcon icon="fa-solid fa-basket-shopping" className='fa-basket-shopping-nav fs-4 ms-4'
                     onClick={props.toggleShow} title='Basket Shopping'/>

                     <span className='position-absolute top-25 translate-middle badge rounded-pill bg-black'>
                     {totalItems}</span>
                  </div>

            </Container>
        </Navbar>
      </Fragment>
  );
}


