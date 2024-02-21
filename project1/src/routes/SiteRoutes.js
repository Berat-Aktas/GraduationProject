import React from "react";
import { Navigate, Route, useRoutes } from "react-router-dom";
// ProtectedRoute bileşenini import edin
//import { ProtectedRoute } from "./ProtectedRoute";
// Layoutları import edin
//layouts
import AppLayout from "../components/layout/AppLayout";
//import AuthLayout from "../components/layout/AuthLayout";
// Sayfaları import edin
//pages
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CheckBalance from './../pages/CheckBalance';
import DepositMoney from './../pages/DepositMoney';
import TransferMoney from './../pages/TransferMoney';
import WithdrawMoney from './../pages/WithdrawMoney';
import BankWise from './../pages/BankWise';
import NotFound from './../pages/NotFound';


//Routes Tanımlama

const SiteRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Navigate to="/main-page" /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
       // { path: "/main-page", element: <BankWise /> },
        { 
            path: "/", 
            element: <AppLayout />, 
            children: [
              { path: "/check-balance", element: <Route><CheckBalance /></Route> },
              { path: "/deposit-money", element: <Route><DepositMoney /></Route> },
              { path: "/transfer-money", element: <Route><TransferMoney /></Route> },
              { path: "/withdraw-money", element: <Route><WithdrawMoney /></Route> },
              { path: "/main-page", element: <BankWise /> },
              { path: "*", element: <NotFound /> }
            ]
        },

    ]);
    return routes; // Bu, App.js'de kullanacağınız bileşen olacak
};

export default SiteRoutes;