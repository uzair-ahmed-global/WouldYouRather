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

export const savePoll = (question, postRedirect) => {
    return dispatch => {
        dispatch(savePollStart())
        API._saveQuestion(question)
        .then((res, err) => {
            dispatch(savePollSuccess())
            dispatch(loadPolls())
            dispatch(actions.loadUsers())
            postRedirect()
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

const answerPollStart = () => {
    return {
        type: actionTypes.ANS_POLL_START,
    }
}

const answerPollSuccess = () => {
    return {
        type: actionTypes.ANS_POLL_SUCCESS
    }
}

export const answerPoll = (userID, questionID, answer, postSubmitRedirect) => {
    return dispatch => {
        dispatch(answerPollStart())
        console.log(userID, questionID, answer);
        API._saveQuestionAnswer({authedUser: userID, qid: questionID, answer: answer})
        .then((res, err) => {
            dispatch(answerPollSuccess())
            dispatch(actions.loadPolls())
            dispatch(actions.loadUsers())
            postSubmitRedirect()
        })
    }
}