import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export const Modal = ({
  open,
  handleClose,
  title,
  subtitle,
  text,
  linkUrl,
  price,
  list
}) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={linkUrl} />
            <h3>{text}</h3>
            <p>{subtitle}</p>
            <ul>
              {list?.map(item => (
                <>
                  <li>{item}</li>
                </>
              ))}
            </ul>
            <h4>Valor R$ {price?.toFixed(2)}</h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
