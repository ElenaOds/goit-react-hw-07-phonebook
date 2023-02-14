import { List, ListItem, Button } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

export const ContactList = ({contacts}) => {
   const dispatch = useDispatch();

return (
   <List>
  {contacts.map((contact, id) => (
 <ListItem key={id}>
   {contact.name}: {contact.phone}
   <Button onClick={() => dispatch(contactsOperations.deleteContact(contact.id))}>
    Delete</Button>
 </ListItem>
))}
</List>
)
}
