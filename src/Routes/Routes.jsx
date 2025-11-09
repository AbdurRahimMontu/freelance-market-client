import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import AllJobs from '../Pages/AllJobs';
import AddAJob from '../Pages/AddAJob';
import MyAcceptedTasks from '../Pages/MyAcceptedTasks';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/allJobs",
            element:<AllJobs></AllJobs>
        },
        {
            path:"/addAJob",
            element:<AddAJob></AddAJob>
        },
        {
            path:"/myAcceptedTasks",
            element:<MyAcceptedTasks></MyAcceptedTasks>
        },
        {
            path:"login",
            element:<Login></Login>
        },
        {
            path:"register",
            element:<Register></Register>
        }
    ]
  },
]);

export default Routes;