import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FoxData from '../../FoxData.json'
import Team1 from '../Team/Team1'
import Team2 from '../Team/Team2'
import './Home.scss'

const initialTeam1 = [
    {
        id : "iu56g23",
        foxName : "Mike",
        img : "https://randomfox.ca/images/9.jpg",
        power : 144,
        gender : "male"
    },
    {
        id : "jk34sx1",
        foxName : "Eva",
        img : "https://randomfox.ca/images/2.jpg",
        power : 135,
        gender : "female"
    },
    {
        id : "34xcvl6",
        foxName : "Jasper",
        img : "https://randomfox.ca/images/10.jpg",
        power : 77,
        gender : "male"
    },
    {
        id : "89efc23",
        foxName : "Rex",
        img : "https://randomfox.ca/images/6.jpg",
        power : 99,
        gender : "male"
    },
    {
        id : "ox90264",
        foxName : "Thor",
        img : "https://randomfox.ca/images/29.jpg",
        power : 122,
        gender : "male"
    }
]

const initialTeam2 = [
    {
        id : "hj673df",
        foxName : "Bentley",
        img : "https://randomfox.ca/images/12.jpg",
        power : 138,
        gender : "male"
    },
    {
        id : "mq23ev9",
        foxName : "Dexter",
        img : "https://randomfox.ca/images/20.jpg",
        power : 82,
        gender : "male"
    },
    {
        id : "uil562t",
        foxName : "Haze",
        img : "https://randomfox.ca/images/17.jpg",
        power : 117,
        gender : "female"
    },
    {
        id : "rtxg562",
        foxName : "Luma",
        img : "https://randomfox.ca/images/13.jpg",
        power : 130,
        gender : "female"
    },
    {
        id : "3490adf",
        foxName : "Zorro",
        img : "https://randomfox.ca/images/15.jpg",
        power : 95,
        gender : "female"
    }
]

const Home = () => {
    const [team1, setTeam1] = useState(initialTeam1)
    const [team2, setTeam2] = useState(initialTeam2)
    const [team1Total, setTeam1Total] = useState(577)
    const [team2Total, setTeam2Total] = useState(562)

    const foo = () => {
        const t1 = []
        const t2 = [...FoxData]
        while(t1.length < t2.length) {
            let randIdx = Math.floor(Math.random() * t2.length)
            let randFox = t2.splice(randIdx, 1)[0]
            t1.push(randFox)
        }
        setTeam1(t1)
        setTeam2(t2)
    }

    const handleClick = () => {
        foo()
        calcWinner(team1,team2)
    }

    const calcWinner = (t1 = initialTeam1,t2 = initialTeam2) => {
        const t1Tot = t1.reduce((acc,item) => acc + item.power,0)
        const t2Tot = t2.reduce((acc,item) => acc + item.power,0)
        setTeam1Total(t1Tot)
        setTeam2Total(t2Tot)
    }

    return(
        <main className='main'>
            <div className="main__container">
               <Navbar handleClick={handleClick} />
               <Team1 isWinner={team1Total > team2Total} team1={team1} />
               <Team2 isWinner={team2Total > team1Total} team2={team2} />
            </div>
        </main>
    )
}

export default Home