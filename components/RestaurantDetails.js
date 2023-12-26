import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { swiggy_rest_details_API } from "../config";
import Contact from "./Contact";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";

const RestaurantDetails = ()=>{

    const {id} = useParams();
    const [RestaurantDet , setRestaurantDet] = useState([])


    useEffect(()=>{
        getRestaurantFullDetails();
    },[])



    async function getRestaurantFullDetails(){
        const resta = await fetch(swiggy_rest_details_API+id);
        const resjson = await resta.json();
        // console.log(resjson?.data?.cards[0]?.card?.card?.info)
        const finaldata=resjson?.data?.cards[0]?.card?.card?.info;
        console.log("final data"+finaldata)
        setRestaurantDet(resjson)
    }




    return (RestaurantDet.length===0)? <Shimmer/>:(
       <div>
        <div>
           <h1> RESTAURANT ID :  {id}</h1>
           <h1> {RestaurantDet.data.cards[0].card.card.info.name}</h1>
           {console.log(RestaurantDet)}
           <h1>{RestaurantDet.data.cards[0].card.card.info.areaName}</h1>
           <img src={IMG_CDN_URL+RestaurantDet.data.cards[0].card.card.info.cloudinaryImageId}/> 
           <h1> Cost For TWO :{RestaurantDet.data.cards[0].card.card.info.costForTwo/100}</h1>
        </div>
        <div>
        <h1> {RestaurantDet.data.cards[0].card.card.info.menu}</h1>
        </div>
       </div>
    )
}

export default RestaurantDetails;