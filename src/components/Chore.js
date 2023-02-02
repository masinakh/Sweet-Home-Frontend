import React from 'react'
import PropTypes from "prop-types";
import "./Chore.css";

const Chore = ({id, title, points, is_completed}) => {
  return (
    <div className="chore">
      <h4>{title}</h4>
      <span>{points}</span>
      <button>Select</button>
      <button>Delete</button>
    </div>
  )
}
Chore.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  is_completed: PropTypes.bool.isRequired,
  
};


export default Chore