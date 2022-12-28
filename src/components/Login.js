import React, {useState} from 'react'





const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    
    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log(username, password)
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
        </div>
    )
}


export default Login