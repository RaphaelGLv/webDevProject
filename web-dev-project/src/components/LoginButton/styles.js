import styled from "styled-components";

export const Content = styled.button`
    box-sizing: border-box;
    border: none;
    height: 1.5rem;
    width: 5rem;
    margin: 1%;
    background-color: #376192;
    color: white;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    border-radius: 1rem;
    justify-content: center;
    transition: ease-in-out 0.1s;
    gap: 2%;

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