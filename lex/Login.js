import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../store/actions/authActions';


const Login = () => {
    const dispatch = useDispatch();
    
    const loginOnClick = () => {
        var login = document.getElementById("login-form");
        login.style.display = "block";
    }
    const spanOnClick = () => {
        var login = document.getElementById("login-form");
        login.style.display = "none";
    }
    window.onclick = (event) => {
        var login = document.getElementById("login-form");
        if (event.target == login) {
            login.style.display = "none";
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.LOGIN());
        var login = document.getElementById("login-form");
        var loginBtn = document.getElementById("login");
        login.style.display = "none";
        loginBtn.style.display = "none";
    }

    let loggedIn = useSelector(state => state.auth.loggedIn);

    const logoutOnClick = () => {
        loggedIn = false;
        var logoutBtn = document.getElementById("logout");
        var loginBtn = document.getElementById("login");
        logoutBtn.style.display = "none";
        loginBtn.style.display = "block";
    }

    if (loggedIn === false) {
        return (
            <div>
            <div class="login-form" id="login-form">
            <form onSubmit={handleSubmit} class="form-container">
                <span onClick={spanOnClick} class="close">&times;</span>

                <label for="password">Password: </label>
                <input type="password" name="password" required pattern="password"/>

                <button type="submit" class="login-btn">Log In</button>
            </form>
        </div>
            <footer className="container-fluid">
                <button onClick={loginOnClick} type="button" id="login">Log In</button>
            </footer>
            </div>
        )
    } else if (loggedIn === true) {
        return (
            <div>
            
            <footer className="container-fluid">
            <button onClick={logoutOnClick} type="button" id="logout">Log Out</button>
        </footer>
        </div>
        )
    }


}

export default Login;