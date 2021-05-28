//la récupurtaion des champs ce fait on trois etape 1-state local,2-value,3-onchange 
import React,{useState} from 'react';
import {useDispatch} from 'react';
import { Button,Form, FormGroup, Label, Input} from 'reactstrap';
import {addContacts} from "../Js/actions/contactActions";

export const AddContact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [tel,setTel]=useState("");
    const dispatch= useDispatch()
    const addd=()=>{
        dispatch(addContacts({name,email,tel}))}

   
    return (
        <div>
             <Form>
      <FormGroup>
        <Label for="exampleEmail">Name</Label>
        <Input 
        value={name}
        
        onChange={e=>setName(e.target.value)}
        type="text" 
        name="name" 
        id="exampleEmail"
         placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
        value={email}
        
        onChange={e=>setEmail(e.target.value)}
         type="text"
         name="email" 
         id="exampleEmail" 
         placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">tel</Label>
        <Input value={tel}
        onChange={e=>setTel(e.target.value)}
        type="text"
         name="email"
          id="exampleEmail" 
          placeholder="with a placeholder" />
      </FormGroup>

      </Form>
      <Button onClick={addd}>AddContact</Button>
        </div>
    )
}
