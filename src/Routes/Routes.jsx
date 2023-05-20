import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/CheackOut/Checkout";
import BookService from "../Pages/BookService/BookService";
import Booking from "../Pages/Booking/Booking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path: '/',
           element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path:'/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/book/:id',
          element: <BookService></BookService>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path: '/bookings',
          element: <Booking></Booking>
        },
        {
          path:'checkout/:id',
          element: <Checkout></Checkout>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        }

      ]
    },
  ]);

  export default router;