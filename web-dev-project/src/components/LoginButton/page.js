import { Poppins } from "next/font/google";
import * as S from "./styles";
import Image from "next/image";
import personIcon from "@/assets/svg/personIcon.svg"
import { SlUser } from "react-icons/sl";

export const LoginButton = () => {
    return (
        <S.Content>
            <SlUser id="personIcon" />
            <p>Entrar</p>
        </S.Content>
    )
}