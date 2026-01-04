import { createBrowserRouter } from "react-router";
import MyPostedJobs from "../Components/MyPostedJobs";
import UpdateJob from "../Components/UpdateJob";
import MainLayout from "../Layouts/MainLayout";
import AddAJob from "../Pages/AddAJob";
import AllJobs from "../Pages/AllJobs";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyAcceptedTasks from "../Pages/MyAcceptedTasks";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";

import ViewDetails from "../Components/ViewDetails";
import AboutUs from './../Pages/AboutUs';
import Contact from './../Pages/Contact';
import JobsBlogsPage from './../Pages/Blogs';
import JobsServicesPage from './../Pages/Services';

import DashboardLayout from "../Layouts/DashboardLayout";
import UserProfile from "../Pages/dashboard/UserProfile ";
import AdminProfile from "../Pages/dashboard/AdminProfile";
import AdminRoute from "../Pages/dashboard/AdminRoute";
import Overview from "../Pages/dashboard/Overview";
// import Overview from "../Pages/dashboard/Overview";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <span>Loading....</span>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blogs",
        element: <JobsBlogsPage></JobsBlogsPage>,
      },
      {
        path: "/services",
        element: <JobsServicesPage></JobsServicesPage>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://freelance-market-server.vercel.app/allJobs/${params.id}`),
      },

      
    
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      // {
      //   path: "/myPostedJobs",
      //   element: (
      //     <PrivateRoutes>
      //       <MyPostedJobs></MyPostedJobs>
      //     </PrivateRoutes>
      //   ),
      // },
      {
        path: "/updateJob/:id",
        element: (
          <PrivateRoutes>
            <UpdateJob></UpdateJob>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://freelance-market-server.vercel.app/allJobs/${params.id}`),
      },

  {
  path:'dashboard',
  element:<PrivateRoutes><DashboardLayout></DashboardLayout>
          </PrivateRoutes>,
  children:[
      {path:"overview",element: <Overview></Overview>},
      {path:"myPostedJobs",element:<MyPostedJobs></MyPostedJobs>},
        {
        path: "myAcceptedTasks",
        element: (
          
            <MyAcceptedTasks></MyAcceptedTasks>
          
        ),
      },
      {
        path: "addAJob",
        element: (
        
            <AddAJob></AddAJob>
      
        ),
      },
      {path: "profile",element: <UserProfile />},
      {path: "admin/profile",
       element: (<AdminRoute><AdminProfile /></AdminRoute>)}
           ]
  },

  ],
  },
  {

  }
]);

export default Routes;
