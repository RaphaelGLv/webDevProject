"use client";
import * as S from "./styles.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';

export const Map = () => {
  const legalIcon = new Icon ({
    iconUrl : './logo.svg',
    iconSize : [25,25]
  })

  return (
    <>
      <MapContainer
        id="mapcontainer"
        center={[-22.120790988759293, -51.40817962014093]}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: '80%', width: '100%'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-22.120790988759293, -51.40817962014093]} icon={legalIcon}>
          <Popup>
            <h4>Nós estamos aqui!</h4>
            <S.Route
            href="https://www.google.com.br/maps/dir//FCT+-+Faculdade+de+Ci%C3%AAncias+e+Tecnologia+-+C%C3%A2mpus+de+Presidente+Prudente+-+Unesp+-+R.+Roberto+S%C3%ADmonsen,+305+-+Centro+Educacional,+Pres.+Prudente+-+SP,+19060-900/@-22.1208854,-51.4107116,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9493f43f0ff7f359:0x3ff5d10b95e4acbf!2m2!1d-51.4081367!2d-22.1208904?entry=ttu"
            target="_blank"
            >Rotas</S.Route>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}