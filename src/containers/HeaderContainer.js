import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../y18.gif';

import '../styles/HeaderContainer.scss';

export const HeaderContainer = () => {
    return(
        <div>
            <div className="header">
                <img src={logo} alt="Logo" />
                <Link to="/news" style={{fontWeight: "bold"}}>Hacker News</Link>
                <Link to="/newest">new</Link> |
                <Link to="/front">past</Link> |
                <Link to="/comments">comments</Link> |
                <Link to="/ask">ask</Link> |
                <Link to="/show">show</Link> |
                <Link to="/jobs">jobs</Link> |
                <Link to="/submit">submit</Link>
                <div className="topnav-right">
                    <Link to="/">logout</Link>
                </div>
            </div>
                <div className="pagespace"></div>
        </div>
    )
}