import React, { Component } from 'react';
import L from 'leaflet';


class MapComponent extends Component {
    componentDidMount() {
      // Only create the map if it hasn't been created yet
      if (!this.map) {
        // Create a new Leaflet map centered on a default location
        this.map = L.map('map').setView([51.505, -0.09], 13);
  
        // Add a tile layer to the map using an open source provider
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(this.map);
      }
    }
  
    render() {
      return (
        <div id="map"></div>
      );
    }
  }
  
  
  

export default MapComponent;



