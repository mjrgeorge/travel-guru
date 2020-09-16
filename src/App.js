import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './home/Home';
import NotMatch from './notMatch/NotMatch';
import Book from './book/Book';
import Login from './login/Login';
import Room from './room/Room';
import PrivateRoute from './privateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <h1>Email: {loggedInUser.email}</h1>
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
          <PrivateRoute path = "/room">
            <Room/>
          </PrivateRoute>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "*">
            <NotMatch/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
