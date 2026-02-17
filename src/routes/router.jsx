import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../Error";
import AllCategoryNews from "../components/AllCategoryNews";
import About from "../pages/About";
import Career from "../pages/Career";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../AuthComponents/Login";
import Register from "../AuthComponents/Register";

const router = createBrowserRouter([
    {
        path: "*",
        element: <Error></Error>
    },
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <AllCategoryNews></AllCategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/about",
        element:<About></About>
    },
    {
        path: "/career",
        element: <Career></Career>
    },
    {
        path: "/auth",
        element:<AuthLayout></AuthLayout>,
        children:[
          {
            path: "/auth/login",
            element: <Login></Login>
          },
          {
            path: "/auth/register",
            element: <Register></Register>
          }
        ]
    }
])
export default router;