const GRAPH_API = 'http://localhost:18081/en-graph';

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

export const fetchAllImages = async (dispatch, userId, token) => {
    const response = await fetch(`${GRAPH_API}/getImageList?userId=${userId}`,
        {
            headers: {
                'content-type': 'application/json',
                'Authorization': token,
            },
        })

    const respJson = await response.json();
    dispatch({
        type: 'update-images',
        payload: respJson.data,
    });
}