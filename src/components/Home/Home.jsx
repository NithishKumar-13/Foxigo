import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.scss'

const Home = () => {
    return(
        <main className='main'>
            <div className="main__container">
               <Navbar />
            </div>
        </main>
    )
}

export default Home