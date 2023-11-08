import styled from "styled-components";

export const Content = styled.div`
    padding: 20px 2% 0 2%;
    margin: 0 auto;

    width: auto;
    max-width: 50vmax;

    .thumbs.animated {
        opacity: 0;
        z-index: -1;
        position: absolute;
    }

    .carousel .control-dots .dot {
        background-color: #376192;
        box-shadow: none;
    }

    a {
        height: fit-content;
        width: 100%;

        img {
            width: 100%;
        }
    }
`