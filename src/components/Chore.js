import React from "react";
import PropTypes from "prop-types";
import "./Chore.css";

const Chore = ({
  id,
  title,
  points,
  is_completed,
  deleteChore,
  selectChore,
}) => {
  return (
    <div className="chore">
      <h4 class="title">{title}</h4>
      <p>Points: {points}</p>
      <br />
      <div class="btn-container">
        <button className="btn" onClick={() => selectChore(id)}>
          Select
        </button>
        <button className="btn" onClick={() => deleteChore(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
Chore.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  is_completed: PropTypes.bool.isRequired,
  deleteChore: PropTypes.func.isRequired,
  selectChore: PropTypes.func.isRequired,
};

export default Chore;
