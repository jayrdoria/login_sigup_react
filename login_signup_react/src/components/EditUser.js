import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get(`http://localhost/backend/api/index.php?id=${id}`)
      .then(function (response) {
        const infoTest = response.data.find((item) => item.id === id);
        console.log(infoTest);
        console.log(response.data);
        setInputs(response.data);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              value={inputs.email}
              className="form-control"
              name="email"
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" name="add" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
      <div className="col-2"></div>
    </div>
  );
}
