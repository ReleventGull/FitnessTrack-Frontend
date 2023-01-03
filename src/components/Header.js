import React from "react";
import {Link, useHistory} from 'react-router-dom'

const Header =  ({setToken, token}) => {
    const history = useHistory()
    
    const handleLogout = () => {
    setToken('')
    localStorage.removeItem('token')
    history.push('/')
    }


    return (
    <div className='bruh2'>
    <header className='mainHeader'>
    <h3>Fitness Tracker</h3>
    <nav  className='headerLinks'>
    <Link to='/'>Home</Link>
    <Link to='/activities'>Activities</Link>
    
    <Link to='/routines'>Routines</Link>
    
    {!token ?
    <>
    <Link to='/login'>Login</Link>
    <Link to='/register'>Register</Link> 
    </>
    :<>
    <Link to='/myRoutines'>MyRoutines</Link>
    <button onClick={handleLogout} className="logoutButton">Logout</button>
    </>
    }
    
   
    
    </nav>
    </header>
    </div>

    )
}

export default Header