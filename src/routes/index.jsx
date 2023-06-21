import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import DetailsScreen from "../components/DetailsScreen";
import Login from "../layout/Login";
import Register from "../layout/Register";
import Profile from "../layout/Profile";
import BuyNow from "../layout/BuyNow";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>

    },
    {
        path:'/details/:name',
        element:<DetailsScreen/>
        
    },
    {
        path:'/login',
        element:<Login/>
        
    },
    {
        path:'/register',
        element:<Register/>
        
    },
    {
        path:'/profile',
        element:<Profile/>
        
    },
    {
        path:'/buynow',
        element:<BuyNow/>
        
    }
])

