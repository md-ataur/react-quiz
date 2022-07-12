import React from 'react';
import { Link } from 'react-router-dom';
import signUpImg from '../../assets/images/signup.svg';
import Button from '../Button/Button';
import Checkbox from '../Form/Checkbox';
import Form from '../Form/Form';
import TextInput from '../Form/TextInput';

const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={signUpImg} alt="Signup" />
                </div>
                <Form className={'signup'}>
                    <TextInput type="text" placeholder="Enter name" icon="person" />
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms &amp; Conditions" />
                    <Button>Submit now</Button>
                    <div className="info">
                        Already have an account? <Link to="/signin">Login</Link>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default SignUp;
