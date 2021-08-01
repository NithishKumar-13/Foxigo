import React from 'react'
import './Card.scss'

const Card = ({ team1 }) => {
    console.log(team1)
    return(
        <div>
            Card
            {/* <ul>
               {team1.map(data => (<li>{data.foxName}</li>))}
            </ul> */}
        </div>
    )
}

export default Card