import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = ({ updateMember }) => {
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
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          name="password"
          value={sighInFormData.password}
          onChange={handleFormChange}
        ></input>
        <br></br>
        <button>SignIn</button>
      </form>
    </div>
  );
};
SignInForm.propTypes = {
  updateMember: PropTypes.func.isRequired,
};

export default SignInForm;
