import { useContext } from "react";
import  {UserContext} from "../utili/Context";


export const FooterComponenet = ()=>{

    const {user} = useContext(UserContext);

    return (
        // <h1>Footer</h1>
        <h1>this app is developed by the {user?.name} and email is {user?.email}</h1>
    )
};