import React from 'react'
// import {useState , useEffect} from "react";
import RewardList from "../components/RewardList";



const MemberAccount = ({rewardList}) => {
  return (
    <div>
      <RewardList rewardList={rewardList}/>
    </div>
  )
}

export default  MemberAccount