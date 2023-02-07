import { useEffect} from 'react';
import { nanoid } from 'nanoid';
import { ContactForm }  from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import {MainTitle, Title} from './App.styled';
import { useSelector, useDispatch} from 'react-redux';
import { addContact, delContact, getContacts } from '../redux/contactSlice';
import { filerContact, setFilter } from '../redux/filterSlice';


export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(setFilter);

 const handleSubmit = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }
 
  dispatch(addContact(contactsLists));
  };
  
  const handleChange = e => {
    const { value } = e.target;
    dispatch(filerContact(value));
  };

    const deleteContact = contactId => {
    dispatch(delContact(contactId));
};

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 
    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm 
         onSubmit={handleSubmit}
        />

        <Title>Contacts</Title>
        <Filter filter={filter} handleChange={handleChange}/>
        <ContactList contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
        />
      </div>
    )
  
};

export default App;