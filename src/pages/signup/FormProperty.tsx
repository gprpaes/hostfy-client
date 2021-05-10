import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { ReduxState, FormStateSignUpInterface } from "../../interfaces";
import {setFieldPropertyForm} from "../../actions"
const FormProperty = ({
  propertyForm,
  userForm,
}: FormStateSignUpInterface): JSX.Element => {
    const {propertyName, cnpj, address, roomAmount} = propertyForm
   let step = 0 

      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nome da propriedade" fullWidth onChange={(event) =>{
              setFieldPropertyForm( "propertyName",event.target.value)
            }}/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="CNPJ" fullWidth onChange={(event) => {setFieldPropertyForm("cnpj", event.target.value)}} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Endereço" fullWidth onChange={(event) => {setFieldPropertyForm("address", event.target.value)}}/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Número de Quartos" fullWidth onChange={(event) => {setFieldPropertyForm("roomAmount", event.target.value)}} />
          </Grid>
        </Grid>
      );
    
      }

const mapStateToProps = (state: ReduxState): FormStateSignUpInterface => {
  return {
    
    propertyForm: state.signUpForm.propertyForm,
    userForm: state.signUpForm.userForm,
  };
};

export default connect(mapStateToProps)(FormProperty);
