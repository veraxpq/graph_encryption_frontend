import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
const LOGIN_API = "http://localhost:18081/en-graph/login";

const selectUsers = (state) => state.userInfo;
const LoginComponent = () => {
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const loggedInUser = useSelector(selectUsers);

    const loginClickHandler = async (e:SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch(`${LOGIN_API}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        })
            .then(response => response.json());
        const user = await response;
        if (user.status === 0) {
            alert("Incorrect email and password combination");
        } else {
            localStorage.setItem('userId',user.data.id);
            localStorage.setItem('token',user.data.token);
            navigate(`/profile`);
        }
    }

    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                <div className={"col-sm-1 col-lg-3"}></div>
                <div className={"col-sm-10 col-lg-6 "}>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend className={"f-login-form"}>Login</legend>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"
                                       onChange={(e) => setEmail( e.target.value)}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"
                                       onChange={(e) => setPassword( e.target.value)}/>
                            </div>
                            <div className={""}>
                                <div className={"f-float-left"}><Link to={"/register"}>Create personal account</Link></div>
                            </div>

                            <button onClick={loginClickHandler} type="submit" className="btn btn-primary f-register-submit mt-2 mb-5">Submit</button>

                        </fieldset>
                    </form>
                </div>
                <div className={"col-sm-1 col-lg-3"}></div>
            </div>
        </div>
    )
}

export default LoginComponent;