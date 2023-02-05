import React from 'react'
import PropTypes from "prop-types";

const ChoresToDo = ({selectedChore, markComplete}) => {
  const choresToDoList = [];
  for (const chore of selectedChore) {
    choresToDoList.push(
      <div>
        <li
          key={chore.id}
        > 
        {chore.title} - {chore.points}
        </li>
        <button onClick={()=>{markComplete(chore)}}>Done!</button>
      </div>
    );
  }
  
  return (
    <div>
      <ul>{choresToDoList}</ul>
    </div>
  )
};

ChoresToDo.propTypes = {
  selectedChore: PropTypes.arrayOf(PropTypes.object).isRequired,
  markComplete: PropTypes.func.isRequired,

};

export default ChoresToDo