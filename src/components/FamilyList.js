import PropTypes from "prop-types";
const FamilyList = ({familyList, selectMember}) => {

  const familyNameList = [];
  for (const member of familyList) {
    familyNameList.push(
      <li
        key={member.id}
        onClick={() => {
          selectMember(member.id);
        }}
      >
        {member.name}
      </li>
    );
  }
  return (
    <div>
      <ul>{familyNameList}</ul>
    </div>
  );
};
FamilyList.propTypes = {
  familyList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectMember: PropTypes.func.isRequired,
};
export default FamilyList;
