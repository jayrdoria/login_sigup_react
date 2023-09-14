import React from 'react';
import '../css/AuthForm.css';
import useAuthForm from '../hooks/useAuthForm';

function AuthForm() {
    const { handleLoginClick, handleSignUpClick } = useAuthForm();

    return (
        <div className="container">
            <input type="checkbox" id="check" />
            <div className="login form">
                <header>Login</header>
                <form action="#">
                    <input type="text" placeholder="Enter your Email" />
                    <input type="password" placeholder="Enter your password" />
                    <a href="#">Forgot Password?</a>
                    <input type="button" className="button" value="Login" onClick={handleLoginClick} />
                </form>
                <div className="signup">
                    <span className="signup">Don't have an account?
                        <label htmlFor="check">Sign Up</label>
                    </span>
                </div>
            </div>
            <div className="registration form">
                <header>Sign Up</header>
                <form action="#">
                    <input type="text" placeholder="Enter your Email" />
                    <input type="password" placeholder="Create your password" />
                    <input type="password" placeholder="Confirm your password" />
                    <input type="button" className="button" value="Sign Up" onClick={handleSignUpClick} />
                </form>
                <div className="signup">
                    <span className="signup">Already have an account?
                        <label htmlFor="check">Login</label>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
