import { useDispatch, useSelector } from 'react-redux';
import * as SC from '../ContactList/ContactList.styled';


import { deleteContactsThunk } from 'redux/contacts/contactsOperation';
import { selectContacts, selectContactsIsLoading } from 'redux/contacts/contacts.selector';
import { selectContactsFilter } from 'redux/filter/filter.selector';





const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);



  const getFilteredContact = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
console.log ('filter', filter)
console.log ('contacts', contacts)

  return (
    
  

    <SC.List>
    {!isLoading && getFilteredContact?.map(({ id, name, phone }) => (
      <SC.Item key={id}>
        {name}: {phone}
        
        <SC.Button onClick={() => dispatch(deleteContactsThunk(id))}> 
          Delete
        </SC.Button> 
      </SC.Item>
    ))}
  </SC.List>
  );
};

export default ContactList;
