import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FoxData from '../../FoxData.json'
import Team1 from '../Team/Team1'
import Team2 from '../Team/Team2'
import './Home.scss'

const Home = () => {
    const [foxData, setFoxData] = useState(FoxData)
    
    return(
        <main className='main'>
            <div className="main__container">
               <Navbar />
               <Team1 />
               <Team2 />
            </div>
        </main>
    )
}

export default Home