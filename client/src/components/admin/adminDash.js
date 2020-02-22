import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import axiosWithAuth from "../../authentication/axiosWithAuth";

export default class adminDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axiosWithAuth()
      .get("/admin/users")
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <>
        <nav className="navbar">
          <Link to="/admin/newuser" className="navLink">
            {" "}
            Add New User
          </Link>
          <Link to="/admin" className="navLink">
            View All Users
          </Link>
        </nav>

        <section>
          {this.state.users.map(user => (
            <Card key={user.id} userList={user} />
          ))}
        </section>
      </>
    );
  }
}

const Card = props => {
  console.log("props: ", props);
  const { username, department, role } = props.userList;
  return (
    <article className="card">
      <p>Username: {username}</p>
      <p>Department: {department} </p>
      <p>Role: {role} </p>
    </article>
  );
};
