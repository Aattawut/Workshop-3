import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Navbar from './layouts/navbar.js';

function AddPersonForm() {
  const [ person, setPerson ] = useState("");
  const [ listItems, setlistItems ] = useState([]);
    
   function handleChange(e) {
    setPerson(e.target.value);
  }
  function handleSubmit(e) {
    handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }
  
  function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data);
  
    function addPerson(name) {
      setContacts([...contacts, name]);
    }
  
    // return (
    //   <div>
    //     <AddPersonForm handleSubmit={addPerson} />
    //     <PeopleList data={contacts} />
    //   </div>
    // );
  }
  

  return (
    <div>
      <Navbar/>
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  
    </div>
  )
   
}


export default AddPersonForm;
