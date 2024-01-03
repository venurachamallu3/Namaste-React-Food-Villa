import { useState } from "react";


const Profile = ()=>{

    const [count,setcount]= useState(0);


    return (
        <>
        <br></br><br></br><br></br><br></br><br></br>
        <button onClick={()=>setcount(2)}>Count is : </button> {count}
        <h1>I'm in the Profile </h1>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </>
    )
}

export default Profile;