import '../index.css';
import { Component } from 'react';
import '../components/stylesApp.css';
import Contacts from './Contacts';

import { nanoid } from 'nanoid';
import FindContacts from './FindContacts';
import ListContact from './ListContact';


const CONTACTS_ON_LOCAL_STORAGE_KEY = "CONTACTS";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };


   componentDidMount() {
    const persistedContacts = localStorage.getItem(CONTACTS_ON_LOCAL_STORAGE_KEY);
    if (persistedContacts) {
      this.setState({ contacts: JSON.parse(persistedContacts) });
    }
  }


  handleDeleteContact = (id) => {
    const updateContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updateContacts },
      
      () => {
        localStorage.setItem(
          CONTACTS_ON_LOCAL_STORAGE_KEY,
          JSON.stringify(updateContacts)
        );
      });




  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumbersChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('please enter a name.');
      return;
    }

  

    //verificar si el nombre ya existe
    const isNameDuplicate = contacts.some(contact => contact.name === name);

    if (isNameDuplicate) {
       alert('this name already exist');
      return;
    }
   
  //genero un identificador unico con nanoid:
    const id = nanoid();

  
    this.setState({
      contacts: [...contacts, { id, name, number }],

      name: '',
      number: '',
    },
    
          () => {
        localStorage.setItem(
          CONTACTS_ON_LOCAL_STORAGE_KEY,
          JSON.stringify(this.state.contacts)
        );
      }
    );
    };
      

  render() {
    const { contacts, name, number, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <div style={{ marginLeft: '20px' }}>
          <h1 className="phonebook.title">Phonebook</h1>

          <div className="form-container">
            <h4 className="input-name">Name</h4>

            <Contacts
              handleSubmit={this.handleSubmit}
              handleNameChange={this.handleNameChange}
              handleNumbersChange={this.handleNumbersChange}
              value={name}
              value2={number}
            />
          </div>

          <h3>Contacts</h3>
          <FindContacts handleFilterChange={this.handleFilterChange} />

          <ListContact contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
        </div>
      </>
    );
  }
}

export default App;
