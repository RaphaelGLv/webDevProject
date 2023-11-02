import styled from "styled-components";

export const Content = styled.a`
    box-sizing: border-box;
    border: none;
    height: 2rem;
    width: 5rem;
    margin: 1%;

    background-color: #376192;
    color: white;
    font-size: 1.7rem;
    text-decoration: none;

    display: flex;
    align-items: center;

    border-radius: 1rem;
    justify-content: center;
    gap: 2%;
    
    transition: ease-in-out 0.1s;
    #personIcon {
        height: 1rem;
        width: auto;
    }
    
    p {
        font-weight: 500;
        font-size: 1rem;
        height: fit-content;
        padding-right: 1%;
        margin: auto 0;
    }

    &:hover {
        transform: scale(1.15);
    }
`