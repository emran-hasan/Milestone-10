import {Navigate, createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Terms from "../pages/Shared/Terms/Terms";


const router =createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register> 
            },
            {
                path:'/terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path:'category',
        element:<Main></Main>,
        children:[
            
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`https://the-news-dragon-server-emran-hasan.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element: <PrivetRoute><News></News></PrivetRoute>,
                loader: ({params}) => fetch(`https://the-news-dragon-server-emran-hasan.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;