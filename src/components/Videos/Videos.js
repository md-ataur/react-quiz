import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../assets/styles/Videos.module.css';
import Video from '../Video/Video';

const Videos = () => {
    return (
        <div className={classes.videos}>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
            <Link to="/quiz">
                <Video />
            </Link>
        </div>
    );
};

export default Videos;
