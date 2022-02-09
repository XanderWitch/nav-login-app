import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (

        <div className="login-div">
        
            <form className="loginForm">
                <h3>Log In</h3>
                <div className="username">
                    Username
                    
                    <br />
                    <input
                        className="loginDetails"
                        type="text"
                        placeholder="Enter username..."
                        />
                </div>    
                <div className="password">
                    Password

                <br />
                <input
                    className="loginDetails"
                    type="password"
                    placeholder="Enter password..."
                    />
                </div>    
                <div className = "button">
                    <button
                        className="buttonSubmit"
                        type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
        
        );
    }
}
