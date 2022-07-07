import React, {useState} from "react";

import EditPersonalUserProfile from "../EditPersonalUserProfilePage";
import PersonalProfile from "../PersonalProfile";
import TopBar from "../topBar";

const PersonalProfileScreen = () => {
    const [edit, setEditProfile]=useState(false);

    return(
        <>
            <TopBar/>
            <div className="profile-layout">
                <div className="row mt-2">
                    <div className="col-11 col-lg-10 col-md-10 col-sm-10 col-xxl-10 col-xl-10 col-xs-11"
                         style={{"position": "relative"}}>
                        {!edit ? <PersonalProfile edit={edit} setEditProfile={setEditProfile}/> : <EditPersonalUserProfile edit={edit} setEditProfile={setEditProfile}/>}
                    </div>

                </div>
            </div>
        </>
    );
};

export default PersonalProfileScreen;