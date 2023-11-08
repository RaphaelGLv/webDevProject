"use client";
import { Poppins } from "next/font/google";
import * as S from "./styles";
import { MapDiv } from "../Map/page";

export const Footer = () => {
    return (
        <>
            <S.Content>
                <div id="main_div" alt="retângulo principal">
                    <div id="map_div" alt="retângulo em torno do mapa">
                        <p>Nossa localização</p>
                        <MapDiv />  
                    </div>
                    <div id="links">
                        <a href="https://www.google.com/search?q=termos+e+condi%C3%A7%C3%B5es&sca_esv=59c3c7ae86608ddb&ei=blVBZfDcFOWKwbkPzpajuAM&ved=0ahUKEwjwy8vOgqGCAxVlRTABHU7LCDcQ4dUDCBE&uact=5&oq=termos+e+condi%C3%A7%C3%B5es&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHRlcm1vcyBlIGNvbmRpw6fDtWVzMgUQABiABDIFEAAYgAQyBRAuGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiyKFD2A1iOJ3ABeAGQAQCYAfEBoAHUD6oBBjAuMTAuMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQABiKBRiwAxhDwgIHEAAYigUYQ8ICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHiAwQYACBBiAYBkAYJ&sclient=gws-wiz-serp" id="termos_e_condicoes">Termos e Condições</a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a href="https://www.google.com/search?q=pol%C3%ADtica+de+privacidade&sca_esv=59c3c7ae86608ddb&ei=dVVBZdq8N6CawbkP3pGhgAY&ved=0ahUKEwiay5nSgqGCAxUgTTABHd5ICGAQ4dUDCBE&uact=5&oq=pol%C3%ADtica+de+privacidade&gs_lp=Egxnd3Mtd2l6LXNlcnAiGHBvbMOtdGljYSBkZSBwcml2YWNpZGFkZTIFEAAYgAQyCxAAGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI8zNQqQRY7DJwBXgBkAEAmAHPAaAByCWqAQYwLjIzLjO4AQPIAQD4AQGoAhTCAhAQABiKBRjqAhi0AhhD2AEBwgIQEC4YigUY6gIYtAIYQ9gBAcICFhAAGAMYjwEY5QIY6gIYtAIYjAPYAQLCAhYQLhgDGI8BGOUCGOoCGLQCGIwD2AECwgIHEAAYigUYQ8ICCBAuGIAEGLEDwgINEAAYigUYsQMYgwEYQ8ICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYyQPCAg4QLhiABBixAxjHARjRA8ICCBAAGIoFGJIDwgIGEAAYFhgewgIIEAAYFhgeGA_CAgoQABgWGB4YDxgKwgIHEAAYDRiABMICCxAAGBYYHhjxBBgKwgINEAAYFhgeGA8Y8QQYCuIDBBgAIEGIBgG6BgQIARgHugYGCAIQARgK&sclient=gws-wiz-serp" id="politica_de_privacidade">Política de Privacidade</a>
                    </div>
                </div>
            </S.Content>
        </>       
    )
}