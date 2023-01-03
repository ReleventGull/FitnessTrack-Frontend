const BASEURL = "https://fitnesstrac-kr.herokuapp.com/api";

export const registerUser = async({username, password}) => {
    try {
        const response = await fetch(`${BASEURL}/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });
    const data = await response.json();
    return data;
} catch (error) {
    console.error("An error occured while attempting to register", error);
}
};



export const loginUser = async({username, password}) => {
    try {
        const response = await fetch(`${BASEURL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username, 
                password: password
            })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occured while attempting to login", error);
    }
}

export const getAllActivities = async() => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities`)
        const result = await response.json()
        console.log("results from activities", result)
        return result
    }catch(error) {
        console.error(error)
    }
}

export const getAllRoutines = async() => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines`)
        const result = await response.json()
        console.log("Routines", result)
        return result
    }catch(error) {
        console.error(error)
    }
}

export const getUser = async(token) => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/users/me`, {
            method: "GET",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        
        const result = await response.json()
        console.log("result from user", result)
        return result
    }catch(error) {
        console.error(error)
    }
}

export const getUserRoutines = async({token, username}) => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`)

        const result = await response.json()
        console.log("results from the users routines", result)
        return result
    }catch(error) {
        console.error(error)
    }
}


export const getRoutinesByActivityId = async(id) => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities/${id}/routines`)
        const result = await response.json()
        console.log("routines with activityId", result)
        return result
    }catch(error) {
        console.error(error)
    }
}


export const createActivity = async({token, name, description}) => {
try {
  
const response = await fetch(`${BASEURL}/activities`, {
    method: "POST",
    headers: {
        'Content-type': 'Application/json',
        'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      name: name,
      description: description
    })

})
const result = await response.json()
return result
}catch(error) {
    console.error(error)
}
}

export const createRoutine = async({token, name, goal}) => {
    try{
        const response = await fetch(`${BASEURL}/routines`, {
            method: "POST",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: true
            })
        })
        const result = await response.json()
        return result
    }catch(error) {
        console.error(error)
    }
}

export const attachActivityToRoutine = async({id, activityId, count, duration, token}) => {
    try{
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}/activities`, {
            method: "POST",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                activityId: activityId,
                count: count,
                duration: duration
            })
        })
        const result = await response.json()
        return result
    }catch(error) {
        console.error(error)
    }
}



export const deleteUserRoutine = async({token, id}) => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const result = await response.json()
        console.log("Deleted results", result)
        return result
    }catch(error) {
        console.error(error)
    }
    
}

export const deleteActivityFromRoutine = async({token, id}) => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routine_activities/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const result = await response.json()
        console.log("Deleted Activity", result)
        return result
    }catch(error) {
        console.error(error)
    }
}

export const updateRoutine = async({id, token, name, goal}) => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                goal: goal,
                isPublic: true
            })
        })
        const result = await response.json()
        console.log("Updated result", result)
        return result
    }catch(error) {
        console.error(error)
    }
}

export const updateRoutineActivities = async({id, token, count, duration}) => {
    try {
        console.log(id, count, token, duration )
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routine_activities/${id}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                count: count,
                duration: duration
            })
        })
        const result = await response.json()
        console.log("Updated routineActivity result", result)
        return result
    }catch(error) {
        console.error(error)
        
    }
}

