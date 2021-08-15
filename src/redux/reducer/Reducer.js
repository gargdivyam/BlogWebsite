const initialState={
    user: null || JSON.parse(localStorage.getItem("user"))
    // user: null
};

const Reducer = (state= initialState, action) =>{
    console.log("initial state is", state)
    switch(action.type){
        case "LOGIN":
            return{
                user: action.payload
            }
        case "LOGOUT":
            return{
                user: null
            }
        default:
            return state;
    }
};
export default Reducer;