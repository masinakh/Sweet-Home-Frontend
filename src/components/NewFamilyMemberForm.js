import PropTypes from "prop-types";
import { useState } from "react";
const INITIAL_FAMILY_DATA = {
  name: "",
  email: "",
  isParent: true,
};
const NewFamilyForm = ({ addFamily }) => {
  const [familyFormData, setFamilyFormData] = useState(INITIAL_FAMILY_DATA);

  const handleFormChange = (e) => {
    const newFamilyData = {
      ...familyFormData,
      [e.target.name]: e.target.value,
    };
    setFamilyFormData(newFamilyData);
  };

  const submitFamilyForm = (e) => {
    e.preventDefault();
    addFamily(familyFormData);
    setFamilyFormData(INITIAL_FAMILY_DATA);
  };

  return (
    <div>
      <form onSubmit={submitFamilyForm}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={familyFormData.name}
          onChange={handleFormChange}
        ></input>
        <br></br>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={familyFormData.email}
          onChange={handleFormChange}
        ></input>
        <br />
        <label for="familyRole">This member is: </label>
        <select name="familyRole" id="parent" onChange={handleFormChange}>
          <option value="Parent">Parent</option>
          <option value="Child">Child</option>
        </select>
      </form>
    </div>
  );
};
NewFamilyForm.propTypes = {
  addFamily: PropTypes.func.isRequired,
};
export default NewFamilyForm;
