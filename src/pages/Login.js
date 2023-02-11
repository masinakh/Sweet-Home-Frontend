import React from "react";
import "./Login.css";
import SignInForm from "../components/SignInForm";

const Login = ({ createNewFamily, updateMember }) => {
  return (
    <div>
      <img src="./images/images.jpeg" alt="sweet-home-logo" />
      <p className="text-center">
        This App motivate kids to do chores and establish good habits and
        positive behaviors by taking responsibility and turn chores into a fun
        game by achieving goals and scoring points,Then reward those who exceed
        expectations by redeeming their points.
      </p>
      <div id="gSignInWrapper">
        <SignInForm
          updateMember={updateMember}
          createNewFamily={createNewFamily}
        />
      </div>
    </div>
  );
};

export default Login;
