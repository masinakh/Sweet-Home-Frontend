import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ChoreList from "../components/ChoreList";
import NewChoreForm from "../components/NewChoreForm";

const Home = ({ choreList, deleteChore, addChore, member, selectChore }) => {
  return (
    <div>
      <p>Welcome {member.name}</p>
      <p>your total points is {member.points}</p>
      <ChoreList choreList={choreList} deleteChore={deleteChore} selectChore={selectChore} />
      <NewChoreForm addChore={addChore} familyId={member.family_id}/>
    </div>
  );
};
Home.propTypes = {
  
  addChore:PropTypes.func.isRequired,
  
};

export default Home;
