import { useDispatch, useSelector } from "react-redux";
import store from "../utili/store";
import { clearCart, removeItem } from "../utili/CartSlice";
import { useContext, useEffect } from "react";
import { UserContext } from "../utili/Context";


const Cart = ()=>{


    const {Ruppes}= useContext(UserContext);


    console.log("Rupees is "+Ruppes)

        const cartItems = useSelector(store=>store.cart.items);
    
    
    console.log(cartItems.length)
    const dispatch = useDispatch();  

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    const removeItemCart = (food)=>{
        const ind=cartItems.indexOf(food)
        if(ind!==-1){Ruppes.splice(ind,1)}
        dispatch(removeItem(food))
    }
    const placeOrder=()=>{

        alert("All "+ cartItems.length+" Items are placed..!");
    }

    const totalSum = Ruppes.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    
    

    return (
        <>
        {console.log("IN CART COME")}
        {/* <h1>CART ITEMS </h1>     */}
        <div>
        <li> {cartItems?.length>0 ? 
        
        (cartItems.map((ci,index)=> 
            <div><span>{ci}  -- Rs:{ " "+Ruppes[index+1]}</span> &nbsp;&nbsp;&nbsp;&nbsp; <button onClick={()=>removeItemCart(ci)}>Remove</button>
           
            </div>
        
        
        )  ) :
        
        (<h1>No CART ITEMS</h1>)} </li> 

        <h3>Total ITEMS : {cartItems.length} ---- Total Ruppes {totalSum-1}</h3>
        </div>

        <div style={{display:"flex"}}>
            <h1> <button type="button" onClick={handleClearCart}>CLEAR CART</button></h1>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <h1> <button type="button" onClick={placeOrder}>PLACE ORDER </button></h1>

        </div>


        
        </>
    )
}

export default Cart;