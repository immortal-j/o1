import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Alumni from './Alumnis/alumni';
import OurEvents from './Events/OurEvents'
function Loader()
{
    return(
    <div>
        <Navbar />
        <Landing />
        <OurEvents />
        <Alumni />
    </div>
    );
}
export default Loader ;