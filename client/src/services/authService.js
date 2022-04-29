import axios from "axios";

const login = async (email, password) => {
    try {
        const authLogin = await axios.post("http://localhost:4000/auth", {
            email,
            password
        })
        const loginData = await authLogin.data
        const loginToken = await authLogin.data.token
        if(loginToken) {
            localStorage.setItem("token", JSON.stringify(loginData))
        }
        return loginData
    } catch (error) {
        console.log("no se pudo autenticar", error)
    }
    // return axios.post("http://localhost:4000/user/auth", {
    //     email,
    //     password
    // }).then((response) => {
    //     if (response.data.token) {
    //         localStorage.setItem("user", JSON.stringify(response.data))
    //     };
    //     return response.data
    // }).catch(error => {
    //     console.log(error, "erro")
    // })
};

const logut = () => {
    localStorage.removeItem("user");
};

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


const authService = {
    login,
    logut,
    getUser
};

export default authService;