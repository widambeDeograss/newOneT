import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './login.css';
import { Input, Button } from "@material-tailwind/react";

const Login = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const handleSignUpMode = () => {
        setIsSignUpMode(true);
    };

    const handleSignInMode = () => {
        setIsSignUpMode(false);
    };

    return (
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="/account/" className="sign-in-form">
                        <h2 className="title">Sign in</h2>

                        <div className="w-72 extra">
                            <Input label="Username" />
                        </div>


                        <div className="w-72 extra">
                            <Input type='password' label="Password" />
                        </div>

                        <div className="flex w-max gap-4 extra">
                            <Button type='submit' color="blue">Login</Button></div>

                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="flex w-max gap-4 extra" >
                            <a href='/admin'>
                                <Button color="blue">Admin</Button>
                            </a></div>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">

                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione.
                            Aliquid!
                        </p>
                        <a href='/register'>
                        <button className="btn transparent" id="sign-in-btn">
                            Sign Up
                        </button>
                        </a>
                    </div>
                    <img src='img/register.svg' className='image' alt='' />
                </div>
            </div>
        </div >)
}

export default Login;


