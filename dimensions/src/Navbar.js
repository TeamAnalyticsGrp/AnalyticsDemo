import './App.css';
import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (

            <div className="Navbar">
                <header className="home-header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Dimensions</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Donations</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Fees</a>
                                    </li>
                                </ul>
                                <span className="navbar-text text-left">
                                    Hi, Anuraj
                            </span>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navbar;