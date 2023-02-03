import React from "react";
import NewFamilyMemberForm from "../components/NewFamilyMemberForm";

const AddFamilyMember = ({ addMember, createNewFamily }) => {
  return (
    <div>
      <NewFamilyMemberForm
        addMember={addMember}
        createNewFamily={createNewFamily}
      />
    </div>
  );
};

export default AddFamilyMember;
