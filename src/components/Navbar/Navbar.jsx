import React from 'react'
import './Navbar.scss'

const Navbar = ({ handleClick }) => {
    return(
        <nav className="navbar">
        <div className="navbar__logo-box">
           <img alt='foxigo logo' className='navbar__logo' src="https://img.icons8.com/fluency/48/000000/fox.png"/>
            <p className="navbar__title">Foxigo</p>
        </div>
        <div className="navbar__btn-box">
            <button onClick={handleClick} className='navbar__btn'>Play again</button>
        </div>
    </nav>
    )
}

export default Navbar