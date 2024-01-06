import React, { useContext, useState , useEffect } from "react";
import ReactDOM from  "react-dom/client";
import { HeaderComponenet } from "./components/Header";
import { swiggy_url , restaurantList ,players} from "./config";
import { FooterComponenet } from "./components/Footer";
import { BodyComponenet } from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";

import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {UserContext} from "./utili/Context";
import { Provider } from "react-redux";
import store from "./utili/store";
import Cart from "./components/Cart";









const AppLayout = ()=>{

    const [Ruppes,setRupes]=useState([1])

    const [user,setuser] = useState({
        name:"VENU",
        email:"venu@gmail.com"
    });

    return (
        <React.Fragment>
            <Provider store={store}>
            <UserContext.Provider 
            value={{user:user,setuser:setuser,Ruppes:Ruppes,setRupes:setRupes}}>
            <HeaderComponenet/>
            <Outlet/>
            <FooterComponenet/>
            </UserContext.Provider>
            </Provider>
        </React.Fragment>

    )
};


const appRouter = createBrowserRouter ([
    {path:'/',
     element:<AppLayout/> , 
     errorElement:<Error/> ,
     children:[
        {path:'/',element:<BodyComponenet/>},
        {path:'/about', element:<About/> , children:[{path:'profile', element:<Profile/>}]},
        {path:'/contact',element:<Contact/>},
        {path:'/restaurant/:id',element:<RestaurantDetails/>},
        {path:'/cartitems',element:<Cart/>}
         

     ]
}
    
])






const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);




