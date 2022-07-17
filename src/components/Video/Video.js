import React from 'react';
import videoImg from '../../assets/images/3.jpg';
import classes from '../../assets/styles/Videos.module.css';

const Video = () => {
    return (
        <div className={classes.video}>
            <img src={videoImg} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className={classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
    );
};

export default Video;
