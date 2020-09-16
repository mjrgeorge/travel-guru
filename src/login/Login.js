import React, { useState } from 'react';
import { Button, Card, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
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
    }

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
    }


    return (

        <div>
            <h1>Name: {user.name} </h1>
            {user.isSignedIn?
                <div>
                    <Button onClick={handleSignOut} variant="warning" block>Log Out</Button>
                </div>
                :
                <Card style={{width: '500px', padding: '25px', margin: '100px auto'}}>
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
                              <Form.Check type="checkbox" label="Remember Me" /><Link to="">Forgot Password</Link>
                            </div>
                        </Form.Group>
                        <Button variant="warning" block>Login</Button>
                        <br/>
                        <div className="d-flex justify-content-center">
                            <p className="pr-2">Don't have an account?</p> <Link to="">Create an account</Link>
                        </div>
                    </form>
                </div>
                <div>
                    <Form>
                        <h3>Create an account</h3>
                        <br/>
                        <Form.Group>
                            <Form.Control type="text" placeholder = "First Name"/>
                            <br/>
                            <Form.Control type="text" placeholder = "Last Name"/>
                            <br/>
                            <Form.Control type="email" placeholder = "Email"/>
                            <br/>
                            <Form.Control type="password" placeholder = "Password"/>
                            <br/>
                            <Form.Control type="password" placeholder = "Confirm Password"/>
                        </Form.Group>
                            <Button variant="warning" type="submit" block>Create an account</Button>
                            <br/>
                            <p className="text-center">Already have an account? <Link to="">Login</Link> </p>
                    </Form>
                </div>
                <div className="text-center">
                    <hr/>
                    <p>Or</p>
                    <Button variant="info" block>Continue With Facebook</Button>
                    <br/>
                    <Button onClick={handleSignIn} variant="info" block>Continue With Google</Button>
                </div>
            </Card>
            }
        </div>
    );
};

export default Login;

                