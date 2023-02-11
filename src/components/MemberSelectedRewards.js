import React from "react";
import PropTypes from "prop-types";
import "./ChoresToDo.css";
import "./MemberSelectedRewards.css";

const MemberSelectedRewards = ({ selectedReward, name }) => {
  const rewardRenders = [];
  for (const reward of selectedReward) {
    rewardRenders.push(
      <li className="tasks__item tasks__item--modifier" key={reward.id}>
        <span className="tasks__item__bullet" />
        {reward.title}
      </li>
    );
  }
  return (
    <div>
      <h2>{name}'s Rewards:</h2>
      <div class="chores-to-do">
        <ul className="chore-to-do__list">{rewardRenders}</ul>
      </div>
    </div>
  );
};

MemberSelectedRewards.propTypes = {
  selectedReward: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default MemberSelectedRewards;
