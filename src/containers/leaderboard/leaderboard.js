import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/spinner/spinner'

import LeaderboardCard from '../../components/leaderboardCard/leaderboardCard'

const Leaderboard = props => {
    let cards = <Spinner />
    if (props.users) {
        const sortedCards = Object.keys(props.users).sort((a, b) => {
            const bScore = props.users[b].questions.length + Object.keys(props.users[b].answers).length
            const aScore = props.users[a].questions.length + Object.keys(props.users[a].answers).length
            return bScore - aScore
        })
        cards = sortedCards.map(userKey => {
            const user = props.users[userKey]
            return <LeaderboardCard
                key={userKey}
                username={user.name}
                imageUrl={user.avatarURL}
                questionsAsked={user.questions.length}
                questionsAnswered={Object.keys(user.answers).length} />
        })

        cards.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    }

    return (
        <div>
            {cards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.auth.users
    }
}

export default connect(mapStateToProps)(Leaderboard)
