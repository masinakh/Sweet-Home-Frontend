import React from "react";
// import {useState , useEffect} from "react";
import RewardList from "../components/RewardList";

const MemberAccount = ({
  rewardList,
  deleteReward,
  selectChore,
  selectReward,
}) => {
  return (
    <div>
      <RewardList
        rewardList={rewardList}
        deleteReward={deleteReward}
        selectChore={selectChore}
        selectReward={selectReward}
      />
    </div>
  );
};

export default MemberAccount;
