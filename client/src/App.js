import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//* Importing Components
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Upload from './components/Upload';
import Books from './components/Books';
import Videos from './components/Videos';


export default function App() {
   return (
      <Fragment>
         <Router>
            <NavBar />
            <Route path="/" exact component={Hero} />
            <Route path="/upload" component={Upload} />
            <Route path="/books" component={Books} />
            <Route path="/videos" component={Videos} />
         </Router>
      </Fragment>
   )
}
