import React from "react";
import { BrowserRouter, Route, Switch }from "react-router-dom";
import { Canino } from "./Canino/Canino";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import styled from "styled-components";
import { Routes } from "./Config/routes";

const ContainerBody = styled.div`
   width: 100%;
   display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100vh;
`

const App =() =><ContainerBody><Routes/></ContainerBody>
export default App;
