import React from 'react'
import PropTypes from "prop-types";
import "./Reward.css";

const Reward = ({id, title, points}) => {
  return (
    <div className="reward">
      <h4>{title}</h4>
      <span>{points}</span>
      <button>Select</button>
      <button>Delete</button>
    </div>
  )
}
Reward.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  
};


export default Reward;