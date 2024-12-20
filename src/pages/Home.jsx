import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux-toolkit/UserSlice";
import List from "./List";

const Home = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const handleAdd = () => {
    if (name.trim() === "") {
      setErrors((preError) => ({ ...preError, name: "Name cannot be empty" }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
    const newUser = { id: Date.now(), name };
    dispatch(addUser(newUser));
    setName("");
  };

  return (
    <>
      <h1 className="text-center my-5">React Redux toolkit CRUD</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form className="border rounded p-3 w-100">
          <input
            type="text"
            placeholder="Enter name"
            className={`form-control mb-2 ${errors.name ? "is-invalid" : ""}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          <button
            type="button"
            onClick={handleAdd}
            className="btn btn-primary w-100 my-2"
          >
            Add User
          </button>
        </form>
      </div>
      <List />
    </>
  );
};

export default Home;
