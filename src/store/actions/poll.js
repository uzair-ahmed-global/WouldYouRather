import * as actionTypes from './actionTypes'
import * as API from '../../_DATA'
import * as actions from './index'

const savePollStart = () => {
    return {
        type: actionTypes.NEW_POLL_START
    }
}

const savePollSuccess = () => {
    return {
        type: actionTypes.NEW_POLL_SUCCESS
    }
}

export const savePoll = (question) => {
    return dispatch => {
        dispatch(savePollStart())
        API._saveQuestion(question)
        .then((res, err) => {
            dispatch(savePollSuccess())
            dispatch(loadPolls())
            dispatch(actions.loadUsers())
        })
    }
}

const loadPollStart = () => {
    return {
        type: actionTypes.LOAD_POLL_START
    }
}

const loadPollSuccess = (questions) => {
    return {
        type: actionTypes.LOAD_POLL_SUCCESS,
        questions: questions
    }
}

export const loadPolls = () => {
    return dispatch => {
        dispatch(loadPollStart())
        API._getQuestions()
        .then((res, err) => {
            dispatch(loadPollSuccess(res))
        })
    }
}