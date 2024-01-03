import { IMG_CDN_URL } from "../config";
import { useContext } from "react";

import { UserContext } from "../utili/Context";

export const RestarunatCard = ({
    name,cloudinaryImageId,areaName,avgRating
})=>{

    const {user} = useContext(UserContext);

    return (
        <div className="card">
        <img src={
            IMG_CDN_URL+cloudinaryImageId}/>
            
        <h3> {name} </h3>
        <h3>Location : {areaName}</h3>
        <h3>Rating: {avgRating}</h3>
        <h3>{user?.name}</h3>
    </div>
    );
};


export const PlayerCard = ({
    name,image,age,country
}) => {
   return  (
        <div className="card">
            <img src={image}></img>
            <h3>{name}</h3>
            <h3>{country}</h3>
            <h3>{age}</h3>

        </div>
    );
};