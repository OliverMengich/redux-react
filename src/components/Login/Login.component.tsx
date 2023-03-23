import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../features/user';
function LoginComponent() {
    const dispatch = useDispatch();
    function handleOnClick(){
        dispatch(login({name:'Leon Goretzka',age: 6, email: 'leon@gmail.com'}))
    }
    function handleLogOut(){
        dispatch(logout())
    }
    return (
        <div>
            <button onClick={handleOnClick} >Login</button>
            <button onClick={handleLogOut} >Logout</button>
        </div>
    );
}

export default LoginComponent;