import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './features/user';
const store =()=> (configureStore({
  reducer: {
    // a reducer is a function that takes in a state and an action and returns a new state
    user: userReducer
  },
}));
export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>
//store is a global state management tool
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store()}>
      <App />
    </Provider>
  </React.StrictMode>,
)
