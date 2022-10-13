import React,{ useState} from 'react';
import './Styles/App.css';
import {Routes, Route} from 'react-router-dom';


import MainNavbar from './Components/MainNavbar';
import BasketShopping from './Components/BasketShopping';
import MainFooter from './Components/MainFooter';
import Home from './Components/Home';
import Shop from './Components/Shop';
import SignIn from './Components/SignIn'
import Register from './Components/Register';
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound';
import ProductDetails from './Components/ProductDetails';
import NameContext from './NameContext';
import Checkout from './Components/Checkout';

import BestSelImg1 from './images/Layer-BestSelling 01.jpg'
import BestSelImg2 from './images/Layer-BestSelling 02.jpg'
import BestSelImg3 from './images/Layer-BestSelling 03.jpg'
import BestSelImg4 from './images/Layer-BestSelling 04.jpg'
import BestSelImg5 from './images/Layer-BestSelling 05.jpg'
import BestSelImg6 from './images/Layer-BestSelling 06.jpg'

import BestSelImg7_1 from './images/jenes blue 02.jpg'
import BestSelImg7_2 from './images/jenes blue 07.jpg'
import BestSelImg7_3 from './images/jenes blue 03.jpg'
import BestSelImg7_4 from './images/jenes blue 04.jpg'
import BestSelImg7_5 from './images/jenes blue 05.jpg'
import BestSelImg7_6 from './images/jenes blue 06.jpg'

import BestSelImg8_1 from './images/blouse_6703777712_01.jpg'
import BestSelImg8_2 from './images/blouse_6703777712_02.jpg'
import BestSelImg8_3 from './images/blouse_6703777712_03.jpg'

import BestSelImg9_1 from './images/dress_5814619742_01.jpg'
import BestSelImg9_2 from './images/dress_5814619742_02.jpg'
import BestSelImg9_3 from './images/dress_5814619742_03.jpg'
import BestSelImg9_4 from './images/dress_5814619742_04.jpg'
import BestSelImg9_5 from './images/dress_5814619742_05.jpg'

import BestSelImg10_1 from './images/Dress_0503326613_01.jpg'
import BestSelImg10_2 from './images/Dress_0503326613_02.jpg'
import BestSelImg10_3 from './images/Dress_0503326613_03.jpg'
import BestSelImg10_4 from './images/Dress_0503326613_04.jpg'
import BestSelImg10_5 from './images/Dress_0503326613_05.jpg'

import SShopImg1 from './images/SectionShop 01_540x.jpg'
import SShopImg2 from './images/SectionShop 02_540x.jpg'
import SShopImg3 from './images/SectionShop 03_540x.jpg'
import SShopImg4 from './images/SectionShop 04_540x.jpg'






