import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HotelIcon from "@material-ui/icons/Hotel";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
  })
);
const Admin = (): JSX.Element => {
  const classes = useStyles();
  let history = useHistory();
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
            Administrador
          </Typography>
          <Button color="inherit" onClick={() => history.push("/")}>
            Sair
          </Button>
        </Toolbar>
      </AppBar>

      <Grid container direction="row" justify="center" alignItems="center" className ={classes.gridmain}>
        <h1>aaaa</h1>
      </Grid>
    </>
  );
};

export default Admin;
