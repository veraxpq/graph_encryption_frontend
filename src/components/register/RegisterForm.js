import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

const URL = "http://localhost:18081/en-graph/user";
const RegisterForm = () => {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [returnValue, setReturnValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function register(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Please input the same passwords in the form.")
            return;
        }
        const user = {
            email,
            phone,
            password,
        }
        let resStatus = 0;
        fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                resStatus = res.status
                return res.json()
            })
            .then(res => {
                switch (resStatus) {
                    case 200 || 201:
                        alert('success!')
                        dispatch({
                            type: 'create-user',
                            user
                        })
                        navigate(`/login`)
                        break
                    case 400:
                        alert("Unable to create account! Email is already registered.")
                        break
                    default:
                        alert('server error, please try again.')
                        break
                }
            })
    }


    return (
        <div className={"container"}>
            <div className={"row f-register-form-container"}>
                <div className={"col-sm-1 col-lg-3"}>

                </div>
                <div className={"col-sm-10 col-lg-8 "}>
                    <form className={"f-register-form-border"}>
                        <fieldset>
                            <legend className={"f-login-form"}>Sign up</legend>
                            <div className="form-group">
                                <label htmlFor="staticEmail" className="form-label mt-4">Email</label>
                                <input type="text" className="form-control f-form-border" id="staticEmail"
                                       value={email} onChange={e => setEmail(e.target.value)}/>
                                <label htmlFor="phone" className="col-form-label">Phone</label>
                                <input type="text" readOnly="" className="form-control f-form-border" id="phone"
                                       value={phone} onChange={e => setPhone(e.target.value)}/>
                                <label htmlFor="password" className="col-form-label">Password</label>
                                <input type="password" readOnly="" className="form-control f-form-border" id="password"
                                       value={password} onChange={e => setPassword(e.target.value)}/>
                                <label htmlFor="confirmPassword" className="col-form-label">Confirm Password</label>
                                <input type="password" readOnly="" className="form-control f-form-border"
                                       id="confirmPassword"
                                       value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                            </div>
                            <div className={"mt-5"}>Already have an account? <Link to={"/login"}>Login</Link></div>
                            <Link to={"/login"} type="submit" className="btn btn-primary f-register-submit mt-2"
                                  onClick={register}>Submit</Link>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
}
export default RegisterForm;