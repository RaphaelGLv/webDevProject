"use client";
import * as S from "./styles";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const MapDiv = () => {
    const position = [-22.120829152710662, -51.391215448030785];
    return (
        <>
            <S.Content>
                <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={position}
                        draggable={true}
                        animate={true}
                    >
                    <Popup>
                        Pet Love Box <br /> Aqui!
                    </Popup>
                    </Marker>
                </MapContainer>
            </S.Content>
        </>
    )
}