import React, { Fragment } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hero from './components/Hero';

export default function App() {
   return (
      <Fragment>
         <Router>
            <NavBar />
            <Hero/>
         </Router>
      </Fragment>
   )
}