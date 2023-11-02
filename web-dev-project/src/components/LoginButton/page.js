'use client';

import * as S from "./styles";
import { SlUser } from "react-icons/sl";

export const LoginButton = () => {
    return (
            <S.Content href="./LoginPage">
                <SlUser id="personIcon" />
                <p>Entrar</p>
            </S.Content>
    )
}