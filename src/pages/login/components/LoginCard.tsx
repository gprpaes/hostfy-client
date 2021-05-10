import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { COLORS } from "../../../const";
import { login } from "../../../api/api";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import {setUser} from "../../../actions"
const useStyles = makeStyles({
  cardMain: {
    minWidth: "475px",
  },
  title: {
    alignSelf: "center",
    marginBottom: "15px",
  },

  input: {
    marginBottom: "15px",
  },

  signUp: {
    color: COLORS.BLUE,
    marginTop: "18px",
    textDecoration: "none",
    margin: "0 auto",
    fontFamily: "roboto",

    "&:visited": {
      color: "none",
    },
  },
  progress: {
    marginRight: "20px",
  },
});

const LoginCard = (): JSX.Element => {
  let history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.cardMain}>
      <CardContent>
        <Grid container direction="row" alignItems="center" justify="center">
          <Typography
            color="textPrimary"
            className={classes.title}
            variant="h5"
          >
            Login
          </Typography>
          <Grid item xs={12}>
            <form>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className={classes.input}
              />
              <TextField
                id="outlined-basic"
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </form>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid container>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={async () => {
              setLoading(true);
              const response = await login(email, password);
              if (response.data && response.data.data.length > 0) {
                setLoading(false);
                setUser(response.data.data)
                history.push("/admin");
              }else{
                  setLoading(false)
                  alert('Login Falhou')
              }
            }}
          >
            {loading ? (
              <CircularProgress
                color="secondary"
                className={classes.progress}
              />
            ) : null}
            Login
          </Button>
          <Link className={classes.signUp} to="/signup">
            Cadastre-se
          </Link>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default LoginCard;
