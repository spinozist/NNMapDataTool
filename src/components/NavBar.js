import React from "react";

const NavBar = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Front")}
        className={
          props.currentPage === "Front" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("DataExplorer")}
        className={
          props.currentPage === "DataExplorer" ? "nav-link active" : "nav-link"
        }
      >
        Data Explorer
      </a>
    </li>
  </ul>
);

export default NavBar;
