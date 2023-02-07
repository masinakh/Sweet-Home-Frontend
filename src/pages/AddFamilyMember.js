import React from "react";
import NewFamilyMemberForm from "../components/NewFamilyMemberForm";
import FamilyList from "../components/FamilyList";

const AddFamilyMember = ({ addMember, familyId, familyList, selectMember }) => {
  return (
    <div>
      <NewFamilyMemberForm addMember={addMember} familyId={familyId} />

      <FamilyList familyList={familyList} selectMember={selectMember} />
    </div>
  );
};

export default AddFamilyMember;
