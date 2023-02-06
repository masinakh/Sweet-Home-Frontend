import React from "react";
import "./Login.css";
import axios from "axios";
import {Link} from "react-router-dom";

const Login = ({createNewFamily}) => {
  

  return (
    <>
      <img src="./images/images.jpeg" alt="sweet-home-logo" />
      <p>
        This App motivate kids to do chores and establish good habits and
        positive behaviors by taking responsibility and turn chores into a fun
        game by achieving goals and scoring points,Then reward those who exceed
        expectations by redeeming their points.
      </p>
      <div id="gSignInWrapper">
          <Link to="/addMember"><button onClick={createNewFamily}>Sign UP</button></Link>
      </div>
    </>
  );
};

export default Login;
