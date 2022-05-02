import React from "react";
import { BrowserRouter, Route, Switch }from "react-router-dom";
import { Canino } from "./Canino/Canino";
import { ErrorPage } from "./ErrorPage/ErrorPage";
import { Felino } from "./Felino/Felino";
import { Header } from "./Header/Header";
import { Home } from "./Home/Home";
import styled from "styled-components";

const ContainerBody = styled.div`
   display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

function App() {
  return (
    <ContainerBody>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/canino">
          <Canino />
        </Route>
        <Route exact path="/felino">
          <Felino />
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
    </ContainerBody>
  );
}

export default App;
