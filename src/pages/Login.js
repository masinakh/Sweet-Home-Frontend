import React from "react";
import "./Login.css";
import axios from "axios";
import { redirect } from "react-router-dom";
import { redirect } from "react-router-dom";

const Login = () => {
  const loginClickHandler = () => {
    axios.get("http://127.0.0.1:5000/login").then((res) => {
      // console.log(res.data);
      // return redirect(res.data.url);
      window.location.replace(res.data.url);
    });
  };

  return (
    <>
      <h1>SWEET HOME</h1>
      <img src="./images/images.jpeg" alt="sweet-home-logo" />
      <p>
        This App motivate kids to do chores and establish good habits and
        positive behaviors by taking responsibility and turn chores into a fun
        game by achieving goals and scoring points,Then reward those who exceed
        expectations by redeeming their points.
      </p>
      <div id="gSignInWrapper">
        <span class="label">Sign in with:</span>
        <div id="customBtn" class="customGPlusSignIn">
          <button onClick={loginClickHandler}>
            <span class="icon"></span>
            <span class="buttonText">Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
