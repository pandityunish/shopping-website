import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import DetailsScreen from "../components/DetailsScreen";
import Login from "../layout/Login";
import Register from "../layout/Register";
import Profile from "../layout/Profile";
import BuyNow from "../layout/BuyNow";
import Favorites from "../layout/Favorites";
import CategoryProduct from "../layout/CategoryProduct";
import SearchPage from "../layout/SearchPage";
import Dashboard from "../layout/Dashboard";
import ProductEditPage from "../layout/dashboard/ProductEditPage";

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
        
    },
    {
        path:'/favorites',
        element:<Favorites/>
        
    },
    {
        path:'/category/:name',
        element:<CategoryProduct/>
        
    },
    {
        path:'/search/:name',
        element:<SearchPage/>
        
    },
    {
        path:'/dashboard',
        element:<Dashboard/>
        
    },
    {
        path:'/editproduct',
        element:<ProductEditPage/>
        
    },
])

