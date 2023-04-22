import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAuth } from "../../api/auth/AuthSlice";
import { useFormPost } from "../../hooks/FormHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setAlert, toggleAlert } from "../../api/store/appStateSlice";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./login.css";
import { Input, Button, Typography } from "@material-tailwind/react";
import { UserUrls } from "../../utils/Config";
import logo from '../../Assets/Vastfx.PNG'


const Login = ({ setUserdata }) => {
  const formPost = useFormPost();
  const dispatch = useDispatch();
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

  const handleSubmit = async (event) => {
    localStorage.clear()
    event.preventDefault();
    const body = {
      email: username,
      password: password,
    };
    console.log(body);
    try {
      let severity = "info";

      const response = await formPost.post({
        url: UserUrls.userLogin,
        data: body,
        login:true
      });
      console.log(response);
      const localStorageUser = {id:response.data.user.id, role:response.data.user.role}

      localStorage.setItem("user", JSON.stringify(localStorageUser));
      const userdata = {user:response.data.user, token:response.data.token}
      localStorage.setItem("token", response.data.token);
      dispatch(loginAuth({ ...userdata }));
      setUsername("");
      setPassword("");

      if (response.data.user.role== 0) {
        navigate("/admin");
      } else {
        navigate("/account");
      }

      dispatch(
        setAlert({ message: response.data.message, severity: severity })
      );
      dispatch(toggleAlert());

    } catch (error) {
      console.log(error);
      if (!error?.respose) {
        setErrorMsg("No server respose or invalid login credentials try again!");
      } else if (error.respose?.status === 400) {
        setErrorMsg("incorrect password or email ");
      } else {
        setErrorMsg("login failed try again later");
      }
    }
  };

  return (
    <div className={`container ${anime ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
          <div class="text-center">
                 
            <h2 className="title">Sign in</h2>
                </div>
     
            <Typography  variant="h6" color="red" ref={errRef} >
            {errorMsg}
          </Typography>
            <div className="w-72 extra">
              <Input
                label="email"
                type="email"
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>

            <div className="w-72 extra">
              <Input
                type="password"
                label="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="flex w-max gap-4 extra">
              <Button type="submit" className="btn">
                Login
              </Button>
            </div>

            {/* <p className="social-text">Or Sign in with social platforms</p>

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
            </div> */}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <img
                    class="mx-auto w-48 "
                    src={logo}
                    alt="logo" />
            <p>
            Welcome to vastFx where knowledge is power and profits are within reach! 
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
