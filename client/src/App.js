import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import './App.css';

//* Importing Components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Upload from './components/Upload';
import SignUp from './components/SignUp';
import Login from './components/Login';
import User from './components/User';
import Books from './components/Books';


export default function App() {

   const dispatch = useDispatch();

   const GETUSER = async () => {
      let { data } = await Axios.get('/getuser');
      dispatch({ type: "UPDATE_USER", payload: data })
   }

   useEffect(() => {
      GETUSER();
   }, [GETUSER])

   return (
      <Fragment>
         <Router>
            <NavBar />
            <Route path="/" exact component={Hero} />
            <Route path="/upload" component={Upload} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
            <Route path="/books" component={Books} />
         </Router>
      </Fragment>
   )
}
