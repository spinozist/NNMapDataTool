import React, { useState, useEffect } from 'react'
import { Map as LeafletMap, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import API from "../../utils/API";
import colormap from 'colormap';
// import { stat } from 'fs';


const Map = props => {

  const [state, setState] = useState({
      geojson: null,
      selectedVariable: 'nhw_or10',
      normalizedBy: 'totpop10',
      geographyFilter: 'PLNG_REGIO',
      geographyFilterValue: 'ARC 10',
      url: props.url
  });

  const colors = colormap({
    colormap: 'cool',
    nshades: 10,
    format: 'hex',
    alpha: 1
  })

  const getGeoJSON = url => {
    console.log(url)

    API.getData(url)
      .then(res => {
      console.log(res.data.features)
      setState({
        ...state,
        geojson: res.data.features
      })
    })
      .catch(err => console.log(err))
  }

  useEffect(() => {getGeoJSON(state.url)}, [state.url]); 

    // componentDidMount(){
    //     this.getGeoJSON(this.props.url);   
    // }
  
  const valueArray = state.geojson ? state.geojson
    .filter(feature => feature.properties[state.selectedVariable])
    .map(feature => feature.properties[state.selectedVariable]/feature.properties[state.normalizedBy]) : null;
  const maxValue = valueArray !== null ? Math.max(...valueArray) : 'Value array not load yet';
  const minValue = valueArray !== null ? Math.min(...valueArray) : 'Value array not load yet';

  console.log(valueArray);
  console.log(maxValue);
  console.log(minValue);
  console.log(maxValue - minValue);
  console.log(state.geographyFilter);
  console.log(state.geographyFilterValue);
  console.log(colors);


  return (
    <LeafletMap
      center={[33, -83.5]}
      zoom={7}
      maxZoom={18}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
        
      { state.geojson ?
      <GeoJSON
        data={state.geographyFilter ? 
          state.geojson.filter(feature => 
            feature.properties[state.selectedVariable] > 0 && feature.properties[state.geographyFilter] === state.geographyFilterValue ) :
            state.geojson.filter(feature => feature.properties[state.selectedVariable] > 0)}
        style={feature => {
          // console.log(state.selectedVariable);
          const value = feature.properties[state.selectedVariable]/feature.properties[state.normalizedBy];
          // const opacity = value;
          const color = colors[Math.floor(value*10)]

          return ({
            color: '#1a1d62',
            weight: 0.4,
            fillColor: color,
            fillOpacity: .5,
          })
        }}
        onEachFeature={feature =>
          console.log(feature.properties.totpop10)}
      /> : null }
        
      <TileLayer
      // url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      >

      </TileLayer>

    </LeafletMap>

  );
};

export default Map;