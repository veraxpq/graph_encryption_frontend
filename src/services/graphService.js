const GRAPH_API = 'http://localhost:18081/en-graph';

export const getEncryptedGraph = async (userId, graphUrl, message, password, token) => {
    const response = await fetch(`${GRAPH_API}/encrypt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': token,
        },
        body: JSON.stringify({
            userId: userId,
            originalImageUrl: graphUrl,
            message: message,
            password: password,
        })
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
        body: JSON.stringify({
            url: graphUrl,
            password: password,
        })
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
    console.log(response);

    const respJson = await response.json();
    dispatch({
        type: 'update-images',
        payload: respJson.data,
    });
}