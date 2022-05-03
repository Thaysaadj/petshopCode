import styled from "styled-components";

export const ContainerBody = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    box-sizing: border-box;
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;

    img{
        width: 400px;
        height: 280px;
    }
`
export const ContainerButton = styled.div `
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    margin-top: 70px;
    box-sizing: border-box;    
`

export const ButtonPet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 120px;
    height: 130px;
    background-color: #54a494;
    border-radius: 10px;
    margin-inline: 50px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    

    img{
        
        height: 120px;
    }

`

