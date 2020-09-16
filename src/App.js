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
import Book from './book/Book';
import Login from './login/Login';
import Room from './room/Room';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/home">
          <Home/>
        </Route>
        <Route path = "/book">
          <Book/>
        </Route>
        <Route path = "/login">
          <Login/>
        </Route>
        <Route path = "/room">
          <Room/>
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
