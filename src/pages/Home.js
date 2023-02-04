import React from "react";
import { useState, useEffect } from "react";
import ChoreList from "../components/ChoreList";
import NewChoreForm from "../components/NewChoreForm";

const Home = ({ choreList, deleteChore, addChore }) => {
  return (
    <div>
      <ChoreList choreList={choreList} deleteChore={deleteChore} />
      <NewChoreForm addChore={addChore}/>
    </div>
  );
};

export default Home;
