import { createBrowserRouter } from "react-router-dom";
import Register from "../Auth/Register";
import HomePage from "../Pages/HomePage";
import Layout from "../Static/Layout";
import SignIn from "../Auth/SignIn";


export const MainRoute = createBrowserRouter(
    [
        {
            path : "/sign-in",
            element : <SignIn/>
        },
        {
            path : "/",
            element : <Layout/>,
            children : [
                {
                    index : true,
                    element : <Register/>
                },
                {
                    path : "/home",
                    element : <HomePage/>
                },
            ]
        },
    ]
)