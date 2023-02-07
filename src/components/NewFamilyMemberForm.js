import PropTypes from "prop-types";
import { useState } from "react";

const NewFamilyMemberForm = ({ addMember, familyId }) => {
  const INITIAL_FAMILY_DATA = {
    name: "",
    email: "",
    isParent: null,
    familyId: familyId,
  };
  const [familyFormData, setFamilyFormData] = useState(INITIAL_FAMILY_DATA);

  const handleFormChange = (e) => {
    if (e.target.name === "isParent" && e.target.value === "true") {
      const newFamilyData = {
        ...familyFormData,
        familyId: familyId,
        isParent: true,
      };
      console.log("in handleForm", newFamilyData);
      setFamilyFormData(newFamilyData);
    } else if (e.target.name === "isParent" && e.target.value === "false") {
      const newFamilyData = {
        ...familyFormData,
        familyId: familyId,
        isParent: false,
      };
      console.log("in handleForm", newFamilyData);
      setFamilyFormData(newFamilyData);
    } else {
      const newFamilyData = {
        ...familyFormData,
        familyId: familyId,
        [e.target.name]: e.target.value,
      };
      console.log("in handleForm", newFamilyData);
      setFamilyFormData(newFamilyData);
    }
  };

  const submitFamilyForm = (e) => {
    e.preventDefault();
    console.log("we are in submitFamilyForm", familyFormData);
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
          <option value="">Select an option</option>
          <option value="true">Parent</option>
          <option value="false">Child</option>
        </select>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};
NewFamilyMemberForm.propTypes = {
  addMember: PropTypes.func.isRequired,
  familyId: PropTypes.number.isRequired,
};
export default NewFamilyMemberForm;
