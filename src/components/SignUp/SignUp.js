import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/images/signup.svg';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Form from '../Form/Form';
import TextInput from '../Form/TextInput';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();
    const { signup } = useAuth();

    // Form handler
    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("Passwords don't match");
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, userName);
            return navigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            return setError('Failed to create account');
        }
    }

    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={signUpImg} alt="Signup" />
                </div>
                {loading && <h4>Loading...</h4>}

                {!loading && (
                    <Form className={'signup'} onSubmit={handleSubmit}>
                        <TextInput
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter name"
                            icon="person"
                            required
                        />
                        <TextInput
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            icon="alternate_email"
                            required
                        />
                        <TextInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter password"
                            icon="lock"
                            required
                        />
                        <TextInput
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm password"
                            icon="lock_clock"
                            required
                        />
                        <Checkbox
                            value={agree}
                            onChange={(e) => setAgree(e.target.value)}
                            text="I agree to the Terms &amp; Conditions"
                            required
                        />
                        <Button type="submit">
                            <span>Submit now</span>
                        </Button>
                        {error && <p className="error">{error}</p>}
                        <div className="info">
                            Already have an account? <Link to="/signin">Login</Link>
                        </div>
                    </Form>
                )}
            </div>
        </>
    );
};

export default SignUp;
