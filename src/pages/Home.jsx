import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux-toolkit/UserSlice";
import List from "./List";

const Home = () => {
  const NameInput = useRef();
  const id = useSelector((state) => state.counter.value);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const handleAdd = () => {
    if (name.trim() === "") {
      setErrors((preError) => ({ ...preError, name: "Name cannot be empty" }));
      NameInput.current.focus();
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
    const newUser = { id, name };
    
    dispatch(addUser(newUser));
    setName("");
    NameInput.current.focus();
  };

  return (
    <>
      <h1 className="text-center my-5">React Redux toolkit CRUD</h1>
      <div className="d-flex justify-content-center align-items-center">
        <form className="border rounded p-3 w-100">
          <input
            ref={NameInput}
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
