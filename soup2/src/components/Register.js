import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../actions/userAcctActions";

// password email firstName lastName when registering
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email: "",
            firstName: "",
            lastName: ""
        };
    }
    register = event => {
        event.preventDefault();
        this.props.register(this.state);
    };

    getInfo = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.register}>
                
                    <input
                        name="password"
                        onChange={this.getInfo}
                        value={this.state.password}
                    />

                    <input
                        name="email"
                        onChange={this.getInfo}
                        value={this.state.email}
                    />

                    <input
                        name="firstName"
                        onChange={this.getInfo}
                        value={this.state.firstName}
                    />

                    <input
                        name="lastName"
                        onChange={this.getInfo}
                        value={this.state.lastName}
                    />

                    <input type="submit" value="register" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        things: []
    };
};

export default connect(
    mapStateToProps,  { register })(Register);
