import styled from "styled-components";

export const Content = styled.div`
    padding: 2%;
    width: 100%;
`

export const Text = styled.div`
    width: 100%;

    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 2rem;
    
    #seeAll {
        color: black;
        text-decoration: none;
        transition: 0.3s;
        
        &:hover {
            opacity: 70%;
        }
    }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    place-content: center;
    gap: 4vmax 6vmax;
    
    width: 100%;

    #card {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: fit-content;

        transition: ease-in-out 0.3s;

        &:hover {
            transform: scale(1.2);
        }
    }

    #cardContent {
        background-color: #FFF7B4;

        width: 22vmax;
        height: 20vmax;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 1rem;
    }

    #image {
        height: 12vmax;
        width: auto;
    }
`

