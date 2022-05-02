import React, { useEffect, useState } from "react"
import { ContainerHeader, ContainerFooter } from "./styled"
import { useLocation, useNavigate} from "react-router-dom"


export const Header = ({page}) => {

    const location = useLocation()
    const [renderButton, setRenderButton]= useState(true)

    const navigation = useNavigate()
    

    const mostraSeta = () =>{
        console.log(location)

        if(location.pathname !== "/"){
            setRenderButton(true)
        }else {
            setRenderButton(false)
        }
    }

    useEffect(() => {
        mostraSeta()
    }, [location.pathname])


    return(
        <div>
            <ContainerHeader>
            <div>
            { renderButton === true ?
                <button onClick={() => {navigation("/")}}id="buttonHeader">&#x2190;
                </button> :
                    ""
                } 
            </div>
                <h1>Contato - (21) 99999-8888</h1>
            </ContainerHeader>
            <ContainerFooter>
                <footer>
                    olá
                </footer>
            </ContainerFooter>
        </div>
    )
}