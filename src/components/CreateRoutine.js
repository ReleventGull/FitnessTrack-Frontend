import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import {createRoutine} from "../api/api"

const CreateRoutine = ({token, setSubmit}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const history = useHistory()

    useEffect(() => {
        token ? null : history.push('/login')
    })

    const handleSubmit = async(event) => {
        event.preventDefault()
        const result = await createRoutine({
            token: token,
            name: name,
            goal: description})
        if(result.error) {
            setErrorMessage(result.message)
            console.log(errorMessage)
        }else{
            console.log(result)
            setSubmit(true)
            setErrorMessage('')
            history.push('/routines')
        }
    }
    return (
        <div className="createRoutineContainer">
        <form onSubmit={handleSubmit} className="formCreateRoutine">
            <h2>Create a Routine!</h2>
            <input
            value={name}
            onChange={(event) =>
            setName(event.target.value)}
            className="nameRoutine"
            required
            ></input>

                <h3>Goal</h3>
                <textarea 
                value={description}
                onChange={(event) =>
                setDescription(event.target.value)}
                className="descriptionRoutine"
                required
                ></textarea>

                <button type="submit" className="submitRoutine"> Submit Routine</button>
            </form>
            <h2>{errorMessage}</h2>
        </div>
    )
}

export default CreateRoutine