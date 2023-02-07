import React from "react";
import PropTypes from "prop-types";

const MemberSelectedRewards = ({ selectedReward, name }) => {
  const rewardRenders = [];
  for (const reward of selectedReward) {
    rewardRenders.push(<li key={reward.id}>{reward.title}</li>);
  }
  return (
    <div>
      <h2>{name}'s Rewards:</h2>
      <ul>{rewardRenders}</ul>
    </div>
  );
};

MemberSelectedRewards.propTypes = {
  selectedReward: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default MemberSelectedRewards;
