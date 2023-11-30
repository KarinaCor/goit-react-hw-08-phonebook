import { useEffect } from "react"
import { useSelector } from "react-redux"
import { selectIsLoading } from "redux/auth/auth.selector"
import { selectContacts, selectContactsError } from "redux/contacts/contacts.selector"
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from "redux/contacts/contactsOperation"





const ContactsPage = () => {
    dispatch = useDispatch()
    const contacts = useSelector(selectContacts)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectContactsError)

    useEffect(() => {
dispatch(fetchContactsThunk())
    },[dispatch])

    const addContact = (e) => {
        e.preventDefault()

        const name = e.currentTarget.elements.contactName.value;
        const number = e.currentTarget.elements.contactNumber.value;
    
        const formData = {
            name,
            number,
        }
        dispatch(addContactsThunk(formData))
        .unwrap()
        .then(() => e.target.reset())
    }

    const onDeleteContact = (contactId) => {
dispatch(deleteContactsThunk(contactId))
    }

    const showContacts = Array.isArray(contacts) && contacts.length > 0

    return (
        <div>ContactsPage
             <form onSubmit={addContact}>
                <h2>Add New Contact</h2>
            <label>
                <p>Name:</p>
                <input type="text" placeholder="Lacob Merer" required name="contactName" />
            </label>
            <label>
                <p>Number:</p>
                <input type="text" placeholder="761-23-96" required name="contactNumber" minLength={3}/>

            </label>
            <br/>
            <button onClick={() => onDeleteContact(id)}>
                Add
            </button>
        </form>
          {error !== null && <p>{error}</p>}
          {isLoading && <Loader/>}  
<ul>
    {showContacts && contacts.map(({id,name,number}) => {
 <li key={id}>
 <h3>
    <span>{name}</span>
<button></button>
 </h3>
 <p>{number}</p>
</li>
    })}
   
</ul>
        </div>
    )
}

export default ContactsPage