import React ,{useEffect } from "react";
import {useDispatch , useSelector } from "react-redux";
import {getContacts} from "../Js/actions/contactActions";
import CardContact from "./CardContact";


const ContactList =()=>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts)},[])
        const contacts=useSelector(state=>state.contacts)
        return (
            <div>
{
        contacts.map(contact=> <CardContact key ={contact._id} contact={contact} />)
}
            </div>
        )
}
        export default ContactList;