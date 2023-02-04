import React from "react";
import NewFamilyMemberForm from "../components/NewFamilyMemberForm";

const AddFamilyMember = ({ addMember, createNewFamily, familyId }) => {
  return (
    <div>
      <NewFamilyMemberForm
        addMember={addMember}
        createNewFamily={createNewFamily}
        familyId={familyId}
      />
    </div>
  );
};

export default AddFamilyMember;
