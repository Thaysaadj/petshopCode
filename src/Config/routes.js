import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Canino } from "../Canino/Canino";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { Felino } from "../Felino/Felino";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
/**
 * Criação de rotas atualizada 
 * @routes
 */


export const Routes = () => {
   return(
       <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path={"/"} element={<Home/>}/>
                <Route exact path={"/felino"} element={<Felino/>}/>
                <Route exact path={"/canino"} element={<Canino/>}/>
                <Route path={"*"} element={<ErrorPage/>}/>
            </Switch>
       </BrowserRouter>
   ) 
}