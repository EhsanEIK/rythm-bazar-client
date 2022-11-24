import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import Main from "../../layouts/Main";
import Admin from "../../Pages/Admin/Admin/Admin";
import AllBuyers from "../../Pages/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Admin/AllSellers/AllSellers";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/Products/AddProduct/AddProduct";
import Products from "../../Pages/Products/Products/Products";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
        ]
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: '/admin',
                element: <Admin></Admin>
            },
            {
                path: '/admin/allSellers',
                element: <AllSellers></AllSellers>,
            },
            {
                path: '/admin/allBuyers',
                element: <AllBuyers></AllBuyers>,
            },
        ]
    }
])

export default router;