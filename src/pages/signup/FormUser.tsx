import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { ReduxState, FormStateSignUpInterface } from "../../interfaces";

const FormUser = ({
  propertyForm,
  userForm,
}: FormStateSignUpInterface): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Nome" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="CPF" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Endereço" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="E-Mail" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Phone" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Data de Nascimento" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Nome de usuário" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField type="password" label="Senha" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Cargo" fullWidth />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: ReduxState): FormStateSignUpInterface => {
  return {
    propertyForm: state.signUpForm.propertyForm,
    userForm: state.signUpForm.userForm,
  };
};

export default connect(mapStateToProps)(FormUser);
