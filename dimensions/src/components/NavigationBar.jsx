import React, { Component } from 'react';
import LogoFull from './../assets/logo/logo_full.png';

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light footer-padding">

                <a className="navbar-brand" href="#" >
                    <img src={LogoFull} width="auto" height="50px"></img>
                </a>

                <div className="collapse navbar-collapse" id="navbarId">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Emails</a>
                        <a className="nav-item nav-link" href="#">Donations</a>
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