import React from "react"
import { Header } from "../Header/Header"
import { ContainerBody,Logo, ContainerButton, ButtonPet} from "./styled" 
import {NavLink} from "react-router-dom"


export const Home = () => {
 return(
        <div>
            <Logo>
            <img src="https://trufflesuite.com/img/tutorials/pet-shop/petshop.png"/>
            </Logo>
            <ContainerButton>
            <ButtonPet>
                <NavLink to={"/felino"}>
                    <img src="https://i1.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Black_Cat_Vector.svg/600px-Black_Cat_Vector.svg.png"/>
                </NavLink>
            </ButtonPet>
            <ButtonPet>
                <NavLink to={"/canino"}>
                    <img src="https://th.bing.com/th/id/R.537266d44c5ee929f6ec16231163cdc4?rik=5SLjUWFErileRw&riu=http%3a%2f%2ffreevector.co%2fwp-content%2fuploads%2f2013%2f09%2f64437-dog-with-floppy-ears-200x200.png&ehk=Wl8TaimC4MSHt7tBhJ0l79wX60S8rO0WjjEi4welsj0%3d&risl=&pid=ImgRaw&r=0"/>
                </NavLink>
            </ButtonPet>
            </ContainerButton>    
        </div>
    )
}