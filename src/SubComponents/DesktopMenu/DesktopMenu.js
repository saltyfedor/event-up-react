import React from 'react'
import { Link } from 'react-router-dom'
import './DesktopMenu.css'

const DesktopMenu = ({ links }) => {

    const linkList = links.map((link, i) => {
        return (            
            <Link key={i} className="desktop-menu-link" to={link.ref}>{link.text}</Link>
        )
    })
    

    return (
        <div className="desktop-menu-container">
            {linkList}
        </div>
    )
}

export default DesktopMenu