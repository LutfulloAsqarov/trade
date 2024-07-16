import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { IoCube } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { FaTicket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import "./sidebar.scss";

const Sidebar = () => {
    let navigate = useNavigate();
    const handleLogout = () => {
        if (confirm("Aru you sure?")) {
            localStorage.clear();
            navigate("/");
        }
    };

    return (
        <div className="sidebar">
            <div className="sidebar__title">
                <IoCube className="sidebar__title__icon" />
                <h2>Dashboard</h2>
            </div>
            <ul className="sidebar__collection">
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"customers"}>
                        <span>
                            <FaChartPie />
                            Customers
                        </span>
                    </NavLink>
                </li>
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"seller"}>
                        <span>
                            <FaTicket />
                            Seller
                        </span>
                    </NavLink>
                </li>
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"shop"}>
                        <span>
                            <FaLightbulb />
                            Shop
                        </span>
                    </NavLink>
                </li>
                <li className="sidebar__item">
                    <NavLink className={"sidebar__link"} to={"createCustomer"}>
                        <span>
                            <FaLightbulb />
                            Create
                        </span>
                    </NavLink>
                </li>
            </ul>
            <button className="sidebar__btn" onClick={handleLogout}>
                <RxExit />
                Log out
            </button>
        </div>
    );
};

export default Sidebar;
