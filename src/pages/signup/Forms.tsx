import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

interface Props {
  stepIndex: number;
}

const Forms = ({ stepIndex }: Props): JSX.Element => {
  switch (stepIndex) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Nome da propriedade" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="CNPJ" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Endereço" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Número de Quartos" fullWidth />
          </Grid>
        </Grid>
      );
    case 1:
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
    default:
      return <p>Unknown stepIndex</p>;
  }
};

export default Forms;
