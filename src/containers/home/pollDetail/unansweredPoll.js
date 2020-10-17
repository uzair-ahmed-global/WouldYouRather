import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import * as actions from '../../../store/actions/index'

class UnansweredPoll extends Component {
    state = {
        selectedOption: null
    }

    optionChangedHandler = event => {
        if (event.target.value === null) {
            return
        }
        this.setState({
            ...this.state,
            selectedOption: event.target.value,
        })
    }

    postSubmitRedirect = () => {
        this.props.history.push('/')
    }

    submitPollHandler = event => {
        event.preventDefault()
        if (this.state.selectedOption === '') {
            return
        }
        this.props.onSubmitAnswer(this.props.user.id, this.props.qID, this.state.selectedOption, this.postSubmitRedirect)
    }

    render() {
        return (
            <div className='d-flex justify-content-center h-100' style={{ margin: '20px 0px' }}>
                <div className="card mb-3" style={{ maxWidth: '540px', minWidth: '300px' }}>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.props.imageUrl} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8 align-self-center">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.username} asks, would you rather:</h5>
                                <div>
                                    <p className="card-text font-weight-bold text-center">OR</p>
                                    <form style={{ maxWidth: '500px', minWidth: '350px', margin: '20px 0px' }}
                                        onSubmit={this.submitPollHandler}
                                        onChange={this.optionChangedHandler}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="optionOne" />
                                            <label className="form-check-label" for="exampleRadios1">
                                                {this.props.option1}
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="optionTwo" />
                                            <label className="form-check-label" for="exampleRadios2">
                                                {this.props.option2}
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary" disabled={!this.state.selectedOption}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitAnswer: (userID, qID, ans, postSubmitRedirect) => dispatch(actions.answerPoll(userID, qID, ans, postSubmitRedirect))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnansweredPoll)) 