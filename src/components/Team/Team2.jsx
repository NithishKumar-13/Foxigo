import React from 'react'
import './Team.scss'

const Team1 = ({ team2, isWinner }) => {

    return(
        <div className={`team team--2 ${isWinner ? 'win' : 'lost'}`}>
            <p className="team__title">Team 2</p>
            <div className="team__container">
             {team2.map(data => (
                <div className='card'>
                    <div className="card__picture">
                        <img src={data.img} alt={data.foxName} className="card__img" />
                    </div>
                    <div className="card__body">
                        <p><span className="card__key">Name : </span>{data.foxName}</p>
                        <p><span className="card__key">Gender : </span>{data.gender}</p>
                        <p><span className="card__key">Power : </span>{data.power}</p>
                    </div>
                </div>
            ))}
             </div>
        </div>
    )
}

export default Team1