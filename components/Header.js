import { useState , useContext} from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../utili/Context.js";
import { useSelector } from "react-redux";
import { FoodVillaLogoURL } from "../config.js";


export const Logo = ()=>{

  const {user} = useContext(UserContext);
  
  

    return (

      <>
      {/* <h2>{user?.name}</h2> */}
        <Link to ="/"><img  className="logo" alt ="LOGO" src={FoodVillaLogoURL}></img>
       </Link>
       </>
       
    )
}





export const HeaderComponenet = ()=>{

    const [isLoggedIn , setisLoggedIn] = useState(true)
    const cartItems= useSelector(store=>store.cart.items)

    return (
        <div className="header"> 
            <Logo/>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to ='/about'>ABOUT</Link></li>
                    <li>
                        <Link to= "/contact">CONTACT </Link></li>
                    <li>GALLERY</li>


                    <Link to='/cartitems'>
                    <li>CART {cartItems.length} - ITEMS </li>
                    </Link>
                    <li> {cartItems?.length>0 ? (cartItems.map(ci=> <p>{ci}</p>) ) : (<h1></h1>)} </li>
                    
                    <li>
                    {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setisLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setisLoggedIn(true)}>
                Login
              </button>
            )}
                        {/* {isLoggedIn? (<button onClick={setisLoggedIn(false)}>Logout</button>): (<button onClick={setisLoggedIn(true)}>Login</button>) }; */}
                    </li>
                </ul>
            </div>
        </div>
    );
};