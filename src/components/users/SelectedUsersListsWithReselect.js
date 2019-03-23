import React from "react";
import { usersSelector, usersWithName } from '../../selectors/users_selector';
import { connect } from 'react-redux';
const SelectedUsersListsWithReselect = ({withName}) => {
    const renderUserWithName = withName.map(user => (
        <ul className="user-lists" key={user.name}>
          <li><b>Name:</b> {user.name}</li>
          <li><b>Email:</b> {user.email}</li>
          <li><b>Country:</b> {user.country}</li>
        </ul>
      ));
  return (
    <div>
      <h1>Selected User With Reselect</h1>
      {renderUserWithName}
    </div>
  );
};
const mapStateToProps = (state) => {
return {
    users:usersSelector(state.users),
    withName:usersWithName(state.users),
}
}
export default connect(mapStateToProps)(SelectedUsersListsWithReselect);
