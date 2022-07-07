import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateCurrentPersonalProfile} from "../../services/personalProfileService";

const EditPersonalUserProfileComponent = ({profile, setEditProfile}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(profile.email)
    const [phone, setPhone] = useState(profile.phone)

    const userToken = localStorage.getItem("token");
    const updateProfileClickHandler = () => {
        let localProfile = {
            email,
            phone,
            "userId": profile.userId
        }
        console.log(localProfile)
        updateCurrentPersonalProfile(dispatch, localProfile, userToken);
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <h2 className="wd-name-font text-right">Edit Profile</h2>
            </div>
            <div className="row">
                <div className="col-6">
                    <i onClick={() => setEditProfile(false)}
                       className="fas fa-times wd-white ms-3 mb-2 "></i>
                </div>
                <div className="col-6">
                    <button onClick={(event) => updateProfileClickHandler(event.target.value)}
                            className="btn fa-pull-right rounded-pill me-3 btn-primary">Save
                    </button>
                </div>
            </div>
            <form className="row g-3">
                <div className="col-12">
                    <label htmlFor="emailAddress" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="emailAddress"
                           onChange={(e) => setEmail( e.target.value)}
                           placeholder="example@gmail.com" defaultValue={profile.email}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="inputAddress"
                           onChange={(e) => setPhone( e.target.value)}
                           placeholder="MA12345" defaultValue={profile.phone}/>
                </div>
            </form>
        </div>
    );

}

export default EditPersonalUserProfileComponent;