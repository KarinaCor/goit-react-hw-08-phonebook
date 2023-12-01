import React from 'react';
import { NavLink } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authOperation';
import { selectAuthenticated, selectUserData } from 'redux/auth/auth.selector';


const Layout = ({ children }) => {
    const dispatch = useDispatch();
    const authenticated = useSelector(selectAuthenticated);
    const userData = useSelector(selectUserData);

    const onLogOut = () => {
        dispatch(logOutThunk());
    }

    return (
        <div>
            <header>
                <NavLink to="/">Home</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                    <div>
                        <span>Hello, {userData.name}!</span>{' '}
                        <button onClick={onLogOut}>Log Out</button>
                    </div>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout