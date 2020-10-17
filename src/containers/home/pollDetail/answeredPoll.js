import React from 'react'
import { connect } from 'react-redux'

const AnsweredPoll = props => {
    let highlight1 = null
    let highlight2 = null
    if (props.option1Highlight) {
        highlight1 = 'bg-warning'
    } else {
        highlight2 = 'bg-warning'
    }
    return (
        <div className='d-flex justify-content-center h-100' style={{ margin: '20px 0px' }}>
            <div className="card mb-3" style={{ maxWidth: '540px', minWidth: '300px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.imageUrl} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8 align-self-center">
                        <div className="card-body">
                            <h5 className="card-title">{props.username} asks would you rather:</h5>
                            <div className={highlight1}>
                                <p className="card-text">{props.option1}</p>
                                <p className="card-text">Vote count: {props.option1Count}</p>
                                <p className="card-text">{props.option1Percentage * 100}%</p>
                            </div>
                            <p className="card-text font-weight-bold text-center">OR</p>
                            <div className={highlight2}>
                                <p className="card-text">{props.option2}</p>
                                <p className="card-text">Vote count: {props.option2Count}</p>
                                <p className="card-text">{props.option2Percentage * 100}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(AnsweredPoll)