import { useAddContactMutation, useFetchContactsQuery } from '../../redux/contactSlice';
import { useState } from 'react';
import {Form, Label, Input, Button} from './ContactForm.styled';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';

export const ContactForm = () => {
    const [addContact, {isLoading}] = useAddContactMutation();
    const { data } = useFetchContactsQuery();
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

    const handleSubmit = async e => {
              e.preventDefault(); 
              const contact = {
                name,
                phone: number,
              };

              const existingContact  = data.find(
                contact => contact.name === name || contact.phone === number
              );
            try {
                if(existingContact) {
                    toast.error(`${name} is already in contacts.`);
                    return
                  }
                await addContact (contact);
                reset();  
              } catch (error) {
                console.log("error")
              }
            };

            const reset = () => {
                      setName('');
                      setNumber('');
                    };

    return(
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
          <Button type="submit" disables={isLoading}>
            {isLoading && <Loader/>}
            Add contact
          </Button>
        </Form>
    )
}
