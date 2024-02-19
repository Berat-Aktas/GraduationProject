import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
// ProtectedRoute bileşenini import edin
import { ProtectedRoute } from "./ProtectedRoute";
// Layoutları import edin
//layouts
import AppLayout from "../components/layout/AppLayout";
import AuthLayout from "../components/layout/AuthLayout";
// Sayfaları import edin
//pages
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CheckBalance from './pages/CheckBalance';
import DepositMoney from './pages/DepositMoney';
import TransferMoney from './pages/TransferMoney';
import WithdrawMoney from './pages/WithdrawMoney';
import BankWise from './pages/BankWise';
import NotFound from './pages/NotFound';


//Routes Tanımlama

const SiteRotes = () => {
    let routes = useRoutes([
        { path: "/", element: <Navigate to="/main-page" /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { 
            path: "/", 
            element: <AppLayout />, 
            children: [
              { path: "/check-balance", element: <ProtectedRoute><CheckBalance /></ProtectedRoute> },
              { path: "/deposit-money", element: <ProtectedRoute><DepositMoney /></ProtectedRoute> },
              { path: "/transfer-money", element: <ProtectedRoute><TransferMoney /></ProtectedRoute> },
              { path: "/withdraw-money", element: <ProtectedRoute><WithdrawMoney /></ProtectedRoute> },
              { path: "/main-page", element: <BankWise /> },
              { path: "*", element: <NotFound /> }
            ]
        },
        // Gerektiği kadar daha fazla rota ekleyin
    ]);
    return routes; // Bu, App.js'de kullanacağınız bileşen olacak
};

export default SiteRotes;