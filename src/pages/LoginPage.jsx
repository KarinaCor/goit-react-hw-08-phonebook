import React from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { loginThunk } from "redux/auth/authOperation"

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
        <form onSubmit={onSubmit}>
            <label>
                <p>Email:</p>
                <input type="email" placeholder="hotmail@hotmail.com" required name="userEmail" />
            </label>
            <label>
                <p>Password:</p>
                <input type="password" placeholder="******" required name="userPassword" minLength={7}/>

            </label>
            <br/>
            <button type="submit">
                Sign In
            </button>
        </form>
    )
}

export default LoginPage