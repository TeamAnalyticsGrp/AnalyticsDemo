import './App.css';
import React, { Component } from 'react';
import LogoFull from './logo/logo_full.png';

class Navbar extends Component {
    render() {
        return (

            <div className="Navbar">
                <header className="home-header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a href="#" >
                                <img src={LogoFull} width="auto" height="50px%"></img>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Email</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Donations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Fees</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-text text-right">
                            Hi, Anuraj
                        </div>
                    </nav>

                </header>
            </div>
        );
    }
}

export default Navbar;