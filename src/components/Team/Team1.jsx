import React from 'react'
import Card from '../Card/Card'
import './Team.scss'

const Team1 = ({ team1 }) => {
    return(
        <div className='team team--1'>
            <p className="team__title">Team 1</p>
            <Card team1={team1} />
        </div>
    )
}

export default Team1