import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';


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
                    {authenticated &&  <div>
                        <span>Hello, {userData.name}!</span>{' '}
                        <button onClick={onLogOut}>Log Out</button>
                    </div>}
                   
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                    <Suspense fallback = {null}>
                        <Outlet />
                    </Suspense>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout