import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/LoginRegister/Register/Register";
import Login from "../Pages/LoginRegister/Login/Login";

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
                path: '/add-a-toy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            
        ]
    }
]);

export default router;