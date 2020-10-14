import React from 'react';
import './App.css';

// components

import Main from './domain/main'
import SinglePost from './domain/singlePost'
import PageNotFound from './domain/404'

//router

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"




function App() {

  return (
    <div className="app">
     
    <Router>
      <Switch>

       <Route exact path="/" component={Main} />
       <Route exact path="/:slug/:id" component={SinglePost} />
       <Route  component={PageNotFound} />


      </Switch>
    </Router>
    

    </div>
  );
}

export default App;



