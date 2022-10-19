import { SIGN_OUT, SIGN_IN } from "./userType"

const initialState = {
    loggedIn: false,
}

const userReducer = (state=initialState, action) =>{
    switch(action.type){
        case SIGN_OUT: return{
            ...state,
            loggedIn: false
        }

        case SIGN_IN: return{
            ...state,
            loggedIn: true
        }

        default: return state
    }
}

export default userReducer;