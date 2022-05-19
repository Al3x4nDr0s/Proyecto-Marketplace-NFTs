export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
<<<<<<< HEAD
    if (user && user.token) {
        return {
            "authorization": user.token 
=======
    if (user && user.accessToken) {
        return {
            "authorization": user.accessToken 
>>>>>>> 3c90c9b9d97ba774e2d7c89976dca980014dd448
        }
    }
    return {};
}