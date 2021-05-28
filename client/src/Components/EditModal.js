import React,{useState} from 'react';
import {useDispatch} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import {editContacts} from "../Js/actions/contactActions";

const EditModal = ({contact}) => {
    const [name,setName]=useState("contact.name");
    const [email,setEmail]=useState("contact.email");
    const [tel,setTel]=useState("contact.tel");
    
    
    
    const [modal, setModal] = useState(false);
    const toggle = () => {
        
    setModal(!modal)
    setName(contact.name)
    setEmail(contact.email)
    setTel(contact.tel)}


    const dispatch= useDispatch()
    const editt=()=>{
        dispatch( editContacts(contact._id,{name,email,tel}))
        toggle()}

 

 

  return (
    <div>
      <Button color="danger" onClick={toggle}></Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
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
      
        </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={editt}>update</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;//lorsque on click sur bouton edit il faut que les champs soit accomplie.