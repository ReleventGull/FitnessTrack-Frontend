import React from "react";
import {Link} from 'react-router-dom'




const Header =  () => {
    return (
    <div className='bruh2'>
    <header className='mainHeader'>
    <h3>Fitness Tracker</h3>
    <nav  className='headerLinks'>
    <Link to='activities'>Activities</Link>
    
    <Link to='Routines'>Routines</Link>
    
    <Link to='login'>Login</Link>
    
    <Link to='register'>Register</Link>

    <Link>MyRoutines</Link>
    </nav>
    </header>
    </div>

    )
}

export default Header