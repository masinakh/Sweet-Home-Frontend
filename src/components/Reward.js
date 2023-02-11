import React from "react";
import PropTypes from "prop-types";
import "./Reward.css";
import "./Chore.css";

const Reward = ({ id, title, points, deleteReward, selectReward }) => {
  return (
    <div className="chore">
      <h4 class="title">{title}</h4>
      <p>Points: {points}</p>
      <div class="btn-container">
        <button className="btn" onClick={() => selectReward(id)}>
          Select
        </button>
        <button className="btn" onClick={() => deleteReward(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
Reward.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  deleteReward: PropTypes.func.isRequired,
  selectReward: PropTypes.func.isRequired,
};

export default Reward;
