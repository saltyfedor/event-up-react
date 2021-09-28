import React, { useState, useEffect } from 'react'
import useCheckMobileScreen from '../useCheckMobileScreen'
import './Slider.css'

const Slider = ({ imgpath, title }) => {
    const isMobile = useCheckMobileScreen()

    const getMinHeight = () => {
        if (isMobile) {
            return "40vh"
        } else {
            return "80vh"
        }
    }

    const getHeadingSize = () => {
        if (isMobile) {
            
        } else {
            return "4em"
        }
    }

    const style = {
        backgroundImage: `url(${imgpath})`,
        minHeight: getMinHeight()
    }

    const headingStyle = {
        fontSize: getHeadingSize()
    }
    
    return (
        <div className="sliderimg" style={style}>
            {title ? <h1 style={headingStyle} className="slider-title">{title}</h1> : null}
       </div>
    );
 }

export default Slider