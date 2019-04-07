import React, { useState } from "react";
import NavBar from "./NavBar";
import Front from "../pages/Front";
import DataExplorer from "../pages/DataExplorer";

//Using React Hooks

const MainContainer = props => {
  const [state, setState] = useState({
    currentPage: "DataExplorer"
  });  
  
  const handlePageChange = page => {
      setState({ ...state, currentPage: page });
  };
  
  const renderPage = () => {
      // const geography = this.state.geography;

      if (state.currentPage === "Front") {
        return <Front />;
      } else if (state.currentPage === "DataExplorer") {
        return <DataExplorer />;
      } 
    };
  
    return (
        <div className="container fluid">
          <NavBar
            currentPage={state.currentPage}
            handlePageChange={handlePageChange}
          />
          {renderPage()}
        </div>
    );
  }
  
  export default MainContainer;