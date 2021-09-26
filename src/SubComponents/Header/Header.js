import React from 'react'
import MobileMenu from '../MobileMenu/MobileMenu'
import DesktopMenu from '../DesktopMenu/DesktopMenu'
import useCheckMobileScreen from '../useCheckMobileScreen'
import { Link } from 'react-router-dom'
import './Header.css'

const links = [   
    {
        text: "VIDEA",
        ref: "video"
    },
    {
        text: "EVENTY",
        ref: "events"
    },
    {
        text: "STREAMY",
        ref: "streams"
    },
    {
        text: "DESIGN",
        ref: "design"
    },
    {
        text: "REKLAMA",
        ref: "adverts"
    }
]

const Header = () => {
    const isMobile = useCheckMobileScreen()
    
    return (
        <div className="header-container">
            <Link to={"/"}><img src="./Images/logo_cropped.png" className="header-logo"></img></Link>
            {isMobile ? <MobileMenu links={links}/> : <DesktopMenu links={links}/>}
        </div>
    )
}

export default Header