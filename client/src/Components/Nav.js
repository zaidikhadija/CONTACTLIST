import React from 'react';
import { Button } from 'reactstrap';
import {Link } from 'react-router-dom';
const Nav=()=>{
return(
    <div>

< Link to='/'>  <Button color="danger">Home</Button></Link>
< Link to='/ContactList'> <Button color="success">Contact List</Button></Link>
< Link to='/addcontact'> <Button color="primary">add contact</Button></Link>
    </div>
)
}
export default Nav;