import React from 'react'
import { Link } from 'react-router-dom'
import './ContentBlock.css'

const ContentBlock = ({ icon, heading, text, link}) => {

    return (
        <div className="content-block-container">
            <div className="content-block-icon-container mb10">
                <img className="content-block-icon" src={icon}></img>
            </div>
            <h1 className="content-block-heading mb10">{heading}</h1>
            <div className="content-block-text mb10">{text}</div>
            <Link className="content-block-link" to={link}><h2 className="content-link-text">...zjisti víc</h2></Link>
        </div>
    )
}

export default ContentBlock