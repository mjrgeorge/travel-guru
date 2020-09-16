import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home/Home';
import NotMatch from './notMatch/NotMatch';
import Header from './header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path = "/home">
          <Home/>
        </Route>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "*">
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
