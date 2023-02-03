import React from "react";
import { useState, useEffect } from "react";
import ChoreList from "../components/ChoreList";
import FamilyList from "../components/FamilyList";
import NewChoreForm from "../components/NewChoreForm";

const Home = ({ choreList, familyList, deleteChore, addChore }) => {
  return (
    <div>
      <FamilyList familyList={familyList} />
      <ChoreList choreList={choreList} deleteChore={deleteChore} />
      <NewChoreForm addChore={addChore}/>
    </div>
  );
};

export default Home;
