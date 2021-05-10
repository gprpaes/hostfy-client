import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HotelIcon from "@material-ui/icons/Hotel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import { ReduxState } from "../../interfaces";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { setFieldBedroomForm } from "../../actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    gridmain: {
      height: "93.2vh",
    },

    buttonmain: {
      height: "500px",
      width: "500px",
      margin: "15px",
    },

    floating: {
      position: "fixed",
      right: "25px",
      bottom: "25px",
    },
  })
);
const Bedroom = ({
  userForm,
  propertyForm,
  reservationForm,
  bedroomForm,
}: any): JSX.Element => {
  const [openBedroomModal, setOpenBedroomModal] = useState(false);
  let history = useHistory();
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HotelIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hostfy Administrador
          </Typography>
          <Button color="inherit" onClick={() => history.push("/")}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>
      <Fab
        className={classes.floating}
        variant="extended"
        onClick={() => {
          setOpenBedroomModal(true);
        }}
      >
        <AddIcon style={{ marginRight: "10px" }} />
        Cadastrar Quarto
      </Fab>

      <Dialog
        open={openBedroomModal}
        onClose={() => {
          setOpenBedroomModal(false);
        }}
      >
        <DialogTitle>Cadastro de Quarto</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => {
                    setFieldBedroomForm("number", event.target.value)
                }}
                autoFocus
                margin="dense"
                placeholder={"Número do quarto"}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => {
                    setFieldBedroomForm("type", event.target.value)
                }}
                autoFocus
                margin="dense"
                placeholder={"Tipo do quarto"}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => {
                    setFieldBedroomForm("bedtype", event.target.value)
                }}
                autoFocus
                margin="dense"
                placeholder={"Tipo de cama"}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                onChange={(event) => {
                    setFieldBedroomForm("", event.target.value)
                }}
                autoFocus
                margin="dense"
                type="number"
                placeholder={"Capacidade"}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenBedroomModal(false);
            }}
            color="primary"
          >
            Cancelar
          </Button>
          <Button onClick={() => {}} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state: ReduxState): any => {
  return {
    propertyForm: state.signUpForm.propertyForm,
    userForm: state.signUpForm.userForm,
    bedroomForm: state.guestForm.bedroomForm,
    reservationForm: state.guestForm.reservationForm,
  };
};

export default connect(mapStateToProps)(Bedroom);
