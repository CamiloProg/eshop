import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom' ;
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import '../styles/global.css';
import Home from '../pages/Home';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';


function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter basename='/reactPractico'>
    <Layout>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/recovery-password" element={<RecoveryPassword/>} />
          <Route exact path="/send-email" element={<SendEmail/>} />
          <Route exact path="/new-password" element={<NewPassword/>} />
          <Route exact path="/account" element={<MyAccount/>} />
          <Route exact path="/signup" element={<CreateAccount/>} />
          <Route exact path="/checkout" element={<Checkout/>} />
          <Route exact path="/orders" element={<Orders/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
