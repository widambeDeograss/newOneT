import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAuth } from "../../api/auth/AuthSlice";
import { useLoginMutation } from "../../api/auth/AuthApiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { displayAlert,  toggleAlert } from "../../api/store/appStateSlice";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./login.css";
import { Input, Button } from "@material-tailwind/react";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const useRef = React.useRef();
  const errRef = React.useRef();
  const [errorMsg, setErrorMsg] = React.useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [anime, setAnime] = useState(true);

  setTimeout(() => {
    setAnime(false);
  }, 50);
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submmmm");
    const body = {
      username: username,
      password: password,
    };
    console.log(body);
    try {
      let severity = "info";
      const userData = await login(body).unwrap();
      console.log(userData);

    //   localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", userData.tokens.access);
      dispatch(loginAuth({ ...userData }));
      setUsername("");
      setPassword("");
      if (userData.profile_id.type == "admin") {
        navigate("/admin");
      } else if (userData.profile_id.type == "normal") {
        navigate("/account");
      }

      dispatch(displayAlert({message: userData.profile_id.type, severity: severity}));
      dispatch(toggleAlert());

    } catch (error) {
      console.log(error);
      if (!error?.respose) {
        setErrorMsg("No server respose try again later");
      } else if (error.respose?.status === 401) {
        setErrorMsg("incorrect password or email ");
      } else {
        setErrorMsg("login failed try again later");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className={`container ${anime ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Sign in</h2>

            <div className="w-72 extra">
              <Input
                label="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="w-72 extra">
              <Input
                type="password"
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="flex w-max gap-4 extra">
              <Button type="submit" color="blue">
                Login
              </Button>
            </div>

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="flex w-max gap-4 extra">
              <a href="/admin">
                <Button color="blue">Admin</Button>
              </a>
            </div>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <a href="/register">
              <button className="btn transparent" id="sign-in-btn">
                Sign Up
              </button>
            </a>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
