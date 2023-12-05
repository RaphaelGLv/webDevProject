"use client";
import * as S from "./styles.js";
import { Map } from "../Map/page.js";
import dynamic from 'next/dynamic';

const DynamicHeader = dynamic(() => import('../Map/page.js'), {
    ssr: false,
  })

export const Footer = () => {
    return (
        <>
            <S.Content>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                crossorigin=""/>
                <div id="main_div" alt="retângulo principal">
                    <div id="map_div" alt="retângulo em torno do mapa">
                        <p>Nossa localização</p>
                        <div id="moldura">
                            <Map />
                        </div>
                    </div>
                    <div id="links">
                        <a id="footerLinks" href="">Termos e Condições</a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a id="footerLinks" href="">Política de Privacidade</a>
                    </div>
                </div>
            </S.Content>
        </>       
    )
}