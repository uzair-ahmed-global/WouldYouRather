import * as actionTypes from './actionTypes'
import * as API from '../../_DATA'

const usersLoaded = (users) => {
    return {
        type: actionTypes.LOAD_USERS_SUCCESS,
        users: users
    }
}

const loadUsersStart = () => {
    return {
        type: actionTypes.LOAD_USERS_START
    }
}

export const loadUsers = () => {
    return dispatch => {
        dispatch(loadUsersStart())
        API._getUsers()
            .then(users => {
                dispatch(usersLoaded(users))
            })
    }
}

export const login = (userID, postRedirect) => {
    postRedirect()
    return {
        type: actionTypes.LOGIN,
        userID: userID
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}



