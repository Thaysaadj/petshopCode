import styled from "styled-components";


export const ContainerCanino = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: aliceblue;
    box-sizing: border-box;
    

`
export const ContainerItem = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;
    

`
export const CardItem = styled.div `
    width: 200px;
    height: 250px;
    margin: 30px;
    overflow: hidden;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    background-color: #fff;
    

    img{
        width: 100%;
    }

    :hover{
        transform: scale(1.1);
        transition: 0.4s;
    }
`

export const GhostFooter = styled.div `
    width: 100%;
    height: 110px;
`