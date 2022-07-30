import images from './data/images.json';

const ImagesInfo = (state = images, action) => {
    switch (action.type) {
        case 'update-images':
            return {
                graphs: action.payload,
            };
            break;
        default:
            return state;
    }
};

export default ImagesInfo;