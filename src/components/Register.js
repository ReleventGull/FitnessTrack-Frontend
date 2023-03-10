import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../api/api'



const Register = ({setToken}) => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [password2, setPassword2] = useState('')
const [errorMessage, setErrorMessage] = useState('')

const history = useHistory()


const handleSubmit = async (event) => {
event.preventDefault()
console.log(password.length)
if (password !== password2) {
setErrorMessage("Passwords do not match.")
setUsername('')
setPassword('')
setPassword2('')
}else {
   const result = await registerUser({username: username, password: password})
   console.log(result)
   if(!result.error) {
      setToken(result.token)
      localStorage.setItem('token', result.token)
      history.push('/')
   }else {
      setErrorMessage(result.message)
   }
  }
}


return (
<div className='registerContainer'>
 <h1>Register for Fitness Tracker!</h1>
 <form onSubmit={handleSubmit} className='registerForm'> 
    <h2>Username</h2>
    <input 
    value={username}
    onChange={(event) => 
    setUsername(event.target.value)}
    type='Username'
    required
    >
    </input>
    
    <h2>Password</h2>
    <input 
    value={password}
    onChange={(event) => setPassword(event.target.value)} 
    type='Password'
    required
    >
    </input>
    
    <h2>Confirm Password</h2>
    
    <input 
    value={password2} 
    onChange={(event) => setPassword2(event.target.value)} 
    type='Password'
    required
    >
    </input>
    
    <button type='submit'>Submit</button>
 </form>
 <h4 className='registerError'>{errorMessage}</h4>
</div>
)
}






export default Register