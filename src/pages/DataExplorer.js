import React, { useState } from "react";
import Map from "../components/maps";
// import API from "../utils/API";
// import ExampleChart from "../components/charts/ExampleChart"



const DataExplorer = props => {

  const [geography, setGeography] = useState('2010 Tracts')

  const geojsonURLs = {
    '2000 Tracts': "https://opendata.arcgis.com/datasets/03137f764f2b4b89b221ce7caf236456_50.geojson",
    '2010 Tracts' : "https://opendata.arcgis.com/datasets/2e73cc4a02a441ba968e6a63a8b526f5_56.geojson",
    'Places' : "https://opendata.arcgis.com/datasets/34520575dfc34b8cac783caff702b8cc_58.geojson",
    'Counties' : "https://opendata.arcgis.com/datasets/dc20713282734a73abe990995de40497_68.geojson",
  };

  // const handleGeographyChange = event => {
    
  // }

  // const [state, setState] = useState({
  //   url: props.url
  // });

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

  return (
    <div className="jumbotron" id="data-explorer-page">
      {/* <h1>Data Explorer</h1> */}
      <Map
        url={geojsonURLs[geography]}
      />
    </div>
  )
};

export default DataExplorer;
