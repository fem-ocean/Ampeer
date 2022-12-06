import { SIGN_IN, SIGN_OUT_REDUX } from "./userType"

 export const signOutRedux = () =>{
    return{
        type: SIGN_OUT_REDUX
    }
}

export const signIn = () =>{
    return{
        type: SIGN_IN
    }
}