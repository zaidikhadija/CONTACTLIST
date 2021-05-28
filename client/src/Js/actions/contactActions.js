import axios from "axios"; 
import {GET_CONTACTS} from "../constants/actionTypess";



//get
export const getContacts=()=>dispatch=>{
axios.get("http://localhost:5000/api/contacts/")
.then(res=>dispatch({type:GET_CONTACTS,payload:res.Data}))
.catch((err)=>console.log(err))
}



//post


export const addContacts=(newContact)=>dispatch=>{
    axios.post("http://localhost:5000/api/contacts/addnewcontact",newContact)
    .then(res=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
    }
    


//delete

export const deleteContacts=(idContact)=>dispatch=>{
    axios.delete("http://localhost:5000/api/contacts/deletecontact/"+idContact)
    .then(res=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
    }





//edit
export const editContacts=(idContact,editedContact)=>dispatch=>{

    axios.put("http://localhost:5000/api/contacts/contactedited/"+idContact,editedContact)
    .then(res=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
    }
