import React from 'react'
import './Team.scss'

const Team1 = ({ team1, isWinner }) => {
    return(
        <div className={`team team--1 ${isWinner ? 'win' : 'lost'}`}>
            <p className="team__title">Team 1</p>
             <div className="team__container">
             {team1.map(data => (
                <div className='card'>
                    <div className="card__picture">
                        <img src={data.img} alt={data.foxName} className="card__img" />
                    </div>
                    <div className="card__body">
                        <p>Name : {data.foxName}</p>
                        <p>Gender : {data.gender}</p>
                        <p>Power : {data.power}</p>
                    </div>
                </div>
            ))}
             </div>
        </div>
    )
}

export default Team1