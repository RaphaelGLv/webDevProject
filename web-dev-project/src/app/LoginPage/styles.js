import styled from "styled-components";

export const Content = styled.div`
    
    margin:0;
    width: 100%;
    height: 100%;
    
    .everything{
        background-color: rgba(255, 247, 180, 1) ;
        position: absolute;
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
        

    }
    .LoginArea{
        position: relative;
        background-color: white;
        border-radius: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 7%;
        border-radius: 9rem 9rem 9rem 9rem;
        width: fit-content;
        height: fit-content;
        /* margin-left: 20%;
        margin-top: 5%; */
        margin: auto;
    }
    
    input{
        border: 1px solid #ACACAC;
        border-radius: 1rem;
        height: 2rem;
        width: 100%;
        margin: 0 auto;
        outline: none;
    }
    
    p{
        margin: 5% 0 3% 3%;
        //font-weight: ;
        font-size: 150% ;
        font-weight: 600;
    }

    #img{

        width: 85%;
        align-self: center;
        background-color: white;
    }

    .cpf-senha{
        padding-left: 3%;
    }

    #loginForm {
        margin: 0 auto;
        width: 93%;
        display: flex;
        flex-direction: column;
    }

`

export const But = styled.a`
    .button{

        box-sizing: border-box;
        border: none;
        height: 2rem;
        width: 50%;
        
        margin: 1.5rem auto;
        margin-bottom: 0.3rem;
        background-color: #376192;
        color: white;
        font-size: 1.7rem;
        text-decoration: none;
    
        display: flex;
        align-items: center;
    
        border-radius: 1rem;
        justify-content: center;
        gap: 2%;
        font-weight: 500;
        font-size: 1rem;
        text-align: center;

        transition: 0.3s;
        
        &:hover {
            transform: scale(1.15);
        }
    }
`

export const LogonLink = styled.a`
    color: #376192;
    text-decoration: none;
    font-size: 1rem;

    align-self: center;

    transition: ease-in-out 0.2s;
    &:hover {
        text-decoration: underline;
    }
`