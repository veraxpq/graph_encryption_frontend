import EditPersonalUserProfileComponent from "./EditPersonalUserProfileComponent";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const EditPersonalUserProfile = ({setEditProfile}) => {
    const profileData = useSelector(state => state.personalProfile);
    return (
        <>
            {
                profileData&&profileData.data&&
                <EditPersonalUserProfileComponent setEditProfile={setEditProfile} profile={profileData.data}/>
            }
        </>
    )
}

export default EditPersonalUserProfile;