import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";

const selectPersonalProfile = (state) => state.personalProfile;
const TopBarComponent = () => {
    // const selectAllUserData = (state) => state.userInfo;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    var userName = "";
    const personalUserProfile = useSelector(selectPersonalProfile);
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    useEffect(()=>{fetchAllPersonalProfile(dispatch,userId,token)},[dispatch]);
    if (localStorage.getItem('userType') && personalUserProfile && personalUserProfile.data && personalUserProfile.data.username){
        userName = personalUserProfile.data.username;
    }

    function submit(e) {
        if (localStorage.getItem('userId')) {
            localStorage.clear();
        }
        navigate(`/login`)
    }
    function loginCondition() {
        if (localStorage.getItem('userId')){
            return  <div>LogOut</div>;
        }
        else return <div>Login</div>;
    }


    return (
        <>
            <div className={"f-topbar-occupy"}></div>
            <div className={"f-location-fix"}>
                <Link to={"/home"} className={"f-align-left f-logo"}>
                    Graph Encryption
                </Link>
                <div className="f-login-align-right">
                    <button onClick={submit} className={"navbar-login"}>{loginCondition()}</button>
                </div>
            </div>
        </>
    )
}

export default TopBarComponent;