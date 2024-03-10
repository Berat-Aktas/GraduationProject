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
import TransferMoney from "../pages/Bank Transactions/TransferMoney";
import WithdrawMoney from './../pages/Bank Transactions/WithdrawMoney';
import CheckBalance from "../pages/Bank Transactions/CheckBalance";
import DepositMoney from "../pages/Bank Transactions/DepositMoney";

import BankWise from './../pages/BankWise';
import NotFound from '../pages/Helpers Pages/NotFound';

import Login from "../pages/Auth/Login";
import Profile from "../pages/Auth/Profile";
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