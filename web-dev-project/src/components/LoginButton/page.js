import { Poppins } from "next/font/google";
import * as S from "./styles";
import Image from "next/image";
import personIcon from "@/assets/svg/personIcon.svg"

export const LoginButton = () => {
    return (
        <S.Content onClick={console.log("url da pagina de login aqui!")}>
            <Image id="personIcon" src={personIcon} alt=""></Image>
            <p>Entrar</p>
        </S.Content>
    )
}