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
        path: "/addAJob",
        element: (
          <PrivateRoutes>
            <AddAJob></AddAJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myAcceptedTasks",
        element: (
          <PrivateRoutes>
            <MyAcceptedTasks></MyAcceptedTasks>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },
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

      {},
    ],
  },
]);

export default Routes;
