import PropTypes from "prop-types";
import { useState } from "react";
import "./NewChoreForm.css";

const NewRewardForm = ({ addReward, familyId }) => {
  console.log("I am in reward form", familyId);
  const INITIAL_REWARD_DATA = {
    title: "",
    points: "",
    familyId: familyId,
  };
  const [rewardFormData, setRewardFormData] = useState(INITIAL_REWARD_DATA);

  const handleFormChange = (e) => {
    const newRewardData = {
      ...rewardFormData,
      [e.target.name]: e.target.value,
    };
    setRewardFormData(newRewardData);
  };

  const submitRewardForm = (e) => {
    e.preventDefault();
    addReward(rewardFormData);
    setRewardFormData(INITIAL_REWARD_DATA);
  };

  return (
    <div>
      <h5 className="addChore">You Can Add New Rewards Below:</h5>
      <form onSubmit={submitRewardForm} class="my-form">
        <div class="my-form__elements">
          <label htmlFor="title">Reward: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={rewardFormData.title}
            onChange={handleFormChange}
          ></input>
          <label htmlFor="points">Points: </label>
          <input
            type="Numeric"
            id="points"
            name="points"
            value={rewardFormData.points}
            onChange={handleFormChange}
          ></input>
        </div>
        <button class="my-form__btn">Submit</button>
      </form>
    </div>
  );
};
NewRewardForm.propTypes = {
  addReward: PropTypes.func.isRequired,
  familyId: PropTypes.number.isRequired,
};

export default NewRewardForm;
