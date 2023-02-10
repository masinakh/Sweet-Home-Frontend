import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignInForm.css";

const SignInForm = ({ updateMember, createNewFamily }) => {
  const INITIAL_SignIn_DATA = {
    password: "",
  };

  const [sighInFormData, setSignInFormData] = useState(INITIAL_SignIn_DATA);
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const newSignInData = {
      ...sighInFormData,
      [e.target.name]: e.target.value,
    };
    setSignInFormData(newSignInData);
  };

  const submitSignInForm = (e) => {
    e.preventDefault();
    updateMember(sighInFormData);
    setSignInFormData(INITIAL_SignIn_DATA);
    navigate("/addmember");
  };

  return (
    <div>
      <form onSubmit={submitSignInForm}>
        <div class="password">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            name="password"
            value={sighInFormData.password}
            onChange={handleFormChange}
          ></input>
        </div>
        <br></br>
        <div class="btn-signInForm">
          <button style={{ margin: 10 }}>SignIn</button>
          <Link to="/addMember">
            <button onClick={createNewFamily}>SignUp</button>
          </Link>
        </div>
      </form>
    </div>
  );
};
SignInForm.propTypes = {
  updateMember: PropTypes.func.isRequired,
  createNewFamily: PropTypes.func.isRequired,
};

export default SignInForm;
