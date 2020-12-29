import React, { Component } from 'react';
import '../App.css';
import Logo from '../logo/logo.png';

class Footer extends Component {

    state = {
        subscribeButtonText: 'Subscribe',
        emailAddress: ''
    }

    getText = (value) => {
        return value === 'Unsubscribe' ? 'Subscribe' : 'Unsubscribe';
    }

    handleSubmit = (event) => {
        this.setState({ subscribeButtonText: this.getText(this.state.subscribeButtonText) });
        this.setState({ emailAddress: ''});
        event.preventDefault();
    }

    handleOnChange = (event) => {
        this.setState({ emailAddress: event.target.value});
        event.preventDefault();
    }

    render() {
        return (
            <div className="footer add-padding bg-light row justify-content-between">
                <div ><img className="footer-logo" src={Logo} alt="Dimensions" /></div>

                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input className="form-control mr-sm-2"
                        type="email"
                        placeholder="Email Address"
                        value={this.state.emailAddress}
                        onChange={this.handleOnChange}
                        required />
                    <button className="btn btn-outline-success my-2 my-sm-0">
                        {this.state.subscribeButtonText}
                    </button>
                </form>
            </div>
        )
    }
}

export default Footer;