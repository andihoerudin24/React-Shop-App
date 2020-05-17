import { AUTHENTICATE, SET_DID_TRY_AL, LOGOUT } from "../actions/auht"

const intitalState = {
    token:null,
    userId:null,
    didTryAutoLogin:false
}

export default (state = intitalState , action) =>{
    switch(action.type){
        case AUTHENTICATE:
            return{
                token:action.token,
                userId:action.userId,
                didTryAutoLogin:true
            }
        case SET_DID_TRY_AL:
             return{
                 ...state,
                 didTryAutoLogin:true
             }
        case LOGOUT:
            return {
                ...intitalState,
                didTryAutoLogin:true
            }
            default:
                return state
    }

}