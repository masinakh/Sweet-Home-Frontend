import React from "react";
import { useState, useEffect } from "react";
import ChoreList from "../components/ChoreList";
import FamilyList from "../components/FamilyList";

const Home = ({ choreList, familyList, deleteChore }) => {
  return (
    <div>
      <FamilyList familyList={familyList} />
      <ChoreList choreList={choreList} deleteChore={deleteChore} />
    </div>
  );
};

export default Home;
