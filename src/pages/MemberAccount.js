import React from "react";
// import {useState , useEffect} from "react";
import RewardList from "../components/RewardList";
import NewRewardForm from "../components/NewRewardForm";
import ChoresToDo from "../components/ChoresToDo";
import MemberSelectedRewards from "../components/MemberSelectedRewards";
import Nav from "../components/Nav";

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
      <Nav member={member}></Nav>
      <p>Welcome to your account</p>
      <p>your total points is {member.points}</p>
      <p>Chore To Do:</p>
      <ChoresToDo selectedChore={selectedChore} markComplete={markComplete} />

      <RewardList
        rewardList={rewardList}
        deleteReward={deleteReward}
        selectReward={selectReward}
      />
      {member.is_parent ? (
        <NewRewardForm addReward={addReward} familyId={member.family_id} />
      ) : (
        <div></div>
      )}

      <MemberSelectedRewards
        selectedReward={selectedReward}
        name={member.name}
      />
    </div>
  );
};

export default MemberAccount;
