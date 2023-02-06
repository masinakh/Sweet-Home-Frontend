import PropTypes from "prop-types";
import { useState } from "react";

const NewFamilyForm = ({ addMember , familyId}) => {
  const INITIAL_FAMILY_DATA = {
    name: "",
    email: "",
    isParent: true,
    familyId:familyId
  };
  const [familyFormData, setFamilyFormData] = useState(INITIAL_FAMILY_DATA);

  const handleFormChange = (e) => {
  // fix the parent / child issue
  // fix the first member dose not show
    const newFamilyData = {
      ...familyFormData,
      [e.target.name]: e.target.value,
    };
    setFamilyFormData(newFamilyData);
  };

  const submitFamilyForm = (e) => {
    e.preventDefault();
    addMember(familyFormData);
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
        <label htmlFor="isParent">This member is: </label>
        <select name="isParent" id="parent" onChange={handleFormChange}>
          <option value="true">Parent</option>
          <option value="false">Child</option>
        </select>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};
NewFamilyForm.propTypes = {
  addMember: PropTypes.func.isRequired,
  createNewFamily: PropTypes.func.isRequired,
};
export default NewFamilyForm;
