const initState = {
    loggedIn: true
};

export default (state = initState, action) => {
    let newState;
    switch (action.type) {
        case 'LOGIN':
            newState = {loggedIn: true};
            return newState;
        case 'LOGOUT':
            newState = {loggedIn: false};
            return newState;
        default: 
            return state;
    } 
}

