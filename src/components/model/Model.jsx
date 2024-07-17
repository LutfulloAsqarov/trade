import React from "react";
import "./model.scss";
import { IoClose } from "react-icons/io5";

const Model = ({ children, close, width }) => {
    return (
        <>
            <div className="overlay" onClick={() => close(false)}></div>
            <div style={{ width }} className="model">
                <span className="model__close" onClick={() => close(false)}>
                    <IoClose />
                </span>
                <div className="model__wrapper">{children}</div>
            </div>
        </>
    );
};

export default Model;
