import React from "react";
import Reward from "./Reward";
import PropTypes from "prop-types";
import "./RewardList.css";


const RewardList = ({ rewardList }) => {
  return (
    <div className="display">
      {rewardList.map((reward) => {
        return (
          <div key={reward.id} >
            <Reward
              id={reward.id}
              title={reward.title}
              points={reward.points}
            />
          </div>
        );
      })}
    </div>
  );
};
RewardList.propTypes = {
  rewardList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      points: PropTypes.number.isRequired,
    })
  ),
};
export default RewardList;