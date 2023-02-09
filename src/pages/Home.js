import React from "react";
// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ChoreList from "../components/ChoreList";
import NewChoreForm from "../components/NewChoreForm";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./Home.css"


const Home = ({ choreList, deleteChore, addChore, member, selectChore }) => {
  return (
    <div className="homeContainer">
      <div className="nav"><h2>Welcome {member.name}</h2><Nav member={member}></Nav></div>
      <div className="points"><h3>✨ YOUR POINTS: {member.points} ✨</h3></div>
      <div className="choreList"><ChoreList
        choreList={choreList}
        deleteChore={deleteChore}
        selectChore={selectChore}
        />
      </div>
      <div className="newChoreForm">{member.is_parent ? (
        <NewChoreForm addChore={addChore} familyId={member.family_id} />
      ) : (
        <div></div>
      )}
      </div>
    </div>
  );
};
// Home.propTypes = {

//   addChore: PropTypes.func.isRequired,

// };

export default Home;