export default function App() {


   let [show, setShow] = useState(false);
   let handleClose = () => setShow(false);
   let toggleShow = () => setShow((s) => !s);

   const  BestSellingData =  // BestSellingData
   [{id:11, img:[BestSelImg1], type:'Jacket', name: 'Short Straight Coat', quantity:1, price:'500.90', evaluate:'s4'},
    {id:12, img:[BestSelImg2], type:'blouse', name: 'blouse blouse blouse', quantity:1, price:'200.00', evaluate:'s4-5'},
    {id:13, img:[BestSelImg3], type:'Clothing', name: 'Puffer Gilet', quantity:1, price:'100.99', evaluate:'s3-5'},
    {id:14, img:[BestSelImg5], type:'Clothing', name: 'items Clothing Clothing', quantity:1, price:'150.00', evaluate:'s3'},
    {id:15, img:[BestSelImg6], type:'Clothing', name: 'items Clothing Clothing', quantity:1, price:'300.00', evaluate:'s4'},
    {id:16, img:[BestSelImg8_1, BestSelImg8_2, BestSelImg8_3], type:'blouse', name: 'items Clothing blouse', quantity:1, price:'300.00', evaluate:'s4-5'},
    {id:17, img:[BestSelImg9_1, BestSelImg9_2, BestSelImg9_3, BestSelImg9_4, BestSelImg9_5], type:'Dress', name: 'items Clothing Dress', quantity:1, price:'300.00', evaluate:'s5'},
    {id:18, img:[BestSelImg10_1, BestSelImg10_2, BestSelImg10_3, BestSelImg10_4, BestSelImg10_5], type:'Dress', name: 'items Clothing Dress', quantity:1, price:'300.00', evaluate:'s1'}
   ]


   const SectionShopData =
   [{id:101, img:[SShopImg1], type:'Product-1', name: 'items Product Product', quantity:1, price:'500.00'},
    {id:102, img:[SShopImg2], type:'T-Shir', name: 'items T-Shir T-Shir', quantity:1, price:'200.00'},
    {id:103, img:[SShopImg3], type:'Clothing', name: 'items Clothing Clothing', quantity:1, price:'100.50'},
    {id:104, img:[SShopImg4], type:'Shoes', name: 'items Shoes Shoes', quantity:1, price:'120.99'},
    {id:105, img:[BestSelImg7_1, BestSelImg7_2, BestSelImg7_3, BestSelImg7_4, BestSelImg7_5, BestSelImg7_6], type:'jeans', name: 'items Clothing jeans', quantity:1, price:'260.20', evaluate:'s4-5'},
    {id:106, img:[BestSelImg4], type:'Shoes', name: 'Shoes Shoes Shoes', quantity:1, price:'120.99', evaluate:'s2-5'},
   ]


   // items in shopping cart ----------------------------------------------------------------
   let [productItems, setProductItems] = useState([])
   let [totalItems, setTotalItems] = useState(0)
   let [totalPrice, setTotalPrice] = useState(0.00)

   // show/hide Empty shopping cart & clear buttopn  ----------------------------------------------------
   // let emptyState = ''
   // let clearButStatus = ''
   // if(productItems.length === 0){
   //    emptyState = 'd-flex flex-column align-items-center justify-content-center h-100 text-secondary'
   //    clearButStatus = 'disabled'
   // }else{
   //    emptyState = 'd-none'
   //    clearButStatus = ''
   // }
   // console.log(clearButStatus);
   // ---------------------------------------------------

   // const addToCart1 = (i) => {
   //    // clone
   //    let newBestSellingData = [...BestSellingData];
   //    let newProductItems = [...productItems]
   //    // edite
   //    if(newProductItems.length > 0 && newProductItems.includes(newProductItems[i])){
   //       newProductItems[i].count =newProductItems[i].count + 1
   //    }else{
   //       newProductItems.push(newBestSellingData[i])
   //    }
   //    // update state
   //    setProductItems(newProductItems)
   //    setTotalItems(totalItems + 1)
   //    // totalItemsFun()
   //    console.log(newProductItems);

   //    // update subtotal items & price
   //    let newtotalItems = 0
   //    let newttotalPrice = 0.00
   //    // update
   //       for(let i = 0; i < newProductItems.length; i++ ){
   //       newtotalItems = newtotalItems + newProductItems[i].count
   //       newttotalPrice +=  parseFloat((newProductItems[i].price * newProductItems[i].count).toFixed(2))
   //    }
   //    // update state
   //    setTotalItems(newtotalItems)
   //    setTotalPrice(newttotalPrice)
   // }

   // const addToCart2 = (i) => {
   //   // clone
   //   let newSectionShopData = [...SectionShopData];
   //   let newProductItems = [...productItems]
   //   // edite
   //   if(newProductItems.length > 0 && newProductItems.includes(newProductItems[i])){
   //    newProductItems[i].count =newProductItems[i].count + 1
   //   }else{
   //      newProductItems.push(newSectionShopData[i])
   //   }
   //   // update state
   //   setProductItems(newProductItems)
   //   setTotalItems(totalItems + 1)
   //   // totalItemsFun()
   //   console.log(newProductItems);

   //   // update subtotal items & price
   //   let newtotalItems = 0
   //   let newttotalPrice = 0.00
   //   // edite
   //    for(let i = 0; i < newProductItems.length; i++ ){
   //      newtotalItems = newtotalItems + newProductItems[i].count
   //      newttotalPrice +=  parseFloat((newProductItems[i].price * newProductItems[i].count).toFixed(2))
   //   }
   //   // update state
   //   setTotalItems(newtotalItems)
   //   setTotalPrice(newttotalPrice)
   // }

   const clearCart = () =>{
      // clone
      let newProductItems = [...productItems]
      // edite
      if(newProductItems.length > 0){
         newProductItems.splice(0, newProductItems.length)
      }else{
         // navigate('/BasketShopping/EmptyCart')
      };
      // update state
      setProductItems(newProductItems)

      // update subtotal items & price  ------------------------------
      let newtotalItems = 0
      let newttotalPrice = 0.00
      // edite
       for(let i = 0; i < newProductItems.length; i++ ){
         newtotalItems = newtotalItems + newProductItems[i].count
         newttotalPrice +=  parseFloat((newProductItems[i].price * newProductItems[i].count).toFixed(2))
      }
      // update state
      setTotalItems(newtotalItems)
      setTotalPrice(newttotalPrice)
   }



   const increment=(i)=>{
      // clone
      let newProductItems = [...productItems]
      // edite
      newProductItems[i].count = newProductItems[i].count +1
      setTotalItems(totalItems + 1)
      // update state
      setProductItems(newProductItems)
      totalItemsFun()

      newProductItems.filter(e => e.id === newProductItems.id)
   }

   const decrement=(i)=>{
      // clone
      let newProductItems = [...productItems]
      // edite
      newProductItems[i].count = newProductItems[i].count > 1 ? newProductItems[i].count -1 : 1
      // update state
      setProductItems(newProductItems)
      totalItemsFun()
   }



   const totalItemsFun = () =>{
      // clone
      let newProductItems = [...productItems]
      let newtotalItems = 0
      let newttotalPrice = 0.00
      // edite
       for(let i = 0; i < newProductItems.length; i++ ){
         newtotalItems = newtotalItems + newProductItems[i].count
         newttotalPrice +=  parseFloat((newProductItems[i].price * newProductItems[i].count).toFixed(2))
      }
      // update state
      setTotalItems(newtotalItems)
      setTotalPrice(newttotalPrice)

   }



   const deleteItem=(i)=>{
      // clone
      let newProductItems = [...productItems]
      // edite
      if(newProductItems.length > 0){
         newProductItems.splice(i, 1)
      };
      // update state
      setProductItems(newProductItems)

      // update subtotal items & price
      let newtotalItems = 0
      let newttotalPrice = 0.00
      // edite
       for(let i = 0; i < newProductItems.length; i++ ){
         newtotalItems = newtotalItems + newProductItems[i].count
         newttotalPrice +=  parseFloat((newProductItems[i].price * newProductItems[i].count).toFixed(2))
      }
      // update state
      setTotalItems(newtotalItems)
      setTotalPrice(newttotalPrice)
   }





   return (
      <NameContext.Provider value={{BestSellingData: BestSellingData, SectionShopData: SectionShopData}}>
         <MainNavbar toggleShow={toggleShow} totalItems={totalItems}/>
         <BasketShopping  show={show} toggleShow={toggleShow} handleClose={handleClose} setShow={setShow}
            productItems={productItems} setProductItems={setProductItems} clearCart={clearCart}
            increment={increment} decrement={decrement} deleteItem={deleteItem}
            totalItems={totalItems} totalPrice={totalPrice}
            BestSellingData={BestSellingData} />

         <Routes>
            <Route path='/' element={<Home   BestSellingData={BestSellingData}  />} />
            <Route path='/Shop' element={<Shop SectionShopData={SectionShopData} />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/ProductDetails' element={<ProductDetails />} />
            <Route path='/Checkout' element={<Checkout />} />
         </Routes>

         <MainFooter/>
      </NameContext.Provider >

   );
}


