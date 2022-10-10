import React from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

export default function AdminUsers({ allUsers }) {
  console.log("in admin users", allUsers);
  let th = ["Sr no", "first name ", "last name ", "email ", "date joined"];
  return (
    <Container className="border border-grey p-5 rounded shadow-lg">
      <h1>Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            {th.map((col, index) => {
              return <th>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>

                <td>{moment(user.joined).format("DD - MM - YYYY")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
