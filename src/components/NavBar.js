import React from "react";

const NavBar = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <div
        onClick={() => props.handlePageChange("Front")}
        className={
          props.currentPage === "Front" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </div>
    </li>
    <li className="nav-item">
      <div
        onClick={() => props.handlePageChange("DataExplorer")}
        className={
          props.currentPage === "DataExplorer" ? "nav-link active" : "nav-link"
        }
      >
        Data Explorer
      </div>
    </li>
  </ul>
);

export default NavBar;
