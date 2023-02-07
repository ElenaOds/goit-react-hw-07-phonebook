import { List, ListItem, Button } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  
   <List>
      {contacts.map((contact, id) => (
        <ListItem key={id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
);