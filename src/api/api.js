const BASEURL = "https://fitnesstrac-kr.herokuapp.com/api";

const registerUser = async({username, password}) => {
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



const loginUser = async({username, password}) => {

}

const getAllActivities = async() => {

}






