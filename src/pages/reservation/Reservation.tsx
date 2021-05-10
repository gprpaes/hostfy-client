import React from "react";
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
import {ReduxState} from "../../interfaces"
import {connect} from "react-redux"

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
const Reservation = (): JSX.Element => {
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
      <Fab className={classes.floating} variant="extended">
        <AddIcon style={{ marginRight: "10px" }} />
        Fazer nova reserva
      </Fab>
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
  
  export default connect(mapStateToProps)(Reservation);
  