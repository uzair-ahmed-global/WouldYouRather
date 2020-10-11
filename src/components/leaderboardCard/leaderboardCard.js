import React from 'react'

const LeaderboardCard = (props) => {
    return (
        <div className='d-flex justify-content-center h-100' style={{ margin: '20px 0px' }}>
            <div className="card mb-3" style={{ maxWidth: '540px' , minWidth: '300px'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.imageUrl} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8 align-self-center">
                        <div className="card-body">
                            <h5 className="card-title">{props.username}</h5>
                            <p className="card-text">Questions Asked: {props.questionsAsked}</p>
                            <p className="card-text">Questions Answered: {props.questionsAnswered}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardCard
