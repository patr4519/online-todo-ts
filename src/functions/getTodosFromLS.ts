export const getTodosFromLS = () => {
    const data = localStorage.getItem("reduxState");
    
    if (data) {
        return JSON.parse(data).todos;
    } else {
        return []
    }
}