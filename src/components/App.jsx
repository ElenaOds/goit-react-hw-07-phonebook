import { useEffect} from 'react';
import { ContactForm }  from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { MainTitle, Title } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';
import { filerContact } from '../redux/filterSlice';



export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.setFilter);
  

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

 
  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });
  
    return filterContactsList;
  };

  
  const handleChange = e => {
    const { value } = e.target;
    dispatch(filerContact(value));
  };


    return (
      <div>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter filter={filter} handleChange={handleChange}/>
        {contacts.length > 0 && (
          <ContactList  contacts={getFilteredContacts()}/>
        )}
        
      </div>
    )
  
};

export default App;