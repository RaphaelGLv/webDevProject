import styled from "styled-components";

export const Content = styled.div`
    background-color: #376192;
    padding: 2rem 0;
    
    width: 100%;
    height: fit-content;
    `

export const Form = styled.form`
    margin: auto;
    padding: 1rem 2rem;
    
    display: flex;
    flex-direction: column;

    background-color: white;

    border-radius: 3rem;
    
    height: fit-content;
    width: 650px;
    
    @media (max-width: 928px) {
        width: 70%;
    }

    label {
        margin-top: 0.5rem;
    }
    
    input {
        border: 1px solid #ACACAC;
        border-radius: 1rem;
        outline: none;

        background-color: rgba(249, 214, 156, 0.1);

        padding: 0.5rem 1rem;
        margin-bottom: 0.5rem;
    }
    
    #seePassword {
        display: inline-flex;
        gap: 5px;
    }

    #passwordCheckbox {
        height: fit-content;
        margin: 0;
        align-self: center;
    }

    #recommend-label {
        align-self: center;
    }

    #recommend {
        align-self: center;

        width: 311px;

        @media (max-width: 543px) {
            width: 100%;
        }
    }
`

export const Options = styled.div`
    display: flex;
    gap: 0.3rem;

    
    input {
        height: fit-content;
        margin: auto 0;
    }

    p {
        height: fit-content;
        margin-bottom: 1px;
    }
`

export const ButtonSection = styled.div`
    display: flex;
    justify-content: space-evenly;

    width: 100%;

    text-align: center;


    #reset-button {
        color: white;

        background-color: rgba(238, 0, 0, 0.7);

        padding: 0.7rem 1rem;

        width: 120px;
        
        border: none;
        border-radius: 2rem;

        transition: ease-in-out 0.15s;
        &:hover {
            background-color: rgba(238, 0, 0, 0.4);
        }
    }

    #submit-button {
        color: white;

        background-color: rgba(0, 195, 0, 0.7);

        padding: 0.7rem 1rem;

        width: 120px;
        
        border: none;
        border-radius: 2rem;

        transition: ease-in-out 0.15s;
        &:hover {
            background-color: rgba(0, 195, 0, 0.4);
        }
    }
`