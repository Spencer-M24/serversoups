import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../actions/userAcctActions";

let user = { email: "", password: "" };

class LogIn extends Component {
    constructor(props) {
        super();
    }
    logIn = event => {
        event.preventDefault();
        this.props.logIn(user);
    };
    getInfo = event => {
        user[event.target.name] = event.target.value;
    };

    render() {
        return (
            <div>
                <h2>Log In</h2>
                <form onSubmit={this.logIn}>
                    <input name="email" onChange={this.getInfo} />
                    <input name="password" onChange={this.getInfo} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginInfo: state.userAccounts.loginInfo,
        loggingIn: state.userAccounts.loggingIn,
        error: state.userAccounts.error
    };
};
export default connect(
    mapStateToProps,
    { logIn }
)(LogIn);
