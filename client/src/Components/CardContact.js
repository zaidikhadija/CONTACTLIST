import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

    
    const CardContact=({contact})=>{
return(
  
  <div> 
<Card body>
<CardTitle tag="h5">{contact.name}</CardTitle>
<CardText>{contact.email}</CardText>
<CardText>{contact.tel}</CardText>
<CardText>{contact.dateOfCreation}</CardText>
<Button>edit</Button>
<Button>delete</Button>
</Card>
</div> 
  )}
  export default CardContact;
