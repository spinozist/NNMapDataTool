import React, { Component } from "react";
import Map from "../components/maps";
// import API from "../utils/API";
// import ExampleChart from "../components/charts/ExampleChart"



class DataExplorer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: props.url
    }

    // this.getData = this.getData.bind(this);
    // this.getData(this.state.url);

  };

  // getData(url) {
  //   API.getData(url)
  //     .then(res => {
  //       // console.log(res.data.features)
  //       this.setState({
  //         geojson: res.data
  //       })
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <div className="jumbotron" id="data-explorer-page">
        <h1>Data Explorer</h1>
        <Map
          url={this.state.url}
        />
      </div>
    )
  }
};

export default DataExplorer;
