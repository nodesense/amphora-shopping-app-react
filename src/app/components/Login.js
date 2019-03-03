// components/Login.js
import React, { Component } from 'react';

import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'admin',
            password: 'admin'
        }
    }

    onInputChange = (e) => {
        // target is real dom element input/select/... controls
        console.log(e.target.name, e.target.value);

        // set the state from input change
        // this call render 
        // then v.dom shall be updated with state values
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault(); // stop browser post method
        // todo: 
        console.log('state ', this.state);

        this.props.login(this.state.username, 
                         this.state.password);

    }

    render() {

        if (this.props.authenticated) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                Username 
                    <input name="username"
                           type="text"
                           value={this.state.username}
                           onChange={this.onInputChange}
                    />

                    Password
                    <input name="password"
                           type="text"
                           value={this.state.password}

                           onChange={this.onInputChange}
                    />

                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;