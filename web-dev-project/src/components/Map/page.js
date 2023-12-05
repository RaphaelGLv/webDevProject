"use client";
import * as S from "./styles.js";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export const Map = () => {
  return (
    <>  
      <MapContainer 
      id="mapcontainer"
      center={[-22.120790988759293, -51.40817962014093]}
      zoom={16}
      scrollWheelZoom={true}
      style={{height:'80%',  width:'100%'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-22.120790988759293, -51.40817962014093]}>
          <Popup>
            Pet Love Box<br />Aqui!
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}