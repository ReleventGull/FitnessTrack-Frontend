const BASEURL = "https://fitnesstrac-kr.herokuapp.com/api";

const registerUser = async({username, password}) => {

}

const loginUser = async({username, password}) => {

}

const getAllActivities = async() => {
    try {
        const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities`)
        const result = await response.json()
        return result
    }catch(error) {
        console.error(error)
    }
}

