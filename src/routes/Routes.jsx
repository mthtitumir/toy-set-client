import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blogs from "../Pages/Blogs/Blogs";
import Register from "../Pages/LoginRegister/Register/Register";
import Login from "../Pages/LoginRegister/Login/Login";
import AddABlog from "../Pages/Blogs/AddABlog";
import AllToys from "../Pages/AllToys/AllToys";

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/add-a-blog',
                element: <AddABlog></AddABlog>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>,
                loader: async () => {
                    try {
                        const response = await fetch('http://localhost:5500/toys');
                        const data = await response.json();
                        return data; // Return the fetched data
                    } catch (error) {
                        console.log('Error fetching data:', error);
                        throw error; // Throw the error to be handled by the route or error boundary
                    }
                }
            }


        ]
    }
]);

export default router;