import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {createActivity} from '../api/api'




const CreateActivity = ({token, setSubmit}) => { 
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()
    
    useEffect(() => {
        token ? null : history.push('/login')
    })
    
    
    const handleSubmit = async(event) =>  {
        event.preventDefault()
        const result = await createActivity({
            token: token, 
            name: name, 
            description: description})
        if(result.error) {
            setErrorMessage(result.message)
            console.log(errorMessage)
        }else {
            setSubmit(true)
            setErrorMessage('')
            history.push('/activities')
        }
           
    }
    
    return (
    <div className="createActivityContainer">
        <form onSubmit={handleSubmit} className='formCreateActivity'>
            <h2>Create Activity!</h2>
        <h3>Name</h3>
        <input 
        value={name} 
        onChange={(event) => 
        setName(event.target.value)} 
        className="nameActivity"
        required
        ></input>

            <h3>Description</h3>
            <textarea 
            value={description} 
            onChange={(event) => 
            setDescription(event.target.value)} 
            className='descriptionActivity'
            required
            ></textarea>
          
          <button type='submit' className="submitActivity">Submit Activity</button>
        </form>
        <h2>{errorMessage}</h2>
    </div>
    )
}




export default CreateActivity;