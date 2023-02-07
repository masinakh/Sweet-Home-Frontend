import React from "react";
import Reward from "./Reward";
import PropTypes from "prop-types";
import "./RewardList.css";

const RewardList = ({ rewardList, deleteReward, selectReward }) => {
  const RewardRenders = rewardList.map((reward) => {
    return (
      <div key={reward.id}>
        <Reward
          id={reward.id}
          title={reward.title}
          points={reward.points}
          deleteReward={deleteReward}
          selectReward={selectReward}
        />
      </div>
    );
  });
  return (
    <div>
      <h2>Select a Reward from the reward list</h2>
      <div className="inner-reward-container">{RewardRenders}</div>
    </div>
  );
};
RewardList.propTypes = {
  rewardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
      deleteReward: PropTypes.func.isRequired,
      selectReward: PropTypes.func.isRequired,
    })
  ),
};
export default RewardList;
