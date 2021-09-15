import React from 'react';
import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import Landing from './Landing';
import Alumni from './Alumnis/alumni';
import OurEvents from './Events/OurEvents';
import Placedat from './Placedat';
import Footer from './Footer';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import Newcard from './Events/NewCard';
function Loader()
{
    return(
    <div>
        <ScrollUpButton style={{backgroundColor:''}}/>
        <Navbar />
        <Landing />
        <Fade>
        <Placedat/>
        </Fade>
        <Fade left>
        <OurEvents />
        </Fade>
        <Fade right>
        <Alumni />
        </Fade>
        <Footer />
    </div>
    );
}
export default Loader ;