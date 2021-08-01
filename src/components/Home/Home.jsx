import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import FoxData from '../../FoxData.json'
import './Home.scss'

const Home = () => {
    const [foxData, setFoxData] = useState(FoxData)
    
    return(
        <main className='main'>
            <div className="main__container">
               <Navbar />
            </div>
        </main>
    )
}

export default Home