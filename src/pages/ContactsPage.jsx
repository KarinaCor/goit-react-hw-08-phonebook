import ContactForm from "components/ContactForm/ContactForm"
import ContactList from "components/ContactList/ContactList"
import Filter from "components/Filter/Filter"
import Loader from "components/Loader/Loader"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsLoading } from "redux/auth/auth.selector"
import { selectContacts } from "redux/contacts/contacts.selector"
import { fetchContactsThunk } from "redux/contacts/contactsOperation"







const ContactsPage = () => {
    const dispatch = useDispatch();
    
    const contacts = useSelector(selectContacts)
    const isLoading = useSelector(selectIsLoading)
    
    

    useEffect(() => {
dispatch(fetchContactsThunk())
    },[dispatch])

    return (
      <>
      <ContactForm/>
      {contacts.length !== 0 && <Filter />}
      {isLoading ? <Loader /> : <ContactList />}
    
      </>
      
    )
}


export default ContactsPage