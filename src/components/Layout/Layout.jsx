import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as SC from '../Layout/Layout.styled'


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
          
            <SC.Header>
                <SC.Link to="/">Home</SC.Link>
                    {authenticated &&  <div>
                        <span>Hello, {userData.name}!</span>{' '}
                        <SC.Button onClick={onLogOut}>Log Out</SC.Button>
                    </div>}
                   
                    <SC.Link to="/login">Login</SC.Link>
                    <SC.Link to="/register">Register</SC.Link>
                    <SC.Link to="/contacts">Contacts</SC.Link>
                    <Suspense fallback = {null}>
                        <Outlet />
                    </Suspense>
            </SC.Header>
            <main>{children}</main>
        </div>
    );
};

export default Layout

