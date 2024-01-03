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









const AppLayout = ()=>{

    const [user,setuser] = useState({
        name:"VENU",
        email:"venu@gmail.com"
    });

    return (
        <React.Fragment>
            <UserContext.Provider 
            value={{user:user,setuser:setuser}}>
            <HeaderComponenet/>
            <Outlet/>
            <FooterComponenet/>
            </UserContext.Provider>
        </React.Fragment>

    )
};


const appRouter = createBrowserRouter ([
    {path:'/',
     element:<AppLayout/> , 
     errorElement:<Error/> ,
     children:[
        {path:'/about', element:<About/> , children:[{path:'profile', element:<Profile/>}]},
        {path:'/contact',element:<Contact/>},
        {path:'/restaurant/:id',element:<RestaurantDetails/>},
        {path:'/',element:<BodyComponenet/>},
         

     ]
}
    
])






const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);




