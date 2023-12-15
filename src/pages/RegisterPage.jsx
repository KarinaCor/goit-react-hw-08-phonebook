import React from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { registerThunk } from "redux/auth/authOperation"

const RegisterPage = () => {
    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()
    
        const name = e.currentTarget.elements.userName.value;
        const email = e.currentTarget.elements.userEmail.value;
        const password = e.currentTarget.elements.userPassword.value;
        

        const formData = {
            name,
            email,
            password,
            
        }
        dispatch(registerThunk(formData))
        .unwrap()
        .catch(() =>
          toast.error('Incorrect e-mail address or password. Try again.')
        );
    }

   
   

    
    return (
        <form onSubmit={onSubmit}>
             <label>
            <p>Name:</p>
            <input type="text" placeholder="Ivan Ivanovich Ivanov" required name="userName" />
        </label>
        <label>
            <p>Email:</p>
            <input type="email" placeholder="hotmail@hotmail.com" required name="userEmail" />
        </label>
        <label>
            <p>Password:</p>
            <input type="password" placeholder="******" required name="userPassword" />

        </label>
        <br/>
        <button type="submit">
            Sign Up
        </button>
    </form>
    )
}

export default RegisterPage