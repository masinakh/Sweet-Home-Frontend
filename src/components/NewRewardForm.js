import PropTypes from "prop-types";
import { useState } from "react";
const INITIAL_REWARD_DATA = {
  title: "",
  points: "",
};
const NewRewardForm = ({ addReward }) => {
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
      <form onSubmit={submitRewardForm}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={rewardFormData.title}
          onChange={handleFormChange}
        ></input>
        <br></br>
        <label htmlFor="points">Points: </label>
        <input
          type="Numeric"
          id="points"
          name="points"
          value={rewardFormData.points}
          onChange={handleFormChange}
        ></input>
      </form>
    </div>
  );
};
NewRewardForm.propTypes = {
  addReward: PropTypes.func.isRequired,
};

export default NewRewardForm;