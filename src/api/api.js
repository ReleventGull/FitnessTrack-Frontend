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

export const createActivity = async({token, name, description}) => {
try {
    console.log("Data here", name, description, token)
const response = await fetch(`${BASEURL}/activities`, {
    method: "POST",
    headers: {
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name:name,
      description:description
    })

})
const result = await response.json()
console.log(result)
return result
}catch(error) {
    console.error(error)
}
}