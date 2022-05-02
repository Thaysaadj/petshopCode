import styled from "styled-components";

export const ContainerCanino = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`
export const ContainerItem = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    

`
export const CardItem = styled.div `
    width: 200px;
    height: 250px;
    border: 1px solid black;
    margin: 10px;
    

    img{
        width: 100%;
        /* height: 150px; */
    }
`