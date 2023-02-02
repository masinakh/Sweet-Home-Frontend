import React from "react";
import Chore from "./Chore";
import PropTypes from "prop-types";
import "./ChoreList.css";


const ChoreList = ({ choreList }) => {
  return (
    <div className="container">
      {choreList.map((chore) => {
        return (
          <div key={chore.id} >
            <Chore
              id={chore.id}
              title={chore.title}
              points={chore.points}
              is_completed={chore.isCompleted}
            />
          </div>
        );
      })}
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
