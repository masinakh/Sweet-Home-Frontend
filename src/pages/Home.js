import React from "react";
// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ChoreList from "../components/ChoreList";
import NewChoreForm from "../components/NewChoreForm";
import ChoresToDo from "../components/ChoresToDo";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "./Home.css";

const Home = ({
  choreList,
  deleteChore,
  addChore,
  member,
  selectChore,
  selectedChore,
  markComplete,
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
            <ChoreList
              choreList={choreList}
              deleteChore={deleteChore}
              selectChore={selectChore}
            />
          </div>
        </div>
        <div className="layout">
          <button>
            ✨
            <Link to="/memberAccount" className="link">
              REDEEM YOUR POINTS {member.points}
            </Link>
            ✨
          </button>
          <div className="choresToDo">
            <ChoresToDo
              selectedChore={selectedChore}
              markComplete={markComplete}
            />
          </div>
          <div className="newChoreForm">
            {member.is_parent ? (
              <NewChoreForm addChore={addChore} familyId={member.family_id} />
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
// Home.propTypes = {

//   addChore: PropTypes.func.isRequired,

// };

export default Home;
