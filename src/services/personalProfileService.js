const PROFILE_API = 'http://localhost:18081/en-graph/user';
const LOGIN_API = "http://localhost:18081/en-graph/login";


export const fetchAllPersonalProfile = async (dispatch, id, token) => {
    const response = await fetch(`${PROFILE_API}?id=${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': token
        }
    });

    const profile = await response.json();
    dispatch({
        type: 'fetch-all-personal-profile',
        profile
    });
}

export const updateCurrentPersonalProfile = async (dispatch, PersonalProfile, token) => {
    const response = await fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(PersonalProfile),
        headers: {
            'content-type': 'application/json',
            'authorization': `${token}`
        }
    });

    const profile = await response.json();
    dispatch({
        type: 'update-personal-profile',
        profile
    })
    alert("Update successfully");
}

export const loginWithCredential = async (email, password) => {
    try {
        const response = await fetch(`${LOGIN_API}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        });
        return await response.json();
    } catch (e) {
        console.log('log in error ', e);
    }

}