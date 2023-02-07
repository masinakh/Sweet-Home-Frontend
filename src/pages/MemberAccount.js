import React from "react";
// import {useState , useEffect} from "react";
import RewardList from "../components/RewardList";
import NewRewardForm from "../components/NewRewardForm";
import ChoresToDo from "../components/ChoresToDo";
import MemberSelectedRewards from "../components/MemberSelectedRewards";

const MemberAccount = ({
  rewardList,
  selectedReward,
  deleteReward,
  selectReward,
  addReward,
  markComplete,
  selectedChore,
  member,
}) => {
  console.log("hello ", member.familyId);
  return (
    <div>
      <p>Welcome to your account</p>
      <p>Chore To Do:</p>
      <ChoresToDo selectedChore={selectedChore} markComplete={markComplete} />

      <RewardList
        rewardList={rewardList}
        deleteReward={deleteReward}
        selectReward={selectReward}
      />
      <NewRewardForm addReward={addReward} familyId={member.family_id} />
      <MemberSelectedRewards
        selectedReward={selectedReward}
        name={member.name}
      />
    </div>
  );
};

export default MemberAccount;
