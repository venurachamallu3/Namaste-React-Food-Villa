import { useDispatch } from "react-redux";
import { addItem } from "../utili/CartSlice";
import { UserContext } from "../utili/Context";
import { useContext } from "react";

const RestaurantMenu = (props)=>{

    
    const {user,Ruppes}=useContext(UserContext);
    const dispatch = useDispatch()



    


    const handleAddItem = (fooditem,price)=>{
        // alert(fooditem+ "added")
        {Ruppes.push(price/100)}
        dispatch(addItem(fooditem))
    }


    return (

        <>
        {/* <p>{props?.info?.name} </p>
        <p>{props?.info?.category}</p> */}
        {/* <table>
            <tr><td>{props?.info?.name}</td></tr>
            <br></br>
            <tr><td>{props?.info?.category}</td></tr>
        </table> */}
        <div>
        <p> {props?.info?.name} - {props?.info?.category} - { + props?.info?.price > 0 ? "Rs "+(props?.info?.price) / 100 : "Rs " + (85)  +"/-"} &nbsp;&nbsp;&nbsp;<button onClick={() => handleAddItem(props?.info?.name,props?.info?.price)} >
          &nbsp;&nbsp;&nbsp;{"       "}
          Add&nbsp;&nbsp;&nbsp;{" "}
        </button>
       
        
        
        </p>
        {/* <h3 >{props?.info?.category}</h3>
        <h4 >{ + props?.info?.price > 0 ? "Rs "+(props?.info?.price) / 100 : "Rs " + (85)  +"/-"}</h4> */}
      </div>
      <div className="relative">
        {/* <img className="w-28 rounded-md" src={CLOUDINARY_CDN_LINK + props?.info?.imageId} alt={props?.info?.name} /> */}
        
        
      </div>
        </>
    )
}

export default RestaurantMenu;