import profileJSON from './data/profile.json'


const personalProfile = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-personal-profile':
            return (action.profile);
            break;
        case 'update-personal-profile':
            const newState = (action.profile);
            console.log(newState)
            return ({...state, "data": newState});
            break;
        default:
            return state;
    }

};


export default personalProfile;
