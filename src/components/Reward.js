import React from "react";
import PropTypes from "prop-types";
import "./Reward.css";

const Reward = ({ id, title, points, deleteReward, selectReward }) => {
  return (
    <div className="reward">
      <h4>{title}</h4>
      <span>Points: {points}</span>
      <button className="btn" onClick={() => selectReward(id)}>
        Select
      </button>
      <button className="btn" onClick={() => deleteReward(id)}>
        Delete
      </button>
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
