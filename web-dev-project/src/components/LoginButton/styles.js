import styled from "styled-components";

export const Content = styled.div`
    box-sizing: border-box;
    height: 4vmax;
    width: 10vmax;;
    margin: 2%;
    background-color: #376192;
    color: white;
    font-size: 1.7vmax;
    display: flex;
    align-items: center;
    border-radius: 1vmax;
    justify-content: center;

    #personIcon {
        height: 2.5vmax;
        width: auto;
    }

    p {
        height: fit-content;
        padding-right: 1%;
    }
`