import PropTypes from "prop-types";
import { useState } from "react";
import "./NewChoreForm.css";

const NewChoreForm = ({ addChore, familyId }) => {
  const INITIAL_CHORE_DATA = {
    title: "",
    points: "",
    familyId: familyId,
  };

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
      <h5 className="addChore">You Can Add New Chores Below:</h5>
      <form onSubmit={submitChoreForm} class="my-form">
        <div class="my-form__elements">
          <label htmlFor="title">Chore: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={choreFormData.title}
            onChange={handleFormChange}
          ></input>

          <label htmlFor="points">Points: </label>
          <input
            type="Numeric"
            id="points"
            name="points"
            value={choreFormData.points}
            onChange={handleFormChange}
          ></input>
        </div>

        <button class="my-form__btn">Submit</button>
      </form>
    </div>
  );
};
NewChoreForm.propTypes = {
  addChore: PropTypes.func.isRequired,
  familyId: PropTypes.number.isRequired,
};

export default NewChoreForm;
