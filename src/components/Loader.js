import React from 'react';
import Fade from 'react-reveal/Fade';
import Navbar from './Navbar';
import Landing from './Landing';
import Alumni from './Alumnis/alumni';
import OurEvents from './Events/OurEvents';
import Placedat from './Placedat';
import Footer from './Footer';
function Loader()
{
    return(
    <div>
     
        <Navbar />
        <Landing />
        <Fade>
        <OurEvents />
        <Alumni />
        </Fade>
        <Placedat/>
        <Footer />
    </div>
    );
}
export default Loader ;