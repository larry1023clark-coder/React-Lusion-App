import React,{Fragment} from "react";
import '../Styles/Home.css'

import CarouselHome from './Carousel'
import SectionsH from './SectionsH'
import BestSelling from './BestSelling'
import MerryChri from './MerryChri'
import VintageS from "./VintageS";




export default function Home (props){

   return(
      <Fragment>

         <CarouselHome />
         <SectionsH />
         <BestSelling BestSellingData={props.BestSellingData}  addToCart1={props.addToCart1}  addItem={props.addItem}/>
         <MerryChri />
         <VintageS />
      </Fragment>
   )
}