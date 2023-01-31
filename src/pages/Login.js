import React from "react";
import "./Login.css";

const Login = () => {
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
          <span class="icon"></span>
          <span class="buttonText">Google</span>
        </div>
      </div>
    </>
  );
};

export default Login;
