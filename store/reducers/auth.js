import { AUTHENTICATE } from "../actions/auht"

const intitalState = {
    token:null,
    userId:null,
}

export default (state = intitalState , action) =>{
    switch(action.type){
        case AUTHENTICATE:
            return{
                token:action.token,
                userId:action.userId
            }
        // case SIGNUP:
        //     return{
        //         token:action.token,
        //         userId:action.userId
        //     }
            default:
                return state
    }

}