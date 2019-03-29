import React, { Component } from 'react'
import { Map as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';
import API from "../../utils/API";


class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

        this.getGeoJSON = this.getGeoJSON.bind(this);
    };

    getGeoJSON(url) {
        console.log(url)
        API.getData(url)
          .then(res => {
            // console.log(res.data.features)
            this.setState({
              geojson: res.data.features
            })
          })
          .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getGeoJSON(this.props.url);   
    }

    render() {
        console.log(this.state.geojson);
        return (
        <LeafletMap
            center={[33.785, -84.385]}
            zoom={6}
            maxZoom={18}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
        >
           
            { this.state.geojson ?
                <GeoJSON
                data={this.state.geojson}
                style={() => 
                    {
                    return ({
                    color: '#f5f5f5',
                    weight: 0.5,
                    fillColor: "#1a1d62",
                    fillOpacity: .8,
                    })
                }}
                />
                : null
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
    }
};

export default Map;