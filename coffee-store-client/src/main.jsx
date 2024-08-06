import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./Components/Pages/addCoffee.jsx";
import UpdateCoffee from "./Components/Pages/updateCoffee.jsx";
import SignUp from "./Components/SignUp.jsx";
import LogIn from "./Components/LogIn.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/coffee"), //Step 13: Load the data
  },
  {
    path: "add-coffee",
    element: <AddCoffee />,
  },
  {
    path: "update-coffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`), //Step 18
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Auth-Step 103: */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
