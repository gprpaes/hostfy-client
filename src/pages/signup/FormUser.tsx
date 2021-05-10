import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { ReduxState, FormStateSignUpInterface } from "../../interfaces";
import {setFieldUserForm} from "../../actions"

const FormUser = ({
  propertyForm,
  userForm,
}: FormStateSignUpInterface): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Nome" fullWidth onChange={(event) => {
            setFieldUserForm("name", event.target.value)
        }}/>
      </Grid>
      <Grid item xs={12}>
        <TextField label="CPF" fullWidth onChange={(event) => {
            setFieldUserForm("cpf", event.target.value)
        }}/>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Endereço" fullWidth onChange={(event) => {
            setFieldUserForm("address", event.target.value)
        }}/>
      </Grid>
      <Grid item xs={12}>
        <TextField label="E-Mail" fullWidth onChange={(event) => {
            setFieldUserForm("email", event.target.value)
        }}/>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Phone" fullWidth onChange={(event) => {
            setFieldUserForm("phone", event.target.value)
        }}/>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Data de Nascimento" fullWidth onChange={(event) => {
            setFieldUserForm("birthday", event.target.value)
        }}/>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Nome de usuário" fullWidth onChange={(event) => {
            setFieldUserForm("userName", event.target.value)
        }}/>
      </Grid>
      <Grid item xs={12}>
        <TextField type="password" label="Senha" fullWidth onChange={(event) => {
            setFieldUserForm("password", event.target.value)
        }}/>
      </Grid>
      <Grid item xs={12}>
        <TextField label="Cargo" fullWidth onChange={(event) => {
            setFieldUserForm("position", event.target.value)
        }}/>
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
