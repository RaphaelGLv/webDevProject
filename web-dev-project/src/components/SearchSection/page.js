"use client";
import * as S from "./styles";
import { SlMagnifier } from "react-icons/sl";
import {SlHandbag} from "react-icons/sl";
import { SlHeart } from "react-icons/sl";


export const SearchSection = () => {
    return(
        <>
            <S.Content>
                <div class = "allSection">
 
                    <div class = "container">
                            
                            <SlMagnifier class ="Searchicon"/>
                            <input class="searchInput" type="text" placeholder="O que seu pet precisa?">      
                            </input>
                    </div>
                    <div class ="icons">
                        <SlHeart id ="heart"/>
                        <SlHandbag id ="handbag"/>
                    </div>
                </div>
            </S.Content>
        </>
    )
}