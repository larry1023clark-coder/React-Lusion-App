import React,{useState } from 'react'
import '../Styles/ProductDetails.css'
import { Container, Row, Col, Image, Button} from 'react-bootstrap'
import { useLocation, useNavigate, Link} from 'react-router-dom'

import RelatedProducts from './RelatedProducts'
import DeliveryRolesModal from './DeliveryRolesModal'

import { FaFacebookF } from 'react-icons/fa';
import { BsFillShareFill, BsTwitter } from 'react-icons/bs'

import { useCart } from 'react-use-cart'





export default function ProductDetails() {
   const navigate = useNavigate()
   const location = useLocation()
   const { addItem } = useCart();


   const productImgs = location.state.img


   let [bigImgsIndex, setBigImgsIndex] = useState(0)
   const showImgLarg = (e) =>{
      let nBigImgsIndex = bigImgsIndex
      nBigImgsIndex = e
      setBigImgsIndex(nBigImgsIndex)
   }


   const [modalShow, setModalShow] = useState(false);

   return (

      <Container fluid className='my-5 px-3 px-lg-5'>
         <h1 className='mb-5'>Product Details</h1>
         <Row>
            <Col xs={12} md={12} lg={7} >
               <Row>
                  <Col xs={12} md={12} lg={2} className='order-1  order-lg-0 mt-3 mt-lg-0 mx-auto'>
                     <div className='d-flex justify-content-center flex-wrap gap-2'>
                        {productImgs.map((e, i) => (
                        <Image src={e} width='100px' className='border' key={i}
                        onClick={() => showImgLarg(i) } />
                        ))}
                     </div>
                  </Col >
                  <Col>
                     <div>
                     <Image src={location.state.img[bigImgsIndex]} width='100%' className='border'/>
                     </div>
                  </Col>
               </Row>
            </Col>

            <Col>
               <div className='my-5 my-lg-5' >
                  <h3>{location.state.name}</h3>
                  <h3>{location.state.type}</h3>
                  <h5 className={location.state.evaluate}> &#160;</h5>
                  <h3>${location.state.price}</h3>

                  <Button variant="dark" className='rounded-0 w-100 my-3 fs-2'  title='Basket Shopping'
                     onClick={() => addItem(location.state)}>
                     Add to Cart
                  </Button>

                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>

                  <ul  className=''>
                     <li>Availability: <span className='text-danger'>Not Available</span> </li>
                     <li>SKU: CT5062-100</li>
                     <li>Type: {location.state.type} </li>
                     <li>Vendor: Fashion</li>
                     <li
                        className='cursor-pointer fw-bold'
                        onClick={() => setModalShow(true)}
                        >
                        Delivery & return
                     </li>
                  </ul>

                  <DeliveryRolesModal show={modalShow} onHide={() => setModalShow(false)}/>






                  <div className='d-flex gap-3 position-relative'>
                     <div className='socialShareP Share-F'>
                        <Link to='/' className='text-light'> <FaFacebookF /> </Link>
                     </div>

                     <div className='socialShareP Share-T'>
                        <Link to='/' className='text-light'> <BsTwitter /> </Link>
                     </div>

                     <div className='socialShareP Share-S'>
                        <Link to='/' className='text-light'> <BsFillShareFill /> </Link>
                     </div>
                  </div>

                  <Button variant="outline-dark" size="lg" className='rounded-0 w-100 my-4 position-relative'  type="button"
                     onClick={() => navigate(-1)}>
                     Go Back
                  </Button>
               </div>
            </Col>
         </Row>




         <RelatedProducts location={location} />
      </Container>
   )
}
