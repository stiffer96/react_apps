import {SEARCH_USERS, GET_USER,ALL_USERS} from './../Type';

export default (state,action) =>{
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                user:action.payload
            }
        case SEARCH_USERS:
            return {
                ...state,
                users:action.payload
            }
            case ALL_USERS:
            return {
                ...state,
                users:action.payload
            }
        default: return state
    }
}