import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
import ContactList from "./Components/ContactList";
import {Route} from "react-router-dom";
import { AddContact } from './Components/AddContact';


function App() {
  return (
    <div className="App">
    <Nav />
    <Route path="/contact List" component={ContactList} />
    
    <Route path="/addcontact" component={AddContact} />
    
    </div>
  );
}

export default App;
