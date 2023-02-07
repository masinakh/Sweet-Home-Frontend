import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FamilyList.css";

const FamilyList = ({ familyList, selectMember }) => {
  const familyNameList = [];
  for (const member of familyList) {
    familyNameList.push(
      <li
        key={member.id}
        onClick={() => {
          selectMember(member.id);
        }}
        className="button"
      >
        <Link to="/home" className="name-color"> {member.name}</Link>
      </li>
    );
  }
  return (
    <div>
      <ul className="list-style-type">{familyNameList}</ul>
    </div>
  );
};
FamilyList.propTypes = {
  familyList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectMember: PropTypes.func.isRequired,
};
export default FamilyList;
