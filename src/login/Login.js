import React, { useContext, useState } from 'react';
import { Button, Card, Form} from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';
import {faGoogle, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        newUser: false,
        name: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        photo: '',
        success: '',
        error: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignedIn =  () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result =>{
           console.log(result);
        })
          .catch(error=>{
              console.log(error);
          });
    };

    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSignedIn = ()=>{
        firebase.auth().signInWithPopup(fbProvider)
        .then(result =>{
            console.log(result);
        })
          .catch(error=>{
              console.log(error);
          });
    };

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res=> {
            const signedOutUser = {
                isSignedIn: true,
                name: '',
                email: '',
                photo: '',
            }
            setUser(signedOutUser);
          })
          .catch(error=> {
            console.log(error);
          });
    };

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name==="email"){
            isFieldValid = /\S+@\S+\.+/.test(e.target.value);
        }
        if(e.target.name==="password"){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    };

    const handleSubmit = (e) => {
        if(newUser && user.firstName && user.lastName && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(response=>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
            })
            .catch(error=> {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                console.log(error.message);
              });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(response => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(error=> {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
        };

        e.preventDefault();
    };

    return (

        <div>
            <div>
                <p>Name: {user.firstName} {user.lastName}</p>
                <p>Email: {user.email} </p>
                <p>Password: {user.password} </p>
                <Button onClick={handleSignOut} variant="danger" block>Log Out</Button>
            </div>

            <Card style={{width: '500px', padding: '25px', margin: '100px auto'}}>
                <div>
                    <Form>
                        <h3>{!newUser?'Login':'Create an account'}</h3>
                        <br/>
                            {newUser&&<Form.Control className="mb-3" onBlur={handleBlur} name="firstName" type="text" placeholder = "First Name" required/>}
                            {newUser&&<Form.Control className="mb-3"  onBlur={handleBlur} name="lastName" type="text" placeholder = "Last Name" required/>}
                            <Form.Control className="mb-3"  onBlur={handleBlur} name="email" type="email" placeholder = "Email" required/>
                            <Form.Control className="mb-3"  onBlur={handleBlur} name="password" type="password" placeholder = "Password" required/>
                            {!newUser&&
                            <div className="d-flex justify-content-between">
                                <Form.Check type="checkbox" label="Remember Me" />
                                <Button variant="link" >Forgot Password</Button>
                            </div>}
                            <br/>
                            {<Button onClick={handleSubmit} type="submit" variant="warning" block>{!newUser?'Login':'Create an account'}</Button>}
                            <br/>
                            {!newUser&&
                            <div className="text-center">
                            <p>Don't have an account?<Button onClick={()=>setNewUser(!newUser)} variant="link">Create an account</Button></p>
                            </div>}
                            {newUser&&<p className="text-center">Already have an account?<Button onClick={()=>setNewUser(!newUser)} variant="link">Login</Button></p>}
                    </Form>
                            {user.success && <p className="text-center text-success"> User {newUser?'Created':'Logged In'} Successfully</p>}
                            {user.error && <p className="text-center text-danger"> {user.error} </p>}
                </div>
                <div className="text-center">
                    <hr/>
                    <p>Or</p>
                    <Button onClick={handleFbSignedIn} variant="light" block>
                        <FontAwesomeIcon className="mr-2 text-info" icon={faFacebook} />
                        Continue With Facebook
                    </Button>
                    <br/>
                    <Button onClick={handleGoogleSignedIn} variant="light" block>
                    <FontAwesomeIcon className="mr-2 text-info" icon={faGoogle} />
                        Continue With Google
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Login;

                