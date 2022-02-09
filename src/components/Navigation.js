import React from 'react';
import LoginForm from './LoginForm';
import { FaSearch } from "react-icons/fa"

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="navBar">
                        <li className="navLink"><a href="../public/index.html">Home</a></li>
                        <li className="navLink"><a href="../public/index.html">Blog</a></li>
                        <li className="navLink"><a href="../public/index.html">Shop</a></li>
                        <li className="navLink"><a href="../public/index.html">About</a></li>
                        <li><input
                            className="search-box"
                            type="text"
                            placeholder="Search..."
                        /> <FaSearch /></li>
                    </ul>
                </nav>
                <div className="login-div">
                    <LoginForm />
            </div>
            </div>

        )
    }
}
