import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import OrderFood from "../pages/OrderFood/OrderFood";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../Layout/Dashbord";
import Cart from "../pages/Dashbord/Cart/Cart";
import Users from "../pages/Dashbord/users/Users";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"/menu",
                element: <Menu></Menu>
            },
            {
                path:"/order/:category",
                element: <OrderFood></OrderFood>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/signup",
                element: <Signup></Signup>
            }
        ]
    },
    {
        path:'/dashbord',
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
        children:[
            {
                path:'cart',
                element: <Cart></Cart>
            },
            {
                path:'users',
                element: <Users></Users>
            }
        ]
    }
])