import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// ProtectedRoute bileşenini import edin
// import { ProtectedRoute } from "./ProtectedRoute";

// Layoutları import edin
//layouts
import AppLayout from "../components/layout/AppLayout";
import AuthLayout from "../components/layout/AuthLayout";

// Sayfaları import edin
//pages
import Login from "../pages/Auth/Login";
import CheckBalance from './../pages/CheckBalance';
import DepositMoney from './../pages/DepositMoney';
import TransferMoney from './../pages/TransferMoney';
import WithdrawMoney from './../pages/WithdrawMoney';
import BankWise from './../pages/BankWise';
import NotFound from './../pages/NotFound';
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import ChangePassword from "../pages/Auth/ChangePassword";


//Routes Tanımlama

const SiteRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Navigate to="/main-page" /> },
        { path: "/login", element: <Login /> },
        { path: "/reset-password", element: <ResetPassword /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        { path: "/change-password", element: <ChangePassword /> },
        {
            path: "/",
            element: <AppLayout />,
            children: [
                { path: "check-balance", element: <CheckBalance /> },
                { path: "deposit-money", element: <DepositMoney /> },
                { path: "transfer-money", element: <TransferMoney /> },
                { path: "withdraw-money", element: <WithdrawMoney /> },
                { path: "profile", element: <Profile /> },
                { path: "main-page", element: <BankWise /> },
                { path: "*", element: <NotFound /> }
            ]
        },

    ]);
    return routes; // Bu, App.js'de kullanacağınız bileşen olacak
};

export default SiteRoutes;