import React from "react";
import { usersSelector } from '../../selectors/users_selector';
import { connect } from 'react-redux';
const UserListsWithReselect = ({users}) => {
    const renderUser = users.map(user => (
        <ul className="user-lists" key={user.name}>
          <li><b>Name:</b> {user.name}</li>
          <li><b>Email:</b> {user.email}</li>
          <li><b>Country:</b> {user.country}</li>
        </ul>
      ));
  return (
    <div>
      <h1>Select User With Reselect</h1>
      {renderUser}
    </div>
  );
};
const mapStateToProps = (state) => {
return {
    users:usersSelector(state.users),
}
}
export default connect(mapStateToProps)(UserListsWithReselect);
