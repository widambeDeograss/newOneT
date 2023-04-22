import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope, faSailboat, faI } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";
import "./login.css";
import { Alert, Button, Typography } from "@material-tailwind/react";
import logo from "../../Assets/Vastfx.PNG";
import PageTitle from "../Account/Components/page-title";

const Registation = () => {
  const [show, setShow] = React.useState(false);

  const [anime, setAnime] = useState(true);

  setTimeout(() => {
    setAnime(false);
  }, 50);

  return (
    <div className={`container ${anime ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign up</h2>

            <div className="mx-auto w-full px-4 text-center ">
              <Typography variant="lead" className="text-blue-gray-500">
                Join VastFx today and experience the best in Forex trading.
                Contact our admin for easy registration and start trading with
                our expert team.
              </Typography>
            </div>
            <PageTitle></PageTitle>

            <div className="flex w-max gap-4 extra">
              <Button  className="btn" onClick={() => setShow(true)}>
                Contact
              </Button>
            </div>

            <p className="social-text">Visit our social platforms</p>
            <div className="social-media">
              <a href="https://instagram.com/vast_fx?igshid=YmMyMTA2M2Y=" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://youtube.com/@Themoneyconscious" className="social-icon">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://instagram.com/vast_fx?igshid=YmMyMTA2M2Y=" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://wa.me/message/Q62AHV6GATVVC1" className="social-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </form>
        </div>
      </div>
      <Alert
        show={show}
        className="  max-w-screen-md"
        style={{ position: "-webkit-sticky", margin: "auto", zIndex: "10", backgroundColor:"ThreeDDarkShadow"}}
        icon={<PhoneIcon className="mt-px h-6 w-6" />}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        <Typography variant="h5" color="white">
          Contact our Team
        </Typography>
        <Typography color="white" className="mt-2 font-normal">
          To sign up for VastFx and start trading Forex, please contact our
          admin for registration information. Our team is available to assist
          you throughout the process
        </Typography>
        <hr/>
        <Typography color="white" variant='h5' className="mt-2 font-normal">
         Phone: +255 655 459 371
        </Typography>
        <br/>
        <Typography color="white"   variant='h5' className="mt-2 font-normal">
         Email: vastfx01@gmail.com
        </Typography>
      </Alert>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Alredy have an account?</h3>
            <img class="mx-auto w-48 " src={logo} alt="logo" />
            <p>
              Welcome to vastFx where knowledge is power and profits are within
              reach!
            </p>
            <a href="/login">
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </a>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Registation;
