import React, { useState, useEffect } from 'react'
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';
import API from "../../utils/API";
// import { stat } from 'fs';


const Map = props => {

  const [state, setState] = useState({
      geojson: null,
      selectedVariable: 'nhw_or10',
      normalizedBy: 'totpop10',
      geographyFilter: null,
      geographyFilterValue: null
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

  useEffect(() => {getGeoJSON(props.url)}, [props.url]); 


    // componentDidMount(){
    //     this.getGeoJSON(this.props.url);   
    // }
  
  const valueArray = state.geojson ? state.geojson.map(feature => feature.properties[state.selectedVariable]/feature.properties[state.normalizedBy]) : null;
  const maxValue = valueArray !== null ? Math.max(...valueArray) : 'Value array not load yet';
  const minValue = valueArray !== null ? Math.min(...valueArray) : 'Value array not load yet';

  console.log(valueArray);
  console.log(maxValue);
  console.log(minValue);
  console.log(maxValue - minValue)


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
        data={state.geojson.filter(feature => feature.properties[state.geographyFilter] === feature.properties[state.geographyFilterValue] )}
        style={feature => 
          {
            // console.log(state.selectedVariable);
            const value = feature.properties[state.selectedVariable]/feature.properties[state.normalizedBy];
            const opacity = value;
            // console.log(popDensity);
            
            // if (popDensity > 500) {
            //   return ({
            //     color: '#f5f5f5',
            //     weight: 0.5,
            //     fillColor: "#1a1d62",
            //     fillOpacity: .8,
            //   })
            // }
            // else if (popDensity > 400) {
            //   return ({
            //     color: '#f5f5f5',
            //     weight: 0.5,
            //     fillColor: "#1a1d62",
            //     fillOpacity: .7,
            //   })
            // }
            // else if (popDensity > 300) {
            //   return ({
            //     color: '#f5f5f5',
            //     weight: 0.5,
            //     fillColor: "#1a1d62",
            //     fillOpacity: .6,
            //   })
            // }
            // else if (popDensity > 200) {
            //   return ({
            //     color: '#f5f5f5',
            //     weight: 0.5,
            //     fillColor: "#1a1d62",
            //     fillOpacity: .5,
            //   })
            // } else {
            //   return ({
            //     color: '#f5f5f5',
            //     weight: 0.5,
            //     fillColor: "#1a1d62",
            //     fillOpacity: .4,
            //   })
            // }

              return ({
                color: '#1a1d62',
                weight: 0.5,
                fillColor: "#1a1d62",
                fillOpacity: opacity,
              })
            
      }}
      /> : null
 }
        
        <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'>

        </TileLayer>


        {/* <Marker position={[50, 10]}>
        <Popup>
            Popup for any custom information.
        </Popup>
        </Marker> */}
    </LeafletMap>
);
};

export default Map;