import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/usersAction";
import PropTypes from "prop-types";
const UserList = ({user}) => {
    const renderUser = user.users.map(user => (
        <ul className="user-lists" key={user.name}>
          <li><b>Name:</b> {user.name}</li>
          <li><b>Email:</b> {user.email}</li>
          <li><b>Country:</b> {user.country}</li>
        </ul>
      ));
  return <div>Hello User from Functional Component {renderUser}</div>;
};
UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.users
});
export default connect(
  mapStateToProps,
  { getUsers }
)(UserList);
