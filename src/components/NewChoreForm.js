import PropTypes from "prop-types";
import { useState } from "react";
const INITIAL_CHORE_DATA = {
  title: "",
  points: "",
};
const NewChoreForm = ({ addChore }) => {

  const [choreFormData, setChoreFormData] = useState(INITIAL_CHORE_DATA);

  const handleFormChange = (e) => {
    const newChoreData = {
      ...choreFormData,
      [e.target.name]: e.target.value,
    };
    setChoreFormData(newChoreData);
  };

  const submitChoreForm = (e) => {
    e.preventDefault();
    addChore(choreFormData);
    setChoreFormData(INITIAL_CHORE_DATA);
  };

  return (
    <div>
      <form onSubmit={submitChoreForm}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={choreFormData.title}
          onChange={handleFormChange}
        ></input>
        <br></br>
        <label htmlFor="points">Points: </label>
        <input
          type="Numeric"
          id="points"
          name="points"
          value={choreFormData.points}
          onChange={handleFormChange}
        ></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
};
NewChoreForm.propTypes = {
  addChore: PropTypes.func.isRequired,
};

export default NewChoreForm;
