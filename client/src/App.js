import React from 'react';
import './App.css';
import Nav from "./Components/Nav";
import ContactList from "./Components/ContactList";
import {Route} from "react-router-dom";
import CardContact from "./Components/CardContact"


function App() {
  return (
    <div className="App">
    <Nav />
    <Route path="/contact List" component={ContactList} />
    <CardContact />
    </div>
  );
}

export default App;
