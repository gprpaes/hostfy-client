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
  })
);
const Admin = (): JSX.Element => {
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

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.gridmain}
      >
        <Button
          className={classes.buttonmain}
          variant="contained"
          color="primary"
          onClick={() => {history.push("/bedroom")}}
        >
          <HotelIcon style={{ margin: "15px" }} /> Quartos
        </Button>
        <Button
          className={classes.buttonmain}
          variant="contained"
          color="primary"
          onClick={() => {history.push("/reservation")}}
        >
          <LaptopChromebookIcon style={{ margin: "15px" }} /> Reservas
        </Button>
      </Grid>
    </>
  );
};

export default Admin;
