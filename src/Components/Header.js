import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ADD8E6' }}> 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Pushed to right using ms-auto */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          {/* Conditionally render the search bar. Logic for filtering not covered here */}
          {props.searchBarShow && (
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchBarShow: PropTypes.bool, // Ensure searchBarShow is defined as a boolean
};

export default Header;
