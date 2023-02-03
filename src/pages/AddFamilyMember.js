import React from 'react'
import NewFamilyMemberForm from '../components/NewFamilyMemberForm'

const AddFamilyMember = ({addMember}) => {
  return (
    <div>
      <NewFamilyMemberForm addMember={addMember}/>
    </div>
  )
}

export default AddFamilyMember