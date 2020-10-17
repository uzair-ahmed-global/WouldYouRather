import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    questions: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEW_POLL_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.NEW_POLL_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case actionTypes.LOAD_POLL_START:
            return {
                ...state,
                loading: false
            }
        case actionTypes.LOAD_POLL_SUCCESS:
            return {
                ...state,
                loading: false,
                questions: deepCopyObject(action.questions)
            }
        case actionTypes.ANS_POLL_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.ANS_POLL_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

const deepCopyObject = (obj) => JSON.parse(JSON.stringify(obj))

export default reducer