export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
        return {
            "authorization": user.token 
        }
    }
    return {};
}