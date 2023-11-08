"use client";
import * as S from "./style.js";
import Image from "next/image.js";
import racao from "@/assets/svg/racao.svg";
import petiscos from "@/assets/svg/petiscos.svg";
import brinquedo from "@/assets/svg/brinquedo.svg";
import roupas from "@/assets/svg/roupas.svg";

export const CategoriasSection = () => {
    return (
        <S.Content>
            <S.Text>
                <h1 id="title">Categorias</h1>
                <a id="seeAll" href="">Ver tudo</a>
            </S.Text>

            <S.Cards>
                <div id="card">
                    <h2 id="cardTitle">Rações</h2>
                    <div id="cardContent">
                        <Image id="image" src={racao} alt="Imagens de ração" />
                    </div>
                </div>

                <div id="card">
                    <h2 id="cardTitle">Petiscos</h2>
                    <div id="cardContent">
                        <Image id="image" src={petiscos} alt="Imagens de ração" />
                    </div>
                </div>

                <div id="card">
                    <h2 id="cardTitle">Brinquedos</h2>
                    <div id="cardContent">
                        <Image id="image" src={brinquedo} alt="Imagens de ração" />
                    </div>
                </div>

                <div id="card">
                    <h2 id="cardTitle">Roupas</h2>
                    <div id="cardContent">
                        <Image id="image" src={roupas} alt="Imagens de ração" />
                    </div>
                    </div>
            </S.Cards>
        </S.Content>
    )
}