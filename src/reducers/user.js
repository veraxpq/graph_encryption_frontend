import user from './data/user.json'

const userInfo = (state = user, action) => {
    switch (action.type) {
        case 'create-user':
            return user;
            break;
        default:
            return state;
    }
};

export default userInfo;