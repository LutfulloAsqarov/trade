import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInAdminMutation } from "../../context/api/userApi";
import { useDispatch } from "react-redux";
import { setToken } from "../../context/slices/authSlice";
import "./login.scss";

const Login = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("lutfullo02");
    const [password, setPassword] = useState("02lutfullo02");
    const [loading, setLoading] = useState(false);
    const [signIn, { data, isError, isSuccess }] = useSignInAdminMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccess) {
            dispatch(setToken(data?.innerData?.token));
            navigate("/admin/customers");
        }
        if (isError) {
            // toast.error("Xato kiritingiz");
        }
    }, [isSuccess, isError]);

    const handelSubmit = (e) => {
        e.preventDefault();
        signIn({
            username: username,
            password: password,
        });
    };
    return (
        <div className="login">
            <form className="login__form" onSubmit={handelSubmit} action="">
                <h2 className="login__title">Login to Account</h2>
                <p>Please enter your username and password to continue</p>
                <div className="login__input">
                    <label htmlFor="username">Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        name=""
                        id="username"
                    />
                </div>
                <div className="login__input">
                    <label htmlFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name=""
                        id="password"
                    />
                </div>
                <button disabled={loading}>
                    {loading ? "Loading..." : "Sign in"}
                </button>
            </form>
        </div>
    );
};

export default Login;
