import React from "react";
// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ChoreList from "../components/ChoreList";
import NewChoreForm from "../components/NewChoreForm";
import { Link } from "react-router-dom";

const Home = ({ choreList, deleteChore, addChore, member, selectChore }) => {
  return (
    <div>
      <Link to="/memberAccount">My Account</Link>
      <p>Welcome {member.name}</p>
      <p>your total points is {member.points}</p>
      <ChoreList
        choreList={choreList}
        deleteChore={deleteChore}
        selectChore={selectChore}
      />
      {member.is_parent ? (
        <NewChoreForm addChore={addChore} familyId={member.family_id} />
      ) : (
        <div></div>
      )}
    </div>
  );
};
// Home.propTypes = {

//   addChore: PropTypes.func.isRequired,

// };

export default Home;
