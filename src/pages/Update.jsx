import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux-toolkit/UserSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const user = useSelector((state) =>
    state.user.find((user) => Number(user.id) === Number(id))
  );

  const [name, setName] = useState("");

  useEffect(() => {
    if (user) setName(user.name);
  }, [user]);

  const handleUpdate = () => {
    if (name.trim() === "") {
      setErrors((preError) => ({ ...preError, name: "Name cannot be empty" }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
    const updatedUser = { ...user, name };
    dispatch(updateUser(updatedUser));
    alert("User updated successfully");
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-center my-5">React Redux toolkit CRUD</h1>
      <h2>Update User</h2>
      <div className="border rounded p-3 w-100">
        <Link className="btn btn-primary mb-3 w-100" to="/">
          Back Home
        </Link>
        <input
          type="text"
          placeholder="Update name"
          className={`form-control mb-2 ${errors.name ? "is-invalid" : ""}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        <button
          type="button"
          className="btn btn-success w-100 my-2"
          onClick={handleUpdate}
        >
          Update User
        </button>
      </div>
    </div>
  );
};

export default Update;
