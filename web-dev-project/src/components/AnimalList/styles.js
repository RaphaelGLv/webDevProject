import styled from "styled-components";

export const Content = styled.div`
    padding: 2%;
    list-style: none;
    font-size: 62.5%;
    /* margin: 0rem 10rem 0rem 10rem; */
    
    ul{
        display: flex ;
        flex-wrap: nowrap;
        margin: 0;
        padding: 0;
        width: 100%; /*90%*/
        justify-content: space-evenly;
        text-align: center;
    }

    li {
        display: block;
        flex-wrap: wrap;
        /* width: 100%; */
        /* justify-content: space-between; */
    }

    img {
        width: 6.5vmax;
        height: auto;         /*tamanho planejado era 8 rem*/
        object-fit: contain;
        transition: transform 0.1s;
        margin-top: 0;
     /*   margin-top: calc(1vmax + 2px); Caso a margem de cima não esteja responsiva*/

    }
    & img:hover {
        transform: scale(1.15);
        
    }
    @media (max-width: 768px) {
        li {
            margin: 0 0.5rem;
        }
        img {
            margin-top: 0.5rem; 
              /* Margem superior em relação à altura da imagem caso TOP bugue:
              margin-top: calc(1vmax + 2px); /* Ajuste conforme necessário */
              
        }
    }

  
`