import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import NavItem from '../navitem/NavItem'
import * as actions from '../../../store/actions'

class Navbar extends Component {

    logouthandler = event => {
        console.log('helo');
        this.props.onLogout()
    }

    render = () => {
        let currentProfile = null
        let guardedPaths = null
        let logout = null

        if (this.props.user) {
            currentProfile = (
                <div className="media" style={{ margin: '0px 20px' }}>
                    <img src={this.props.user.avatarURL} className="mr-3" alt="..." style={{ height: '40px', width: '40px' }} />
                    <div className="media-body">
                        <h5 className="mt-0 text-light">{this.props.user.name}</h5>
                    </div>
                </div>
            )
            guardedPaths = ['Leaderboard', 'New'].map(path => {
                return (
                    <div className="navbar-nav" style={{ margin: '0px 20px' }}>
                        <NavItem path={'/' + path}>{path}</NavItem>
                    </div>
                )
            })
            logout = (
                <div className="navbar-nav" style={{ margin: '0px 20px' }}>
                    <a href='#' onClick={this.logouthandler}>Logout</a>
                </div>
            )
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <NavLink className="navbar-brand" to='/'>Would You Rather</NavLink>
                <div className="navbar-nav" style={{ margin: '0px 20px' }}>
                    <NavItem path='/profile'>Profile</NavItem>
                </div>
                {logout}
                {guardedPaths}
                {currentProfile}
            </nav>
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
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
