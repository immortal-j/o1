import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Alumni from './Alumnis/alumni';
function Loader()
{
    return(
    <div>
        <Navbar />
        <Landing />
        <Alumni />
    </div>
    );
}
export default Loader ;