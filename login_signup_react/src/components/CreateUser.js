import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost/backend/api/index.php", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/dashboard/admin");
      });
  };

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
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
