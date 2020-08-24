import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="https://github.com/lang2s/movie_app_portfolio.git">Git hub</a>
            <a href="http://ec2-3-34-83-94.ap-northeast-2.compute.amazonaws.com">Works</a>
        </div>
    );
}

export default Navigation;