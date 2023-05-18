import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AddAToy from "../Pages/AddAToy/AddAToy";

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
            }
        ]
    }
]);

export default router;