import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/index'

export class NewPoll extends Component {
    state = {
        option1: '',
        option2: '',
    }

    option2Handler = event => {
        this.setState({
            ...this.state,
            option1: event.target.value
        })
    }

    option1Handler = event => {
        this.setState({
            ...this.state,
            option2: event.target.value
        })
    }

    submitPollHandler = (event) => {
        event.preventDefault()
        const question = {
            author: this.props.currentUser.id,
            optionOneText: this.state.option1,
            optionTwoText: this.state.option2
        }
        this.props.onSubmitPoll(question)
    }

    render() {
        return (
            <div className='row d-flex justify-content-center'>
                <form style={{ maxWidth: '500px', minWidth: '350px', margin: '20px 0px' }}
                    onSubmit={this.submitPollHandler}>
                    <label htmlFor="option1">Would your Rather</label>
                    <div className="form-group">
                        <input type="text" className="form-control" id="option1" placeholder="Enter option 1" onChange={this.option1Handler} />
                    </div>
                    <label htmlFor="option1">OR</label>
                    <div className="form-group">
                        <input type="text" className="form-control" id="option2" placeholder="Enter option 2" onChange={this.option2Handler} />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={!this.state.option1 || !this.state.option2}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitPoll: (poll) => dispatch(actions.savePoll(poll))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll)
