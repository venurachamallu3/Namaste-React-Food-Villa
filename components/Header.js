import { useState } from "react";
import { Link } from "react-router-dom";

export const Logo = ()=>{
    return (

        <Link to ="/"><img  className="logo" alt ="LOGO" src="data:image/png;base64,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"></img>
       </Link>
       
    )
}




export const HeaderComponenet = ()=>{

    const [isLoggedIn , setisLoggedIn] = useState(true)

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
                    <li>CART</li>
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