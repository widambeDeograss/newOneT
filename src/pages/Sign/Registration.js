import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './login.css';
import { Input,Button } from "@material-tailwind/react";

const Registation = () => {
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
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign up</h2>

                        <div className="w-72 extra">
                            <Input label="Username" />
                        </div>

                        <div className="w-72 extra">
                            <Input type='email' label="email" />
                        </div>


                        <div className="w-72 extra">
                            <Input type='password' label="Password" />
                        </div>

                        <div className="flex w-max gap-4 extra">
                            <Button color="blue">Sign Up</Button></div>
                        
                        <p className="social-text">Or Sign up with social platforms</p>
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
                        <a href='/login'>
                        <button className="btn transparent" id="sign-in-btn">
                            Sign in
                        </button>
                        </a>
                    </div>
                    <img src='img/register.svg' className='image' alt='' />
                </div>
            </div>
        </div>)
}

export default Registation;






