import styled from "styled-components"
import { projectColors } from "../assets/assets"

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${projectColors.primaty};
    color: #fff;
    height: 5vh;
    font-size: 0.5rem;
    padding-left:20px;
    padding-right: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    button{
        background-color: transparent;
        border: 1px solid transparent;
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
    
`