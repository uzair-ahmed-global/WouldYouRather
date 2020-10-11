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
            return {
                ...state,
                loading: false,
                users: deepCopyObject(action.users)
            }
        case actionTypes.LOGIN:
            return {
                ...state,
                currentUser: deepCopyObject(state.users[action.userID])
            }
        case actionTypes.LOGOUT:
            console.log('REDUCER: ', 'we here');
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