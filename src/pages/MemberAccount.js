import React from "react";
// import {useState , useEffect} from "react";
import RewardList from "../components/RewardList";
import NewRewardForm from "../components/NewRewardForm";
import ChoresToDo from "../components/ChoresToDo";
import MemberSelectedRewards from "../components/MemberSelectedRewards";
import Nav from "../components/Nav";
import "./MemberAccount.css"

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

  return (
    <div className="memberAccountContainer">
      <div className="nav"><h2>Welcome {member.name}</h2><Nav member={member}></Nav></div>
      <div className="points"><h3>✨ YOUR POINTS: {member.points} ✨</h3></div>
      <div className="choresToDo"><ChoresToDo selectedChore={selectedChore} markComplete={markComplete} /></div>
      <div className="rewardList"><RewardList
        rewardList={rewardList}
        deleteReward={deleteReward}
        selectReward={selectReward}
          />
      </div>
      <div className="newRewardForm">{member.is_parent ? (
        <NewRewardForm addReward={addReward} familyId={member.family_id} />
      ) : (
        <div></div>
      )}
      </div>

      <div className="memberSelectedReward"><MemberSelectedRewards
        selectedReward={selectedReward}
        name={member.name}
      />
      </div>
    </div>
  );
};

export default MemberAccount;
