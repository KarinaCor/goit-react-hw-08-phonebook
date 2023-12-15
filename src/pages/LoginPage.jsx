import React from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { loginThunk } from "redux/auth/authOperation"
import * as SC from '../pages/LoginPage.styled'

const LoginPage = () => {
    const dispatch = useDispatch()

const onSubmit = e => {
    e.preventDefault()

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
        email,
        password,
        
    }

    dispatch(loginThunk(formData))
    .unwrap()
    .catch(() =>
      toast.error('Incorrect e-mail address or password. Try again.')
    );
}

    return (
        <SC.Form onSubmit={onSubmit}>
            <SC.Label>
                <SC.Text>Email:</SC.Text>
                <SC.Input type="email" placeholder="hotmail@hotmail.com" required name="userEmail" />
            </SC.Label>
            <SC.Label>
                <SC.Text>Password:</SC.Text>
                <SC.Input type="password" placeholder="******" required name="userPassword" minLength={7}/>

            </SC.Label>
            <br/>
            <SC.Button type="submit">
                Sign In
            </SC.Button>
        </SC.Form>
    )
}

export default LoginPage