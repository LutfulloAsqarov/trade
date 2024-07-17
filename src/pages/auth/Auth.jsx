import React from "react";
import Admin from "../admin/Admin";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
    let isLogin = useSelector((state) => state.auth.token);
    return isLogin ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default Auth;
