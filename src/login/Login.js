import React from 'react';
import { Button, Card, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Card style={{width: '500px', padding: '25px', margin: '100px auto'}}>
                <Form>
                    <h3>Login</h3>
                    <h3>Create an account</h3>
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
                        <br/>
                        <div className="d-flex justify-content-between">
                            <Form.Check type="checkbox" label="Remember Me" /><Link>Forgot Password</Link>
                        </div>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="warning" type="submit" block>Login</Button>
                        <Button variant="warning" type="submit" block>Create an account</Button>
                        <br/>
                        <p>Don't have an account? <Link>Create an account</Link> </p>
                        <br/>
                        <p>Already have an account? <Link>Login</Link> </p>
                        <hr/>
                        <p>Or</p>
                        <Button variant="info" block>Continue With Facebook</Button>
                        <br/>
                        <Button variant="info" block>Continue With Google</Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default Login;