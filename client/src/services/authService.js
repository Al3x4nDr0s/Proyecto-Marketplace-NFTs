import axios from "axios";

const login = (email, password) => {
    return axios.post("http://localhost:4000/user/auth", {
        email,
        password
    }).then((response) => {
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data))
        };
        return response.data
    });
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