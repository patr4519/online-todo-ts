export const getUserFromLS = () => {
    const data = localStorage.getItem("reduxState");
    
    if (data) {
        return JSON.parse(data).curUser;
    } else {
        return []
    }
}