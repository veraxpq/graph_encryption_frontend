import React from "react";
import LoginComponent from "./LoginComponent";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    if (localStorage.getItem("userId")) {
        navigate(-1)
    }

    return (
        <>
            <LoginComponent/>
        </>
    )
}

export default Login;