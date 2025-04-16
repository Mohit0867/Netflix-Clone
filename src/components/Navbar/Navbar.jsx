import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search/${search}`);
  };
  return (
    <div className="d-flex justify-content-between align-items-center w-100 main-nav ">
      <Link className="nav-link text-dark " to="/">
        {/* <img className="main-logo" src="netflix_logo1.png" alt="logo" /> */}
        <p className="main-logo text-type text-light">N</p>
      </Link>
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav w-50 gap-5 d-flex justify-content-evenly align-items-center ps-5  text-type">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/"
                style={{ fontWeight: "700", fontSize: "1.1rem" }}
              >
                Home
              </Link>
              <Link
                className="nav-link text-white "
                style={{ fontWeight: "700", fontSize: "1.1rem" }}
                to="/Movies"
              >
                Movies
              </Link>
              <Link
                className="nav-link text-white "
                style={{ fontWeight: "700", fontSize: "1.1rem" }}
                to="/Series"
              >
                Series
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar ">
        <div className="container-fluid">
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search your favt. Movie"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-outline border search text-light bg-black text-type"
              type="submit"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Navbar;
