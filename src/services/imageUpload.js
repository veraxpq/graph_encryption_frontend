const IMGUR_BASE = 'https://api.imgur.com/3';
const cors_prefix = '';

export const uploadImageToImgur = async (formData) => {
    const response = await fetch(`${IMGUR_BASE}/image`, {
        method: "POST",
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`
        },
        body: formData
    });

    return await response.json();
}