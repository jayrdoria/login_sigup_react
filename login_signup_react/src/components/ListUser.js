import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("https://localhost/backend/api/index.php")
      .then(function (response) {
        console.log("API response:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }
  return (
    <div className="row">
      <div className="col-12">
        <div className="text-center">
          <Link to="create" className="btn btn-success">
            Add New User
          </Link>
        </div>
        <h1>List Users</h1>
        <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Reg_Date</th>
              <th>Permission</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.reg_date}</td>
                <td>{user.permission}</td>
                <td>
                  <Link to={`edit?id=${user.id}`} className="btn btn-success">
                    Edit
                  </Link>
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
