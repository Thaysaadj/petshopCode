import {
  ContainerFelino,
  CardItem,
  ContainerItem,
  GhostFooter,
} from "./styled";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const Felino = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
    <ContainerFelino>
      <h1>Tudo para seu Felino</h1>
      <ContainerItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://static.petz.com.br/fotos/1467401093959.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://farmaciaindiana.vteximg.com.br/arquivos/ids/200818/7897807200633_0.jpg?v=636725751144700000" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/1500x1500/kit-mordedor-pet-10-brinquedos-de-vinil-para-caes-e-cachorro-jau-home-pet/jaupesca/kitpet10/436ebcd5bb682b81e781c0bb2191954c.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/618x463/arranhador-para-gatos-com-torre-em-sisal-e-arco-marrom-pipo-pet/mandiali/11556/d8ef8da7a074926507a044adcfac692a.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/1500x1500/kit-mordedor-pet-10-brinquedos-de-vinil-para-caes-e-cachorro-jau-home-pet/jaupesca/kitpet10/436ebcd5bb682b81e781c0bb2191954c.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/1500x1500/kit-mordedor-pet-10-brinquedos-de-vinil-para-caes-e-cachorro-jau-home-pet/jaupesca/kitpet10/436ebcd5bb682b81e781c0bb2191954c.jpg" />
        </CardItem>
        <CardItem onClick={handleClickOpen}>
          <img src="https://a-static.mlcdn.com.br/1500x1500/kit-mordedor-pet-10-brinquedos-de-vinil-para-caes-e-cachorro-jau-home-pet/jaupesca/kitpet10/436ebcd5bb682b81e781c0bb2191954c.jpg" />
        </CardItem>
        <GhostFooter />
      </ContainerItem>
    </ContainerFelino>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"SCIENCE DIET"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h3>Benefícios</h3>
            <p>
              Seus grãos mini bits facilita a apreensão e mastigação dos pets e
              ainda possui outros benefícios, como:<br/>
              - Não possui corantes e
              aromatizantes artificiais;<br/>- Proporciona equilibradamente ômega 3
              e 6,<br/> - Possui vitaminas e nutrientes para o seu pet.
            </p>
            <h4>Valor R$ 95,00</h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
