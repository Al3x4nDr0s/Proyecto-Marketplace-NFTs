import axios from "axios";

const login = (email, password) => {
    return axios.post("http://localhost:4000/auth", {
        email,
        password
    }).then((response) => {
        console.log(response.data)
        if (response.data.token) {
            localStorage.setItem("token", JSON.stringify(response.data.token));
        };
        return response.data
    }).catch((error) => {
        console.log(error);
    })
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