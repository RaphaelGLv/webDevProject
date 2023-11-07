import styled from "styled-components";

export const Content = styled.div`
   width: 100%;
   display: inline-flex;
   justify-content: space-between;
   padding: 0.2%;

   .allSection{
        display: flex;
        margin-top: 2%;
        align-items: center;
        margin-left: 2%;
        height: 2rem;
        position: relative;
        width: 100%;
   }
   
   .container{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: left;
        border-style: ridge;
        border-width: 0.1rem;
        border-color: rgba(126, 126, 126, 0.7);
        border-radius: 1rem;
        width: 85%;
        position: relative;
        background-color: rgba(178, 112, 60, 0.1);
        margin-right: 0%;
        
    }

    .searchInput{
        border: none;
        text-align: left;
        padding: 0; /* Removendo o preenchimento */
        position: absolute;
        width: 89% ;    
        background-color: rgba(178, 112, 60, 0.01);
    }
    

    .searchInput:focus {
            outline: none;
            border: none;
        }

    .Searchicon{
        align-items: left;
        margin: 0 1rem;
    }

   

    .icons{
        width: 13%;
        position: relative;
        margin-left: 1%;
        display: inline-flex;
        justify-content: space-evenly;
    }

    #heart{
        transition: 0.3s;
        
        &:hover{
            transform: scale(1.4);
            transition: fill 0.2s;
            fill: #376192;
        }
    }

    #handbag{
        transition: 0.3s;
        transition: fill 0.2s;

        &:hover{
            transform: scale(1.4);
            fill: #376192;
        }
    }
   
    
    
`
