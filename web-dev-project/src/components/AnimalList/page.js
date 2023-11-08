"use client"
import * as S from "./styles";
import Image from "next/image";
import cachorro from "@/assets/images/cachorro.png";
import gato from "@/assets/images/gato.png";
import passaro from "@/assets/images/passaro.png";
import peixe from "@/assets/images/peixe.png";
import roedor from "@/assets/images/roedor.png";
import Link from "next/link";
import { SlUser } from "react-icons/sl";

export const AnimalList = () => {
    return (
        <>
            <S.Content>
                <ul>
                <li><Link href="" target="_blank"><Image id="cachorro"  src={cachorro} alt="Imagem de um cachorro com uma legenda embaixo escrita 'cachorro'"></Image></Link></li>
                <li><Link href="" target="_blank"><Image id="gato" src={gato} alt="Imagem de um gato com uma legenda embaixo escrita 'gato'"></Image></Link></li>
                <li><Link href="" target="_blank"><Image id="passaro" src={passaro} alt="Imagem de um passaro com uma legenda embaixo escrita 'passaro'"></Image></Link></li>
                <li><Link href="" target="_blank"><Image id="peixe" src={peixe} alt="Imagem de um peixe com uma legenda embaixo escrita 'peixe'"></Image></Link></li>
                <li><Link href="" target="_blank"><Image id="roedor" src={roedor} alt="Imagem de um roedor com uma legenda embaixo escrita 'roedor'"></Image></Link></li>
                </ul>
            </S.Content>
        </>
    )
}