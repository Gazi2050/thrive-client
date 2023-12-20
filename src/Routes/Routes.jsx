import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Components/Home";
import Root from "../Components/Root";
import ErrorElement from "../Components/ErrorElement";
import Gallery from "../Components/Gallery";
import Trainer from "../Components/Trainer";
import Classes from "../Components/Classes";
import Dashboard from "../Components/Dashboard";
import Forums from "../Components/Forums";
import SignUp from "../Components/SignUp";
import LogIn from "../Components/LogIn";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Components/Profile";
import AddClass from "../Components/AddClass";
import CheckOut from "../Components/CheckOut";
import Users from "../Components/Users";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorElement></ErrorElement>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/trainer',
                element: <PrivateRoute><Trainer></Trainer></PrivateRoute>
            },
            {
                path: '/classes', //#
                element: <PrivateRoute><Classes></Classes></PrivateRoute>,
                loader: () => fetch('https://fit-zone-server.vercel.app/classes')
            },
            {
                path: '/checkOut/:id', //#
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fit-zone-server.vercel.app/classes/${params.id}`)
            },
            {
                path: '/addClass',  //#
                element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
            },
            {
                path: '/dashboard', //#
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/forums',
                element: <Forums></Forums>
            },
            {
                path: '/singUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            //Admin routes
            {
                path: '/allUsers', //#
                element: <PrivateRoute><Users></Users></PrivateRoute>
            },
        ]
    },
]);
