import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import Html from "./Pages/html/Html.jsx";
import Css from "./Pages/Css/Css.jsx";
import JavaScript from "./Pages/JavaScript/JavaScript.jsx";

const router=createBrowserRouter([
  {
path:'/',
element:<Home/>,
errorElement:<h1>Sorry ...................</h1>
  },
  {
path:'/html',
element:<Html/>,
  },
  {
path:'/css',
element:<Css/>,
  },
  {
path:'/javascript',
element:<JavaScript/>,
  },
])




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);
