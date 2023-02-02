import React from 'react'
import {useState , useEffect} from "react";
import ChoreList from "../components/ChoreList";
import FamilyList from '../components/FamilyList';



const Home = ({choreList, familyList}) => {
  return (
    <div>
      <ChoreList choreList={choreList}/>
      <FamilyList familyList ={familyList}/>
    </div>
  )
}

export default Home