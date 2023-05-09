import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './App.styled';
import { nanoid } from 'nanoid';


export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
   
    if (this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${contact.name} is already in contacts.`)
    } else {
      this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }))
    }
  
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase))
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };


 onChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
  };


  render(){
    const { filter } = this.state;
  
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact } />

        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.onChangeFilter} />
        
        <ContactList
          contacts={this.getContacts}
          onDeleteContact={this.deleteContact} />  
      
      </Container>
    )
  };
}
