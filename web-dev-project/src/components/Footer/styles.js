import styled from "styled-components";

export const Content = styled.div`
    padding-top: 2%;

    #main_div {
        position: absolute;
        width: 100%;
        box-sizing: border-box;
        background-color: #FFF7B4;
        bottom: 0;
        display: inline-flex;
        height: fit-content;
        align-items: center;
        justify-content: space-between;
    }
    
    #map_div {
        margin: 2rem 15% 2rem 5%;
        background: #211111;
        border-radius: 2rem;
        width: 40%;
        padding: 5%;
        height: 5rem;
    }

    p {
        color: white;
        padding: 2%;
        position: absolute;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        height: fit-content;
        }

    #links {
        position: relative;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 120%;
        line-height: 100%;
        width: 40%;
        margin-right: 5%;
    }

    a {
        text-decoration: none;
        color: #211111;
        transition: 0.3s;
        &:hover {
            opacity: 0.7;
        }
    }

`
