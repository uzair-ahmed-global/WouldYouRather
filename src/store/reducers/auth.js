import * as actionTypes from '../actions/actionTypes'

const initialState = {
    currentUser: null,
    loading: false,
    users: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_USERS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOAD_USERS_SUCCESS:
            const newUsers = deepCopyObject(action.users)
            let updatedCurrentUser = null
            if (state.currentUser) {
                updatedCurrentUser = deepCopyObject(newUsers[state.currentUser.id])
            }
            return {
                ...state,
                loading: false,
                users: newUsers,
                currentUser: updatedCurrentUser
            }
        case actionTypes.LOGIN:
            return {
                ...state,
                currentUser: deepCopyObject(state.users[action.userID])
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state
    }
}

const deepCopyObject = (obj) => JSON.parse(JSON.stringify(obj))

export default reducer