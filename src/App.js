import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Iphone from './components/Iphone'
import Traveling from './components/Traveling';
import Nav from './components/Nav'
const App = ()=> {
  return (
    <>
    <Nav/> 
    <Switch>
      
      <Route exact path = '/'>
        <Home/>
      </Route>
      <Route exact path = '/Iphone'>
        <Iphone/>
      </Route>
      <Route>
        <Traveling/>
      </Route>
    
    </Switch>
    </>
  );
}

export default App;
