import React from 'react'
import Globe from './Globe'

const Header = () => {
    return (
        <header className="header">
            <Globe className="header-icon" />
            <h1>my travel journal.</h1>            
        </header>
    )
}

export default Header