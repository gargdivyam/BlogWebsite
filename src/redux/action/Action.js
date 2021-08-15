export const storeUser = (user) =>{
    return{
        type: "LOGIN",
        payload: user
    }
}
export const removeUser = () =>{
    return{
        type: "LOGOUT"
    }
}