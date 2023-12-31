import styled from "styled-components";

export const Content = styled.div`
    padding-top: 2%;

    #main_div {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        background-color: #FFF7B4;
        bottom: 0;
        display: inline-flex;
        height: fit-content;
        align-items: center;
        justify-content: space-between;
        padding: 2% 0;
    }
    
    #map_div {
        margin: 1rem 0 1rem 5%;
        background: #211111;
        border-radius: 2rem 2rem 0 0;
        box-sizing: border-box;
        width: 30rem;
        padding: 1.5rem;
        height: 18rem;
    }

    p {
        text-align: left;
        color: white;
        padding-bottom: 1rem;
        position: relative;
        font-style: normal;
        font-weight: 400;
        font-size: clamp(0.8em, 2vw, 5em);
        height: fit-content;
    }

    #links {
        position: relative;
        font-style: normal;
        font-weight: 400;
        font-size: 120%;
        line-height: 100%;
        width: 40%;
        margin: auto;
        text-align: center;
        padding: 0 1rem;
    }

    a {
        text-decoration: none;
        color: #211111;
        transition: 0.3s;
        &:hover {
            opacity: 0.7;
        }
    }

    #footerLinks {
        font-size: 16px;
    }

    #moldura {
        height: 100%;
        width: 100%;

        position: relative;

        overflow: hidden;
        border-radius: 1.5rem 1.5rem 0 0;
    }
`
