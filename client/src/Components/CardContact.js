import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {deleteContacts} from "../Js/actions/contactActions";
import {useDispatch} from 'react';
import EditModal from "./EditModal"
    
    const CardContact=({contact})=>{
     
      const dispatch= useDispatch()
      const deleteee=()=>{
          dispatch(deleteContacts(contact._id))}
  
      
return(
  
  <div style={{minWidth:"400px",margin:"20px"}}> 
<Card body>
<CardTitle tag="h5">{contact.name}</CardTitle>
<CardText>{contact.email}</CardText>
<CardText>{contact.tel}</CardText>
<CardText>{contact.dateOfCreation}</CardText>

<div style={{display:"flex",justifyContent:"space-around"}}>
<Button onClick={deleteee}color="warning">delete </Button>
<EditModal contact={contact}/>
</div>
</Card>
</div> 
  )}
  export default CardContact;
