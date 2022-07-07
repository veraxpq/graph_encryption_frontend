import data from "bootstrap/js/src/dom/data";

const PROFILE_API = 'http://localhost:18081/en-graph/user';


export const fetchAllPersonalProfile = (dispatch, id,token) =>
    fetch(`${PROFILE_API}?id=${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization':`${token}`
        }
    })
        .then(response => response.json())
        .then(PersonalProfile => {
            dispatch({
                type: 'fetch-all-personal-profile',
                PersonalProfile
            })
        });

export const updateCurrentPersonalProfile = (dispatch, PersonalProfile,token) => {
    console.log(PersonalProfile)
    fetch(PROFILE_API, {
        // mode: 'no-cors',
        method: 'PUT',
        body: JSON.stringify(PersonalProfile),
        headers: {
            'content-type': 'application/json',
            'authorization':`${token}`
        }
    })  .then(response => response.json())
        .then(PersonalProfile => {
            console.log(PersonalProfile)
            dispatch({
                type: 'update-personal-profile',
                PersonalProfile
            })
            alert("Update successfully");
        });
}
