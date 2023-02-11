import React from "react";
import RewardList from "../components/RewardList";
import NewRewardForm from "../components/NewRewardForm";
import MemberSelectedRewards from "../components/MemberSelectedRewards";
import Nav from "../components/Nav";
import "./Home.css";

const MemberAccount = ({
  rewardList,
  selectedReward,
  deleteReward,
  selectReward,
  addReward,
  member,
}) => {
  return (
    <div>
      <div className="nav">
        <div className="welcome">
          <h2>Welcome {member.name}</h2>
        </div>
        <Nav member={member}></Nav>
      </div>
      <div className="homeContainer">
        <div>
          <div className="choreList">
            <RewardList
              rewardList={rewardList}
              deleteReward={deleteReward}
              selectReward={selectReward}
            />
          </div>
        </div>
        <div className="layout">
          <p class="layout__title">✨ YOUR POINTS: {member.points} ✨</p>
          <div className="choresToDo">
            <MemberSelectedRewards
              selectedReward={selectedReward}
              name={member.name}
            />
          </div>
          <div className="newChoreForm">
            {member.is_parent ? (
              <NewRewardForm
                addReward={addReward}
                familyId={member.family_id}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberAccount;
