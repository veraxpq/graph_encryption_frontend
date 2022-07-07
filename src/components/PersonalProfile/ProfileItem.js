import React from "react";


const ProfileItem = ({profile, setEditProfile}) => {

    return (
        <>
            <div>
                <span>
                    <button onClick={()=>setEditProfile(true)} className="fa-pull-right rounded-pill mt-2 me-3 btn-primary">Edit</button>
                </span>
            </div>
            <div className="row">
                <div className={"col-6"}>
                    <i className="fas fa-map-marker-alt fa-xs me-2"></i>
                    <span>Phone Number</span>
                </div>
                <div className={"col-6"}>
                    <span className="wd-icon-text-font">{profile.phone}</span>
                </div>
            </div>
            <div className="row mt-1">
                <div className={"col-6"}>
                    <i className="fas fa-envelope-square fa-xs me-2"></i>
                    <span>Email</span>
                </div>
                <div className={"col-6"}>
                    <span className="wd-icon-text-font">{profile.email}</span>
                </div>
            </div>
        </>
    );

}


export default ProfileItem;