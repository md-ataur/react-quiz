import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-bg.png';
import classes from '../../assets/styles/Nav.module.css';
import { useAuth } from '../../context/AuthContext';

const Nav = () => {
    const { user, logout } = useAuth();
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link className={classes.brand} to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </li>
            </ul>
            <div className={classes.account}>
                {user ? (
                    <>
                        <span className="material-icons-outlined" title="Account">
                            account_circle
                        </span>

                        <span>{user.displayName}</span>
                        <span
                            onClick={() => logout()}
                            className="material-icons-outlined"
                            title="Logout"
                        >
                            logout
                        </span>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
