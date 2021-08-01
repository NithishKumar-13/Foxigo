import React from 'react'
import Card from '../Card/Card'
import './Team.scss'

const Team1 = ({team2}) => {

    return(
        <div className='team team--2'>
            <p className="team__title">Team 2</p>
            <Card team2={team2} />
        </div>
    )
}

export default Team1