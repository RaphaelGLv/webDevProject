"use client";

import * as S from "./styles";
import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
  
export default class NextJsCarousel extends Component { 
    render() { 
        return ( 
            <S.Content>
              <Carousel> 
                  <div id="div1"> 
                      <img src="./carouselImages/image1.svg" alt="Descontos de até 50%" /> 
                  </div>
                  <a href="/LoginPage">
                    <div>
                        <img src="./carouselImages/image2.svg" alt="Junte-se a nossa comunidade Pet Love Box" />
                    </div> 
                  </a> 
                  <div> 
                      <img src="./carouselImages/image3.svg" alt="Equipamentos para a casa" />   
                  </div> 

              </Carousel> 
            </S.Content>
        ); 
    } 
};