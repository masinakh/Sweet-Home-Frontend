import React from "react";
import NewFamilyMemberForm from "../components/NewFamilyMemberForm";
import FamilyList from "../components/FamilyList";
import "./AddFamilyMember.css"

const AddFamilyMember = ({ addMember, familyId, familyList, selectMember }) => {
  return (
    <div className="container">
      <div className="family-form" ><NewFamilyMemberForm addMember={addMember} familyId={familyId} /></div>
      <div className="family-list" ><FamilyList familyList={familyList} selectMember={selectMember} /></div>
    </div>
  );
};

export default AddFamilyMember;
