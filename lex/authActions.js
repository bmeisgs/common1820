export const LOGIN = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN'
        })
    }
}

export const LOGOUT = () => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}