import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Spinner from '../../components/UI/spinner/spinner'

import * as actions from '../../store/actions/index'

class Auth extends Component {
    state = {
        selectedUserID: null
    }

    componentDidMount() {
        this.props.loadUsers()
        this.props.loadPolls()
        if (this.props.currentUser) {
            this.setState({ selectedUserID: this.props.currentUser.id })
        }
    }

    performLogin = (event) => {
        event.preventDefault()
        if (!this.state.selectedUserID) {
            return
        }
        this.props.performLogin(this.state.selectedUserID, this.postLoginRedirect)
    }

    userChangedHandler = (event) => {
        this.setState({
            ...this.state,
            selectedUserID: event.target.value
        })
    }

    postLoginRedirect = () => {
        console.log(this.props.location.redirect)
        if (this.props.location.redirect) {
            this.props.history.push(this.props.location.redirect)
        } else {
            this.props.history.push('/')
        }
    }

    render() {
        let users = <Spinner />
        if (this.props.users) {
            let defaultValue = 'default'
            if (this.props.currentUser) {
                defaultValue = this.props.currentUser.id
            }
            users = (
                <form onSubmit={this.performLogin}>
                    <select
                        className="custom-select"
                        onChange={this.userChangedHandler}
                        defaultValue={defaultValue}>
                        <option disabled value='default' key='default'>
                            Please select a user
                        </option>
                        {Object.keys(this.props.users).map(userID => {
                            return <option
                                value={this.props.users[userID].id}
                                key={this.props.users[userID].id}>
                                {this.props.users[userID].name}
                            </option>
                        })}
                    </select>
                    <button
                        type="submit"
                        className="btn btn-dark"
                        disabled={!this.state.selectedUserID}>
                        Login
                    </button>
                </form>
            )
        }
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Choose your account</h6>
                    {users}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(actions.loadUsers()),
        performLogin: (userID, postRedirect) => dispatch(actions.login(userID, postRedirect)),
        loadPolls: () => dispatch(actions.loadPolls())
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        users: state.auth.users,
        currentUser: state.auth.currentUser
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
