import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
// import headerImg from "../../assets/images/header.png";
import "./header.scss";
// import Sidebar from "../sidebar/Sidebar";
import headerIcon from "../../assets/headerIcon.svg";

const Header = ({ title }) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };
    return (
        <header id="header">
            <div className="header">
                <div className="header__left">
                    <RxHamburgerMenu />
                    <form action="">
                        <input type="text" placeholder="search..." />
                    </form>
                </div>
                <div className="header__right">
                    <img src={headerIcon} alt="" />
                    <select name="" id="">
                        <option value="en">English</option>
                        <option value="ru">Russia</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
