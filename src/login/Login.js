import React, { useState } from 'react';
import { Button, Card, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

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

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn =  () => {
        firebase.auth().signInWithPopup(provider)
        .then(result =>{
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
            }
            setUser(signedInUser);
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
        if(newUser&& user.firstName&&user.lastName&&user.email&&user.password){
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
              });
        }

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(response => {
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
              });
        }

        e.preventDefault();
    };


    return (

        <div>
            <div>
                <h1>Name: {user.firstName} {user.lastName}</h1>
                <h1>Email: {user.email} </h1>
                <h1>Password: {user.password} </h1>
                {
                user.success && <p style={{color: 'green'}}> User {newUser?'Created':'Logged In'} Successfully</p>
                }
                {
                user.error && <p style={{color: 'red'}}> {user.error} </p>
                }

            </div>
            {/* {user.isSignedIn?
                <div>
                    <Button onClick={handleSignOut} variant="warning" block>Log Out</Button>
                </div>
                : */}
                <Card style={{width: '500px', padding: '25px', margin: '100px auto'}}>
                {
                newUser?
                <div>
                    <form>
                        <h3>Login</h3>
                        <br/>
                        <Form.Group>
                            <Form.Control type="email" placeholder = "Email"/>
                            <br/>
                            <Form.Control type="password" placeholder = "Password"/>
                            <br/>
                            <div className="d-flex justify-content-between">
                              <Form.Check type="checkbox" label="Remember Me" />
                              <Button variant="link" >Forgot Password</Button>
                            </div>
                        </Form.Group>
                        <Button onClick={handleSubmit} variant="warning" block>Login</Button>
                        <br/>
                        <div className="text-center">
                            <p>Don't have an account?<Button onClick={()=>setNewUser(!newUser)} variant="link">Create an account</Button></p>
                        </div>
                    </form>
                </div>
                :
                    <div>
                    <Form>
                        <h3>Create an account</h3>
                        <br/>
                        <Form.Group>
                            <Form.Control onBlur={handleBlur} name="firstName" type="text" placeholder = "First Name" required/>
                            <br/>
                            <Form.Control onBlur={handleBlur} name="lastName" type="text" placeholder = "Last Name" required/>
                            <br/>
                            <Form.Control onBlur={handleBlur} name="email" type="email" placeholder = "Email" required/>
                            <br/>
                            <Form.Control onBlur={handleBlur} name="password" type="password" placeholder = "Password" required/>
                            {/* <br/>
                            <Form.Control onBlur={handleBlur} name="" type="confirmPassword" placeholder = "Confirm Password" required/> */}
                        </Form.Group>
                            <Button onClick={handleSubmit} variant="warning" type="submit" block>Create an account</Button>
                            <br/>
                            <p className="text-center">Already have an account?<Button onClick={()=>setNewUser(!newUser)} variant="link">Login</Button></p>
                    </Form>
                </div>
                }
                <div className="text-center">
                    <hr/>
                    <p>Or</p>
                    <Button variant="info" block>Continue With Facebook</Button>
                    <br/>
                    <Button onClick={handleSignIn} variant="info" block>Continue With Google</Button>
                </div>
            </Card>
            {/* } */}
        </div>
    );
};

export default Login;

                