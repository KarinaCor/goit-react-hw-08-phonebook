import ContactForm from "components/ContactForm/ContactForm"
import ContactList from "components/ContactList/ContactList"
import Filter from "components/Filter/Filter"
import Loader from "components/Loader/Loader"
import { Modal } from "components/Modal/Modal"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsLoading } from "redux/auth/auth.selector"
import { selectContacts } from "redux/contacts/contacts.selector"
import { fetchContactsThunk } from "redux/contacts/contactsOperation"
import { selecIsOpenModal } from "redux/modal/modal.selector"






const ContactsPage = () => {
    const dispatch = useDispatch();
    
    const contacts = useSelector(selectContacts)
    const isLoading = useSelector(selectIsLoading)
    const isOpenModal = useSelector(selecIsOpenModal)
    

    useEffect(() => {
dispatch(fetchContactsThunk())
    },[dispatch])

    // const addContact = (e) => {
    //     e.preventDefault()

    //     const name = e.currentTarget.elements.contactName.value;
    //     const number = e.currentTarget.elements.contactNumber.value;
    
    //     const formData = {
    //         name,
    //         number,
    //     }
    //     dispatch(addContactsThunk(formData))
    //     .unwrap()
    //     .then(() => e.target.reset())
    // }
    return (
      <>
      <ContactForm/>
      {contacts.length !== 0 && <Filter />}
      {isLoading ? <Loader /> : <ContactList />}
      {isOpenModal && <Modal/>}
      </>
      
    )
}

//     const onDeleteContact = contactId => {
// dispatch(deleteContactsThunk(contactId))
//     }

//     const showContacts = Array.isArray(contacts) && contacts.length > 0

//     return (
//         <div>
//              <form onSubmit={addContact}>
//                 <h2>Add New Contact</h2>
//             <label>
//                 <p>Name:</p>
//                 <input type="text" placeholder="Lacob Merer" required name="contactName" />
//             </label>
//             <label>
//                 <p>Number:</p>
//                 <input type="text" placeholder="761-23-96" required name="contactNumber" minLength={3}/>

//             </label>
//             <br/>
//             <button type="submit">
//                 Add
//             </button>
//         </form>
//           {error !== null && <p>{error}</p>}
//           {isLoading && <Loader/>}  
// <ul>
//     {showContacts && contacts.map(({id,name,number}) => {
//  <li key={id}>
//  <h3>
//     <span>{name}</span>
// <button disabled={isLoading} onClick={() => onDeleteContact(id)}></button>
//  </h3>
//  <p>{number}</p>
// </li>
//     })}
   
// </ul>
//         </div>
//     )
// }

export default ContactsPage