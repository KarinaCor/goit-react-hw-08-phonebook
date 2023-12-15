import React from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { registerThunk } from "redux/auth/authOperation"
import * as SC from '../pages/RegisterPage.styled'

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
        <SC.Form  onSubmit={onSubmit}>
             <SC.Label>
            <SC.Text>Name:</SC.Text>
            <SC.Input type="text" placeholder="Ivan Ivanovich Ivanov" required name="userName" />
        </SC.Label>
        <SC.Label>
            <SC.Text>Email:</SC.Text>
            <SC.Input type="email" placeholder="hotmail@hotmail.com" required name="userEmail" />
        </SC.Label>
        <SC.Label>
            <SC.Text>Password:</SC.Text>
            <SC.Input type="password" placeholder="******" required name="userPassword" />

        </SC.Label>
        <br/>
        <SC.Button type="submit">
            Sign Up
        </SC.Button>
    </SC.Form >
    )
}

export default RegisterPage