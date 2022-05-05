import {
  ContainerCanino,
  ContainerItem,
  CardItem,
  GhostFooter,
} from "./styled";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./styles.css"


export const Canino = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ContainerCanino>
        <h1>Itens para Cães</h1>
        <ContainerItem>
        <CardItem onClick={handleClickOpen}>
            <img src="https://th.bing.com/th/id/OIP.vu8F-kc5Vhc8fJl5WAAZbQHaHa?pid=ImgDet&w=640&h=640&rs=1" />
          </CardItem><CardItem onClick={handleClickOpen}>
            <img src="https://th.bing.com/th/id/OIP.vu8F-kc5Vhc8fJl5WAAZbQHaHa?pid=ImgDet&w=640&h=640&rs=1" />
          </CardItem><CardItem onClick={handleClickOpen}>
            <img src="https://th.bing.com/th/id/OIP.vu8F-kc5Vhc8fJl5WAAZbQHaHa?pid=ImgDet&w=640&h=640&rs=1" />
          </CardItem><CardItem onClick={handleClickOpen}>
            <img src="https://th.bing.com/th/id/OIP.vu8F-kc5Vhc8fJl5WAAZbQHaHa?pid=ImgDet&w=640&h=640&rs=1" />
          </CardItem>
          <CardItem onClick={handleClickOpen}>
            <img src="https://th.bing.com/th/id/OIP.vu8F-kc5Vhc8fJl5WAAZbQHaHa?pid=ImgDet&w=640&h=640&rs=1" />
          </CardItem>
          <CardItem onClick={handleClickOpen}>
            <img src="https://www.petshopagroaves.com.br/uploads/petshopagroaves/produtos_imagens/Racao-Hills-Canino-Pedacos-Pequenos-1Kg16116749561394043886.jpg" />
          </CardItem>
          <CardItem onClick={handleClickOpen}>
            <img src="https://a-static.mlcdn.com.br/1500x1500/kit-mordedor-pet-10-brinquedos-de-vinil-para-caes-e-cachorro-jau-home-pet/jaupesca/kitpet10/436ebcd5bb682b81e781c0bb2191954c.jpg" />
          </CardItem>
          <CardItem onClick={handleClickOpen}>
            <img src="https://static3.tcdn.com.br/img/img_prod/636855/coleira_peitoral_canil_xadrez_com_gravata_reforcado_caes_peq_10177_1_20200420114603.jpg" />
          </CardItem>
          <CardItem onClick={handleClickOpen}>
            <img src="https://static3.tcdn.com.br/img/img_prod/636855/coleira_peitoral_canil_xadrez_com_gravata_reforcado_caes_peq_10177_1_20200420114603.jpg" />
          </CardItem>
          <CardItem onClick={handleClickOpen}>
            <img src="https://static3.tcdn.com.br/img/img_prod/636855/coleira_peitoral_canil_xadrez_com_gravata_reforcado_caes_peq_10177_1_20200420114603.jpg" />
          </CardItem>
          
          <GhostFooter />
        </ContainerItem>
      </ContainerCanino>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"SCIENCE DIET"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src="https://th.bing.com/th/id/OIP.vu8F-kc5Vhc8fJl5WAAZbQHaHa?pid=ImgDet&w=640&h=640&rs=1"/>
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
