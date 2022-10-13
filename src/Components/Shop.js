import React,{Fragment} from "react";
import '../Styles/Shop.css'

import LandingShop from './LandingShop'
import SectionShop from './SectionShop'


export default function Shop (props){
   return(
      <Fragment>
         <LandingShop />
         <SectionShop SectionShopData={props.SectionShopData} addToCart2={props.addToCart2} />

      </Fragment>
   )
}