import { Outlet } from "react-router-dom";
import Profile  from "./Profile";

const About = () =>{
    return ( 
        <>
        <div>
            <h1>This is About page </h1>
            <p> This page contains all the Restaruants in the Banagalore..........</p>
        </div>
        <Outlet/>
        </>
    )
};

export default About;