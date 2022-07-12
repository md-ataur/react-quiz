import React from 'react';
import classes from '../../assets/styles/Layout.module.css';
import Nav from '../Nav/Nav';

function Layout({ children }) {
    return (
        <>
            <Nav />
            <main className={classes.main}>
                <div className={classes.container}>{children}</div>
            </main>
        </>
    );
}

export default Layout;
