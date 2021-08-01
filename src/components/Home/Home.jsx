import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import FoxData from '../../FoxData.json'
import Team1 from '../Team/Team1'
import Team2 from '../Team/Team2'
import './Home.scss'

const Home = () => {
    const [foxData,] = useState(FoxData)
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const foo = () => {
            const t1 = []
            const t2 = [...foxData]
            while(t1.length < t2.length) {
                let randIdx = Math.floor(Math.random() * t1.length)
                let randFox = t2.splice(randIdx, 1)[0]
                t1.push(randFox)
            }
            setTeam1(t1)
            setTeam2(t2)
        }
        foo()    
    },[isPlaying,foxData])

    return(
        <main className='main'>
            <div className="main__container">
               <Navbar isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
               <Team1 team1={team1} />
               <Team2 team2={team2} />
            </div>
        </main>
    )
}

export default Home