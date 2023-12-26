import React, { useState } from "react";
import ReactDOM from  "react-dom/client";
import { HeaderComponenet } from "./components/Header";
import { swiggy_url , restaurantList ,players} from "./config";
import { FooterComponenet } from "./components/Footer";
import { BodyComponenet } from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";

import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";







const AppLayout = ()=>{
    return (
        <React.Fragment>
            <HeaderComponenet/>
            <Outlet/>
            <FooterComponenet/>
        </React.Fragment>

    )
};


const appRouter = createBrowserRouter ([
    {path:'/',
     element:<AppLayout/> , 
     errorElement:<Error/> ,
     children:[
        {path:'/about', element:<About/>},
        {path:'/contact',element:<Contact/>},
        {path:'/restaurant/:id',element:<RestaurantDetails/>},
        {path:'/',element:<BodyComponenet/>},
         

     ]
}
    
])






const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);




