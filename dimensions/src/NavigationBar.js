import './App.css';
import React, { Component } from 'react';
import LogoFull from './logo/logo_full.png';

class NavigationBar extends Component {
    render() {
        return (

            <header className="home-header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <a className="navbar-brand" href="#" >
                        <img src={LogoFull} width="auto" height="50px"></img>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarId">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Pricing</a>
                            <a className="nav-item nav-link disabled" href="#">Disabled</a>
                        </div>
                    </div>
                    
                    <div className="navbar-text text-right">
                        Welcome: Anuraj
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarId" aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </header>
        );
    }
}

export default NavigationBar;