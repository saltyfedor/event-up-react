import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MobileMenu.css'

const MobileMenu = ({ links }) => {
    const [isOpen, updateIsOpen] = useState(false)

      
    const linkList = links.map(link => {
        return (
            <Link className="mobile-menu-link" to={link.ref}>{link.text}</Link>            
        )
    })

  
        return (
            <div>
                <img className="menu-icon" src="./Icons/menu.png" onClick={() => { updateIsOpen(true) }}></img>
                {isOpen?   <div className="mobile-menu-open-container" onClick={() => updateIsOpen(false)}>
                <div className="mobile-menu-inner" onClick={(e)=>{e.stopPropagation()}}>
                    <div className="close-icon-container">
                        <img onClick={() => updateIsOpen(false)} className="close-icon" src="./Icons/closewhite.png"></img>
                    </div>
                    
                        {linkList}
                    
                </div>
                </div> : null}
            </div>
        )
    
}

export default MobileMenu