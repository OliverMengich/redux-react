import React from 'react';
import { useSelector } from 'react-redux'
import { AppState } from '../../main';
function ProfileComponent() {
    //specify 
    const user = useSelector((state: AppState)=> state.user.value)
    return (
        <div>
            <h1>Profile Page</h1>
            <ul>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>
                <li>Email: {user.email}</li>
                <li>phone: { user.phone }</li>
                <li>address: {user.phone}</li>
                <li>city: {user.city} </li>
                <li>state: {user.state}  </li>
                <li>zip: {user.zip} </li>
                <li>country: {user.zip}</li>
                <li>cardNumber: {user.zip} </li>
                <li>cardName: {user.cardName} </li>
                <li>cardExpiry: {user.cardExpiry} </li>
                <li>cardExpiry: {user.cardExpiry} </li>
                <li>cardCvv:  </li>
            </ul>
        </div>
    );
}

export default ProfileComponent;