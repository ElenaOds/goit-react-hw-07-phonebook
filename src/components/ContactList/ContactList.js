import { List, ListItem, Button } from './ContactList.styled';


export const ContactList = ({ contacts, onDeleteContact, loading }) => {
 return <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.phone}
          <Button onClick={() => onDeleteContact(contact.id)}>
           Delete</Button>
        </ListItem>
      ))}
    </List>
 
};
