import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { swiggy_rest_details_API } from "../config";
import Contact from "./Contact";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utili/CartSlice";

import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = ()=>{

    const {id} = useParams();
    const [RestaurantDet , setRestaurantDet] = useState([])
    const [menu,setmenu]=useState([])


    useEffect(()=>{
        getRestaurantFullDetails();
    },[])

    const dispatch = useDispatch()

    const handleAddItem = ()=>{
        console.log("ADD item method called......")
        dispatch(addItem("Apples"))
    }

    async function getRestaurantFullDetails(){
        const resta = await fetch(swiggy_rest_details_API+id);
        const resjson = await resta.json();
        // console.log(resjson?.data?.cards[0]?.card?.card?.info)
        const finaldata=resjson?.data?.cards[0]?.card?.card?.info;
        console.log("final data"+finaldata)
        setRestaurantDet(resjson)

        // const meeenu = resjson.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards.card;
        // console.log("meenu is "+meeenu)
        const meeenu = resjson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(e => {
            if (e?.card?.card?.title) {
              return true
            }
          })
          console.log("meeenu is "+meeenu)

        setmenu(meeenu)
    }




    return (RestaurantDet.length===0)? <Shimmer/>:(
       <div>
        <div>


           <h2 style={{color:"red", textAlign:"right"}}> RESTAURANT ID :  {id}</h2>
           <h1> {RestaurantDet.data.cards[0].card.card.info.name}</h1>
           {console.log(RestaurantDet)}
           
           <h1>{RestaurantDet.data.cards[0].card.card.info.areaName}</h1>
           <h1>{RestaurantDet.data.cards[0].card.card.info.city}</h1>
           <img src={IMG_CDN_URL+RestaurantDet.data.cards[0].card.card.info.cloudinaryImageId}/>

           <button onClick={()=>handleAddItem()}>ADD TO CART </button> 
           <h1> Cost For TWO :{RestaurantDet.data.cards[0].card.card.info.costForTwo/100}</h1>
        </div>
        <div>
        {/* <h1> {RestaurantDet.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards}</h1> */}
        
            {/* { menu.length > 0 ? ( menu.map((me)=>{
                return ( <h3>{ me?.card?.card?.itemCards?.card?.info?.name}</h3>)
            })): <h1></h1>} */}

        {menu?.map(e => {
          // console.log(e?.card?.card?.title)
          return e?.card?.card?.itemCards?.map(ele => {
            // console.log(ele?.card?.info?.name)
            return <RestaurantMenu info={ele?.card?.info} key={ele?.card?.info?.id} />
          })
        })}
            {/* <RestaurantMenu /> */}

            
        
        </div>
       </div>
    )
}

export default RestaurantDetails;