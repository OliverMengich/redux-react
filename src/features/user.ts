import { createSlice } from '@reduxjs/toolkit';
type INITIAL_STATE_TYPE = {
    value:{
        name: string,
        email: string,
        age: number,
        phone: string,
        address: string,
        city: string,
        state: string,
        zip: string,
        country: string,
        cardNumber: string,
        cardName: string,
        cardExpiry: string,
        cardCvv: string,
    }
}
const INITIAL_STATE: INITIAL_STATE_TYPE = {
    value:{
        name: '',
        email: '',
        phone: '',
        age: 0,
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        cardNumber: '',
        cardName: '',
        cardExpiry: '',
        cardCvv: '',
    }
}
export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers:{
        login(state,action){
            state.value={
                ...state.value,
                ...action.payload
            }
        },
        logout(state){
            state.value= INITIAL_STATE.value
        }
    },
    
});
export const {login, logout} = userSlice.actions;
//export reducer to access it
export default userSlice.reducer;
