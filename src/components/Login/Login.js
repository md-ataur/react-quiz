import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login.svg';
import { useAuth } from '../../context/AuthContext';
import Button from '../Button/Button';
import Form from '../Form/Form';
import TextInput from '../Form/TextInput';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();
    const { login } = useAuth();

    // Form handler
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            return navigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            return setError('Failed to login');
        }
    }

    return (
        <div>
            <h1>Login to your account</h1>

            <div className="column">
                <div className="illustration">
                    <img src={loginImg} alt="login" />
                </div>
                {loading && <h4>Loading...</h4>}

                {!loading && (
                    <Form className={'login'} onSubmit={handleSubmit}>
                        <TextInput
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            icon="alternate_email"
                            required
                        />
                        <TextInput
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            icon="lock"
                            required
                        />
                        <Button type="submit">
                            <span>Submit now</span>
                        </Button>
                        {error && <p className="error">{error}</p>}
                        <div className="info">
                            Don't have an account? <Link to="/signup">Signup</Link>
                        </div>
                    </Form>
                )}
            </div>
        </div>
    );
};

export default Login;
