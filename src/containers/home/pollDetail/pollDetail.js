import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import AnsweredPoll from './answeredPoll'
import UnansweredPoll from './unansweredPoll'

const PollDetail = props => {
    let poll = null
    let question = props.questions[props.match.url.split('/').pop()]
    if (question) {
        if (props.currentUser.answers[question.id]) {
            const option1Count = question.optionOne.votes.length
            const option2Count = question.optionTwo.votes.length
            const totalCount = option1Count + option2Count

            const option1Percentage = question.optionOne.votes.length / totalCount
            const option2Percentage = question.optionTwo.votes.length / totalCount

            const highlight1 = props.currentUser.answers[question.id] === 'optionOne'
            poll = (
                <AnsweredPoll
                    imageUrl={props.users[question.author].avatarURL}
                    username={question.author}
                    option1={question.optionOne.text}
                    option1Count={option1Count}
                    option1Percentage={option1Percentage}
                    option2={question.optionTwo.text}
                    option2Count={option2Count}
                    option2Percentage={option2Percentage}
                    option1Highlight={highlight1}
                />)
        } else {
            poll = (
                <UnansweredPoll
                    imageUrl={props.users[question.author].avatarURL}
                    username={question.author}
                    option1={question.optionOne.text}
                    option2={question.optionTwo.text}
                    qID={question.id}
                />)
        }
    } else {
        poll = <Redirect to='/pageNotFound'/>
    }
    return (
        <div>
            {poll}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.auth.users,
        questions: state.poll.questions,
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(PollDetail)