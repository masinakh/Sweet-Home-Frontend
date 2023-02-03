import React from "react";
// import {useState , useEffect} from "react";
import RewardList from "../components/RewardList";
import NewRewardForm from "../components/NewRewardForm";

const MemberAccount = ({
  rewardList,
  deleteReward,
  selectChore,
  selectReward,
  addReward,
}) => {
  return (
    <div>
      <RewardList
        rewardList={rewardList}
        deleteReward={deleteReward}
        selectChore={selectChore}
        selectReward={selectReward}
      />
      <NewRewardForm addReward={addReward} />
    </div>
  );
};

export default MemberAccount;
