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
import AddProduct from "../layout/dashboard/AddProduct";
import PopularProductEditPage from "../layout/dashboard/PopularProductEditPage";
import SliderEditPage from "../layout/dashboard/SliderEditPage";
import CategoryEditPage from "../layout/dashboard/EditCategory";
import AddPopularProduct from "../layout/dashboard/AddPopularProduct";
import AddCategory from "../layout/dashboard/AddCategory";
import OrderDetail from "../layout/dashboard/OrderDetail";
import MyOrderPage from "../components/Myorder";

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
    {
        path:'/addproduct',
        element:<AddProduct/>
        
    },
    {
        path:'/editpopularproduct',
        element:<PopularProductEditPage/>
        
    },
    {
        path:'/slidereditpage',
        element:<SliderEditPage/>
        
    },
    {
        path:'/categoryeditpage',
        element:<CategoryEditPage/>
        
    },
    {
        path:'/addpopularproduct',
        element:<AddPopularProduct/>
        
    },
    {
        path:'/addcategory',
        element:<AddCategory/>
        
    },
    {
        path:'/orderdetail',
        element:<OrderDetail/>
        
    },
    {
        path:'/myorder',
        element:<MyOrderPage/>
        
    },
])

