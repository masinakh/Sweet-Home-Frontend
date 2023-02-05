import React from "react";
// import {useState , useEffect} from "react";
import RewardList from "../components/RewardList";
import NewRewardForm from "../components/NewRewardForm";
import ChoresToDo from "../components/ChoresToDo";

const MemberAccount = ({
  rewardList,
  deleteReward,
  selectChore,
  selectReward,
  addReward,
  markComplete, 
  selectedChore
}) => {
  return (
    <div>
      <ChoresToDo selectedChore={selectedChore} markComplete={markComplete}/>
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
