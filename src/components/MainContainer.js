import React, { Component } from "react";
import NavBar from "./NavBar";
import Front from "../pages/Front";
import DataExplorer from "../pages/DataExplorer";

class MainContainer extends Component {
    state = {
      currentPage: "Front",
      geography: '2010 Tracts'
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    renderPage = () => {
      const geography = this.state.geography

      if (this.state.currentPage === "Front") {
        return <Front />;
      } else if (this.state.currentPage === "DataExplorer") {
        return <DataExplorer 
                  url=
                  { geography === '2000 Tracts' ? "https://opendata.arcgis.com/datasets/03137f764f2b4b89b221ce7caf236456_50.geojson":
                    geography === '2010 Tracts' ? "https://opendata.arcgis.com/datasets/2e73cc4a02a441ba968e6a63a8b526f5_56.geojson": 
                    geography === 'Places' ? "https://opendata.arcgis.com/datasets/34520575dfc34b8cac783caff702b8cc_58.geojson" :
                    "https://opendata.arcgis.com/datasets/dc20713282734a73abe990995de40497_68.geojson"
                  }

                />;
      } 
    };
  
    render() {
      return (
        <div className="container fluid">
          <NavBar
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>
      );
    }
  }
  
  export default MainContainer;