import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login.svg';
import Button from '../Button/Button';
import Form from '../Form/Form';
import TextInput from '../Form/TextInput';

const SignIn = () => {
    return (
        <div>
            <h1>Login to your account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={loginImg} alt="login" />
                </div>
                <Form className={'login'}>
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <Button>
                        <span>Submit now</span>
                    </Button>
                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;
