import React, {useState} from 'react'
import { loginUser } from '../api/api'




const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const handleSubmit = async(event) => {
        event.preventDefault()
        const result = await loginUser({username: username, password: password})
        console.log(result)
        if(result.error) {
            setErrorMessage(result.message)
            setUsername('')
            setPassword('')
        }else {
            console.log(result.token)
        }
    }

    return (
        <div className='loginContainer'>
        <h1>Login to Your Account!</h1>
            
            <form onSubmit={handleSubmit} className='loginForm'>
            <h2>Username</h2>
            
            <input 
            value={username} 
            onChange={(event) => 
            setUsername(event.target.value)}
            type='username'
            required
            ></input>
            
            <h2>Password</h2>
            <input 
            value={password} 
            onChange={(event) => 
            setPassword(event.target.value)} 
            type='password'
            required
            ></input>

            <button type='submit'>Submit</button>
            </form>
            <h4 className='registerError'>{errorMessage}</h4>
        </div>
    )
}


export default Login