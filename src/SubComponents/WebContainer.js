import React from 'react'
import Header from './Header/Header'
import Slider from './Slider/Slider'
import ContentLayout from './ContentLayout/ContentLayout';
import VideoPage from './Pages/VideoPage';
import StreamPage from './Pages/StreamPage';
import AdPage from './Pages/AdPage'
import EventPage from './Pages/EventPage';
import DesignPage from './Pages/DesignPage';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop';
import {
    BrowserRouter as Router,
   
    Route,
    
  } from "react-router-dom";


import './WebContainer.css'


const WebContainer = () => {


    return (
        <Router>
            <ScrollToTop/>
             <Header />
            <Route exact path="/">
                <div className="web-container">                   
                    <Slider imgpath="./Images/conference40.jpg" title="EventUP" />
                    <ContentLayout />
                </div>
            </Route>
            <Route path="/video">                
                    <VideoPage/>            
            </Route>
            <Route path="/streams">                
                    <StreamPage/>            
            </Route>
            <Route path="/adverts">                
                    <AdPage/>            
            </Route>
            <Route path="/events">                
                    <EventPage/>            
            </Route>
            <Route path="/design">                
                    <DesignPage/>            
            </Route>
            <Footer />
        </Router>
    )
}

export default WebContainer