import React, { Component } from 'react'
import { connect } from 'react-redux'

import PollCard from '../../../components/pollCard/pollCard'
import Spinner from '../../../components/UI/spinner/spinner'
import * as actions from '../../../store/actions/index'
import { withRouter } from 'react-router'

class Polls extends Component {

    componentDidMount() {
        this.props.onLoadQuestions()
    }

    questionDetailHandler = qID => {
        this.props.history.push('/questions/' + qID)
    }

    render() {
        let questions = <Spinner />
        if (this.props.questions && this.props.users) {
            const sortedQuestions = Object.keys(this.props.questions).sort((a, b) => {
                return this.props.questions[b].timestamp - this.props.questions[a].timestamp
            })
            const questionsKeys = sortedQuestions.filter(questionKey => {
                return (Boolean(this.props.currentUser.answers[questionKey]) !== Boolean(this.props.unanswered))
            })

            questions = questionsKeys.map(questionKey => {
                const imgURl = this.props.users[this.props.questions[questionKey].author].avatarURL
                return (
                    <PollCard
                        key={questionKey}
                        imageUrl={imgURl}
                        option1={this.props.questions[questionKey].optionOne.text}
                        option2={this.props.questions[questionKey].optionTwo.text}
                        username={this.props.users[this.props.questions[questionKey].author].name}
                        questionDetailHandler={() => this.questionDetailHandler(questionKey)} />
                )
            })
        }
        return (
            <div>
                {questions}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.auth.users,
        currentUser: state.auth.currentUser,
        questions: state.poll.questions,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadQuestions: () => dispatch(actions.loadPolls())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Polls))
