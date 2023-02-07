import React from "react";
// import {useState , useEffect} from "react";
import RewardList from "../components/RewardList";
import NewRewardForm from "../components/NewRewardForm";
import ChoresToDo from "../components/ChoresToDo";

const MemberAccount = ({
  rewardList,
  deleteReward,
  selectReward,
  addReward,
  markComplete, 
  selectedChore
}) => {
  return (
    <div>
      <p>Welcome to your account</p>
      <p>Chore To Do:</p>
      <ChoresToDo selectedChore={selectedChore} markComplete={markComplete}/>
      {/* <RewardList
        rewardList={rewardList}
        deleteReward={deleteReward}
        selectReward={selectReward}
      />
      <NewRewardForm addReward={addReward} /> */}
    </div>
  );
};

export default MemberAccount;
