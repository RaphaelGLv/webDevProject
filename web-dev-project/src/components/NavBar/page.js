"use client";
import { Poppins } from "next/font/google";
import * as S from "./styles";
import Image from "next/image";
import logo from "@/assets/svg/logo.svg";
import { LoginButton } from "../LoginButton/page";

export const NavBar = () => {

    return (
        <S.Content>
            <Image id="logo" src={logo} alt="Uma pata de cachorro com um coração no meio, a logo do site"></Image>
            <LoginButton></LoginButton>
        </S.Content>
    )
}