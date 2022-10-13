import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "react-use-cart";
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
      <CartProvider>
         <ScrollToTop />
         <App />
      </CartProvider>
   </BrowserRouter>
);


