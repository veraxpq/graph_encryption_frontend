const GRAPH_API = 'localhost:18081/en-graph';

export const getEncryptedGraph = async (graphUrl, message, password, token) => {
    const response = await fetch(`${GRAPH_API}/encrypt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': token,
        },
        body: {
            url: graphUrl,
            password: password,
            message: message,
        }
    });

    return await response.json();
}

export const getDecryptedGraph = async (graphUrl, password, token) => {
    const response = await fetch(`${GRAPH_API}/decrypt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': token,
        },
        body: {
            url: graphUrl,
            password: password,
        }
    });

    return await response.json();
}

export const fetchAllPersonalProfile = (dispatch, id, token) =>
    fetch(`${PROFILE_API}?id=${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `${token}`
        }
    })
        .then(response => response.json())
        .then(PersonalProfile => {
            dispatch({
                type: 'fetch-all-personal-profile',
                PersonalProfile
            })
        });
