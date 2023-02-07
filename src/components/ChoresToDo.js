import React from 'react'
import PropTypes from "prop-types";
import "./ChoresToDo.css";
import {useState} from 'react';

const ChoresToDo = ({selectedChore, markComplete}) => {
  // const [selectedChore, setselectedChore]=useState(selectedChore)
  const flipWhencompleted = (chore, button) => {
    button.className = "tasks__item__toggle " + chore.is_complete ? 'tasks__item__toggle--completed' : '';
    console.log("inside filpwhencompleted")
    console.log("before",chore.is_completed)
    chore.is_completed = !chore.is_completed
    markComplete(chore);
    console.log("after",chore.is_completed)
    
  };
  
  const choresToDoList = [];
  for (const chore of selectedChore) {
    const buttonClass = chore.is_complete ? 'tasks__item__toggle--completed' : '';
    choresToDoList.push(
      <div>
        <li
          key={chore.id}
          className="tasks__item"
        > 
        {chore.title} - {chore.points}
        </li>
        <button className={`tasks__item__toggle ${buttonClass}`} onClick={(e) =>{flipWhencompleted(chore,e.target)}}>I did it!</button>
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