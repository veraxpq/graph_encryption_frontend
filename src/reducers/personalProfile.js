import profileJSON from './data/profile.json'


const personalProfile = (state = profileJSON, action) => {
    switch (action.type) {
        case 'fetch-all-personal-profile':
            return(action.PersonalProfile);
            break;
        case 'update-personal-profile':
            const newState = (action.PersonalProfile);
            console.log(newState)
            return ({...state,"data":newState});
            break;
        default:
            return state;
    }

};



export default personalProfile;
