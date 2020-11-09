import { Avatar } from '@material-ui/core';
import React from 'react'
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="header__start">
                <h1>HUDSON</h1>
            </div>
            <div className="header__end">
                <p>Offers</p>
                <p>Became Partner</p>
                <p>All Restaurants</p>
                <p> العربية</p>
                <Avatar />
                <button>Login</button>
            </div>
            
        </div>
    )
}

export default Header
