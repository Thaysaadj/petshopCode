import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
          <img src="https://farmaciaindiana.vteximg.com.br/arquivos/ids/222011/7896181218609.jpg?v=637218872180370000" />
          <p>
            Seus grãos mini bits facilita a apreensão e mastigação dos pets e
            ainda possui outros benefícios, como:
            <br />
            - Não possui corantes e aromatizantes artificiais;
            <br />- Proporciona equilibradamente ômega 3 e 6,
            <br /> - Possui vitaminas e nutrientes para o seu pet.
          </p>
          <h4>Valor R$ 95,00</h4>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
};
export default Modal
