import React from 'react'
import Header from './Header/Header'
import Slider from './Slider/Slider'
import ContentLayout from './ContentLayout/ContentLayout';
import Footer from './Footer/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import './WebContainer.css'


const WebContainer = () => {
    return (
        <Router>
             <Header />
            <Route exact path="/">
                <div className="web-container">                   
                    <Slider />
                    <ContentLayout />
                </div>
            </Route>
            <Route path="/video">
                <div className="web-container">                   
                </div>
            </Route>
            <Footer />
        </Router>
    )
}

export default WebContainer