import { ContactForm }  from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import * as React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {MainTitle, Title} from './App.styled';
import { useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { useFetchContactsQuery, useDeleteContactMutation } from '../redux/contactSlice';
import {Loader} from './Loader/Loader';

export const App = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, {isLoading}] = useDeleteContactMutation();
  const filter = useSelector(setFilter);

    const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return filterContactsList;
  };
  return (
  <div>
    <MainTitle>Phonebook</MainTitle>
    <ContactForm />
    <Title>Contacts</Title>
    <Filter />
    {isFetching && <Loader/>}
    {contacts && <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} loading={isLoading}/>}
    <ToastContainer autoClose={3000} theme="colored"/>
    </div>
  )
};
