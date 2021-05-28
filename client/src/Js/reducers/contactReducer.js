import{GET_CONTACTS} from "../constants/actionTypess";

const initState={
    contacts:[]
}

const ContactReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_CONTACTS:return {
            ...state,contacts:action.payload.users
        }
        default:return state



    }

}
export default ContactReducer;