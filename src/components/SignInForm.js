import PropTypes from "prop-types";
import { useState } from "react";

const SignInForm= ({}) => {
  const INITIAL_SignIn_DATA = {
    password:""
  };

  const [sighInFormData, setSignInFormData] = useState(INITIAL_SignIn_DATA);

  const handleFormChange = (e) => {
    const newSignInData = {
      ...sighInFormData,
      [e.target.name]: e.target.value,
    };
    setSignInFormData(newSignInData);
  };

  const submitSignInForm = (e) => {
    e.preventDefault();
    
    setSignInFormData(INITIAL_SignIn_DATA);
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
  addChore: PropTypes.func.isRequired,
  familyId: PropTypes.number.isRequired,
};

export default SignInForm;
