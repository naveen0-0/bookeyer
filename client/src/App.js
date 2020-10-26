import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Upload from './components/Upload';
import SignUp from './components/SignUp';
import Login from './components/Login';

export default function App() {
   return (
      <Fragment>
         <Router>
            <NavBar />
            <Route path="/" exact component={Hero}/>
            <Route path="/upload" component={Upload}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
         </Router>
      </Fragment>
   )
}