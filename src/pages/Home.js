import React from 'react'
import {useState , useEffect} from "react";
import ChoreList from "ChoreList";

const Home = ({choreList}) => {
  return (
    <div>
      <ChoreList choreList={choreList}/>
    </div>
  )
}

export default Home