import React from "react";
import { Link } from "react-router-dom";
import Create_Users from "./Create_Users";
import { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      const users = await axios.get(
        "https://635914fdc27556d2894b2f63.mockapi.io/api/user"
      );

      setUsers(users.data);
    } catch (error) {
      alert("error");
    }
  };

  let deleteUser = () => {
    const result = window.confirm("Are you sure do you want to delete..?");
    if (result) {
      alert("deleted..!");
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Tables</h1>
          <Link
            to={"/portal/Create_Users"}
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-envelope fa-sm text-white-50"></i> Create User
            Account
          </Link>
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              DataTables Example
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Phone No</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Phone No</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((users) => {
                    return (
                      <tr>
                        <td>{users.id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td>{users.city}</td>
                        <td>{users.state}</td>
                        <td>{users.country}</td>
                        <td>{users.gender}</td>
                        <td>{users.dob}</td>
                        <td>{users.phone}</td>
                        <td>
                          <Link
                            to={`/portal/User/${users.id}`}
                            className="btn btn-warning mr-1"
                          >
                            View
                          </Link>
                          <Link
                            to={`/portal/Create_Users`}
                            className="btn btn-success mr-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteUser()}
                            className="btn btn-danger mr-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <img
          className="user-img"
          src="https://cdn.xxl.thumbs.canstockphoto.com/administration-and-computer-mouse-rendered-artwork-with-white-background-picture_csp10524671.jpg"
        />
      </div>
    </>
  );
}

export default Users;
