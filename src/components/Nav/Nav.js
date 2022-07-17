import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-bg.png';
import classes from '../../assets/styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <Link className={classes.brand} to="/">
                        <img src={logo} alt="Logo" />
                        {/* <h3>Learn with Sumit</h3> */}
                    </Link>
                </li>
            </ul>
            <div className={classes.account}>
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <Link to="/signup">Signup</Link>
                {/*  <span className="material-icons-outlined" title="Logout">                    
                    logout
                </span> */}
            </div>
        </nav>
    );
};

export default Nav;
