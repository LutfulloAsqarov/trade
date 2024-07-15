import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./admin.scss";
import Header from "../../components/header/Header";
// import Header from "../../components/header/Header";

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <div>
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
