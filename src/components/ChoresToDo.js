import React from "react";
import PropTypes from "prop-types";
import "./ChoresToDo.css";

const ChoresToDo = ({ selectedChore, markComplete }) => {
  // const [selectedChore, setselectedChore]=useState(selectedChore)
  const flipWhencompleted = (chore, button) => {
    button.className =
      "tasks__item__toggle " + chore.is_complete
        ? "tasks__item__toggle--completed"
        : "";
    chore.is_completed = !chore.is_completed;
    markComplete(chore);
  };

  const choresToDoList = [];
  for (const chore of selectedChore) {
    const buttonClass = chore.is_complete
      ? "tasks__item__toggle--completed"
      : "";
    choresToDoList.push(
      <li key={chore.id} className="tasks__item">
        <p class="task-item__title">
          {chore.title} / {chore.points} Points
        </p>

        <button
          style={{ color: "black" }}
          className={`tasks__item__toggle ${buttonClass}`}
          onClick={(e) => {
            flipWhencompleted(chore, e.target);
          }}
        >
          I did it!
        </button>
      </li>
    );
  }

  return (
    <div>
      <h4>Chore To Do:</h4>
      <div class="chores-to-do">
        <ul className="chore-to-do__list">{choresToDoList}</ul>
      </div>
    </div>
  );
};

ChoresToDo.propTypes = {
  selectedChore: PropTypes.arrayOf(PropTypes.object).isRequired,
  markComplete: PropTypes.func.isRequired,
};

export default ChoresToDo;
