import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {fetchAllPersonalProfile} from "../../services/personalProfileService";

const PersonalProfile = ({setEditProfile, edit}) => {
    let userId = localStorage.getItem("userId");
    const userToken = localStorage.getItem("token");
    const dispatch = useDispatch();
    const selectUserProfile = (state) => state.personalProfile;
    const profileData = useSelector(selectUserProfile);

    useEffect(()=>{fetchAllPersonalProfile(dispatch, userId, userToken)},[dispatch])

    return(
        <div>
            {
                profileData&&profileData.data&&
                <ProfileItem edit={edit} setEditProfile={setEditProfile} profile={profileData.data}/>
            }
        </div>

    );
}

export default PersonalProfile;