import React, { Component } from 'react'
import Polls from './polls/polls'

export class Home extends Component {
    state = {
        showUnAnsweredTab: true
    }

    tabChangeHandler = event => {
        event.target.blur()
        if (event.target.value === 'ans') {
            this.setState({
                ...this.state,
                showUnAnsweredTab: false
            })
        } else {
            this.setState({
                ...this.state,
                showUnAnsweredTab: true
            })
        }
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                        <button className={"nav-link " + (this.state.showUnAnsweredTab && 'active')}
                            onClick={this.tabChangeHandler} value='unans'>
                            Unanswered Polls
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={"nav-link " + (!this.state.showUnAnsweredTab && 'active')}
                            onClick={this.tabChangeHandler} value='ans'>
                            Answered Polls
                        </button>
                    </li>
                </ul>
                <div >
                    <Polls unanswered={this.state.showUnAnsweredTab}/>
                </div>
            </div>
        )
    }
}

export default Home
