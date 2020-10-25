import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Upload from './components/Upload';

export default function App() {
   return (
      <Fragment>
         <Router>
            <NavBar />
            <Route path="/" exact component={Hero}/>
            <Route path="/upload" component={Upload}/>
         </Router>
      </Fragment>
   )
}