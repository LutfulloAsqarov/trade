import React from "react";
import "./model.scss";

const Model = ({ children, close, width }) => {
    return (
        <>
            <div className="overlay" onClick={() => close(false)}></div>
            <div className="model">{children}</div>
        </>
    );
};

export default Model;
