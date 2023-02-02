import React from "react";
import Chore from "./Chore";
import PropTypes from "prop-types";
import "./ChoreList.css";

const ChoreList = ({ choreList }) => {
  const choreRenders = choreList.map((chore) => {
    return (
      <div className="box" key={chore.id}>
        <Chore
          id={chore.id}
          title={chore.title}
          points={chore.points}
          is_completed={chore.isCompleted}
        />
      </div>
    );
  });
  return (
    <div>
      <h2>
        Select a chore from the chore list
      </h2>
      <div className="inner-chore-container">{choreRenders}</div>
    </div>
  );

};
ChoreList.propTypes = {
  choreList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      is_completed: PropTypes.bool.isRequired,
    })
  ),
};
export default ChoreList;
