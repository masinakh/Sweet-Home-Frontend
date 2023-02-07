import PropTypes from "prop-types";
import { useState } from "react";
import "./NewFamilyMemberForm.css";

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
    <div class="form-container">
      <form onSubmit={submitFamilyForm}>
        <div class="form-group row">
          <label htmlFor="name" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              type="text"
              id="name"
              name="name"
              value={familyFormData.name}
              onChange={handleFormChange}
            ></input>
          </div>
        </div>
        <br></br>

        <div class="form-group row">
          <label
            htmlFor="email"
            for="inputEmail3"
            class="col-sm-2 col-form-label"
          >
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              id="inputEmail3"
              class="form-control"
              name="email"
              value={familyFormData.email}
              onChange={handleFormChange}
            ></input>
          </div>
        </div>

        <br />

        <div class="form-row align-items-center">
          <div class="col-auto my-1">
            <label htmlFor="isParent">This Member Is</label>
            <select
              class="custom-select mr-sm-2"
              name="isParent"
              // id="parent"
              id="inlineFormCustomSelect"
              onChange={handleFormChange}
            >
              <option value="" selected>
                Select An Option
              </option>
              <option value="true">Parent</option>
              <option value="false">Child</option>
            </select>
          </div>
        </div>

        <br></br>

        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
NewFamilyMemberForm.propTypes = {
  addMember: PropTypes.func.isRequired,
  familyId: PropTypes.number.isRequired,
};
export default NewFamilyMemberForm;
