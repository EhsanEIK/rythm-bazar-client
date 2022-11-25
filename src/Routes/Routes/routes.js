import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Main from "../../layouts/Main";
import Admin from "../../Pages/Dashboard/Admin/Admin/Admin";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct/AddProduct";
import Products from "../../Pages/Products/Products/Products";
import Register from "../../Pages/Register/Register";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import Buyer from "../../Pages/Dashboard/Buyer/Buyer/Buyer";
import MyOrders from "../../Pages/Dashboard/Buyer/MyOrders/MyOrders";
import BuyerRoute from "../BuyerRoute/BuyerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/products/categories/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
        ]
    },
    {
        path: '/register',
        element: <Register></Register>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/admin',
                element: <AdminRoute><Admin></Admin></AdminRoute>
            },
            {
                path: '/dashboard/admin/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/admin/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/seller/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/buyer/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
        ]
    }
])

export default router;