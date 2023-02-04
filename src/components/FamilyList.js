import PropTypes from "prop-types";
import {Link} from "react-router-dom";

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
      <Link to="/home" > {member.name}</Link>
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
