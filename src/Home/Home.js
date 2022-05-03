import React, { useState } from "react"
import {Logo, ContainerButton, ButtonPet, ContainerBody} from "./styled" 
import {NavLink} from "react-router-dom"


export const Home = () => {
 return(
        <ContainerBody>
            <Logo>
            <img src="https://trufflesuite.com/img/tutorials/pet-shop/petshop.png"/>
            </Logo>
            <ContainerButton>
                <NavLink to={"/felino"}>
                <ButtonPet>
                    <img src="https://www.clipartmax.com/png/full/46-460245_white-cat-silhouette-clip-art-white-silhouette-of-a-cat.png"/>
                </ButtonPet>
                </NavLink>
                <NavLink to={"/canino"}>
                <ButtonPet>
                    <img src="http://www.clker.com/cliparts/8/b/m/w/2/n/dog-silhouette-white-hi.png"/>
                </ButtonPet>
                </NavLink>
            </ContainerButton>    
        </ContainerBody>
    )
}