import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { COLORS } from "../../../const";
import hostfyLogo from "../../../assets/img/hostfy-logo-white.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    welcome: {
      backgroundColor: COLORS.BLUE,
      height: "100vh",
      borderTopRightRadius: "25px",
      borderBottomRightRadius: "25px",
    },
    loginContainer: {
      height: "100vh",
    },
  })
);
const Login = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid
        item
        container
        xs={6}
        className={classes.welcome}
        direction="row"
        justify="center"
        alignItems="center"        
      >
        <img src={hostfyLogo} alt="Hostfy Logo" />
      </Grid>
      <Grid item container xs={6} className={classes.loginContainer}></Grid>
    </Grid>
  );
};

export default Login;
