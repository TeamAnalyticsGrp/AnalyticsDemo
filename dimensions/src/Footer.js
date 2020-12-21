import React, { Component } from 'react';
import './App.css';
import Logo from './logo/logo.png';

class Footer extends Component {
    render() {
        return (

            <div className="footer-padding bg-light row">
                <div className="col-1"><img className="footer-logo" src={Logo} /></div>
                <div className="col-11" style={{"text-align": "end"}}><a href="#"> 
                    Subscribe
                </a>
                </div>
            </div>
        )
    }
}

export default Footer;