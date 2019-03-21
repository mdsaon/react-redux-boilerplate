import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsers,
} from "../../actions/usersAction";
import PropTypes from "prop-types";

class Users extends Component {
  render() {
    const { users } = this.props.user;
    const renderUser = users.map(user => (
      <ul className="user-lists" key={user.name}>
        <li><b>Name:</b> {user.name}</li>
        <li><b>Email:</b> {user.email}</li>
        <li><b>Country:</b> {user.country}</li>
      </ul>
    ));
    return (
        <div className="app-list">
          <h1 align="center">This is userlist</h1>
          {renderUser}
        </div>
    );
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.users
});
export default connect(
  mapStateToProps,
  { getUsers }
)(Users);