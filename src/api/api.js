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
        console.log("nah", result)
        return result
    }catch(error) {
        console.error(error)
    }
}

const getUser = async() => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/users/me`)
        const result = await response.json()
        console.log("results from users", result)
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

const createRoutine = async({token, name, goal}) => {
    try{
        const response = await fetch(`${BASEURL}/routines`, {
            method: "POST",
            headers: {
                'Content-type': 'Application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                goal: goal
            })
        })
        const result = await response.json()
        return result
    }catch(error) {
        console.error(error)
    }
}

