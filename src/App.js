import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import Coxbazar from './components/coxbazar/Coxbazar';
import Login from './components/login/Login';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Room from './components/room/Room';
import NotMatch from './components/notMatch/NotMatch';
import Sundarban from './components/sundarban/Sundarban';
import Sreemangal from './components/sreemangal/Sreemangal';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>Email: {loggedInUser.email} </h1>
      <Router>
        <Switch>
          <Route path = "/home">
            <Home/>
          </Route>
          <Route path = "/coxbazar">
            <Coxbazar/>
          </Route>
          <Route path = "/sreemangal">
            <Sreemangal/>
          </Route>
          <Route path = "/sundarban">
            <Sundarban/>
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
