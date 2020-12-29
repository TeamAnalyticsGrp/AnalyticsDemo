import '../App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoFull from '../logo/logo_full.png';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light footer-padding">

                <a className="navbar-brand" href="/" >
                    <img src={LogoFull} width="auto" height="50px"></img>
                </a>

                <div className="collapse navbar-collapse" id="navbarId">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to='/all-users'>
                            All Users
                        </Link>
                        <Link className="nav-item nav-link" to='/user-repos-detail'>
                            User Repos Detail
                        </Link>                        
                    </div>
                </div>

                <div className="navbar-text text-nowrap">
                    Welcome: Anuraj
                    </div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarId" aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

export default NavigationBar;