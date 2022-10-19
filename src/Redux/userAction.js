import { SIGN_IN, SIGN_OUT } from "./userType"

 export const signOut = () =>{
    return{
        type: SIGN_OUT
    }
}

export const signIn = () =>{
    return{
        type: SIGN_IN
    }
}