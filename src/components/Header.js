import React from 'react'
import desktopImg from '../images/bg-header-desktop.svg'
import mobileImg from '../images/bg-header-mobile.svg'
const Header = () => {
    let width = window.innerWidth
    console.log(width)
    return(
        <div className="Header" style={ width < 750 ? {backgroundImage: `url(${mobileImg})` }: {backgroundImage: `url(${desktopImg})` } }>

        </div>
        
    )
}

export default Header