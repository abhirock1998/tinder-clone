import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
function Login({press}) {
  return (
    <div className="login">
      <div className="login__container">
        <img className=' animate__animated  animate__backInDown'  src="/images/tinder-logo.png" alt="banner" />
        <Button onClick={press} className="login__button" variant="outlined">
          Sigin With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
