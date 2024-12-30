import React from "react";
import { Link, Outlet } from "react-router-dom";
import { toggleTheme } from "../redux-toolkit/themeSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Layout() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();
  return (
    <>
      <ul className={`nav justify-content-center bg-${theme}`}>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={() => dispatch(toggleTheme())} className="nav-link text-white">{theme}</button>
        </li>
      </ul>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
