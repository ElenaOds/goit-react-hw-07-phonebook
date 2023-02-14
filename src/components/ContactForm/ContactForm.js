import { useState } from 'react';
import {Form, Label, Input, Button} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

  export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
 
    const handleChange = e => {
      const { name, value } = e.target;
      
      switch (name) {
        case 'name':
          setName(value);
          break;

        case 'number':
          setNumber(value);
          break;

          default:
            return;
      }
    };
    
    const handleSubmit = e => {
      e.preventDefault(); 
      const newContact = { 
        name, 
        phone: number,
      };
      const existingContact  = contacts.find(
        contact => contact.name === name || contact.phone === number
      );
      if(existingContact) {
        alert(`${name} is already in contacts.`);
        return;
      } else {
      dispatch(contactsOperations.addContact(newContact));
      reset();  
    } 
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
      return (
        <Form onSubmit={handleSubmit}>
          <Label> Name </Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
          <Label>Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            value={number}
            onChange={handleChange}
          />
          <Button type="submit">
            Add contact
          </Button>
        </Form>
      );
  };
  
