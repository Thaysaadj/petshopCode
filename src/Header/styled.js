import styled from "styled-components"
import { projectColors } from "../assets/assets"

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${projectColors.primaty};
    color: #fff;
    height: 5vh;
    width: 100%;
    font-size: 0.5rem;
    padding-left:20px;
    padding-right: 20px;
    font-family: 'Indie Flower', cursive;
    box-sizing: border-box;

    button{
        background-color: transparent;
        border: 1px solid transparent;
    }

    ion-icon{
        font-size: 1.5rem;
        color: #fff;
    }

    @media (max-width: 400px){
        display: flex;
        justify-content: center;
        background-color: red;

    }

`

export const ContainerIcon = styled.div`
    width:350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    
    ion-icon{
        padding: 5px;
        font-size: 1.5rem;
    }

`
export const ContainerFooter = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top:10px;
    width: 100%;
    background-color: ${projectColors.primaty};
    height: 100px;
    position: fixed;
    bottom: 0;  
    box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
    box-sizing: border-box;
`
export const Footer = styled.div `
   box-sizing: border-box;

   ion-icon{
       font-size: 2rem;
       color: #fff;;
       margin: 10px;
       
   }

`