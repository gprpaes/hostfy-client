import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: "10px",
      marginTop: "20px",
      overflow: "hidden",
      display: "flex",
    },
   
  })
);

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Nome da propriedade" fullWidth/>
          </Grid>
          <Grid item xs={6}>
          <TextField label="CNPJ" fullWidth/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Endereço" fullWidth/>
          </Grid>
          <Grid item xs={6}>
          <TextField label="Número de Quartos" fullWidth/>
          </Grid>
        </Grid>
      ); 
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
  }
}

const Signup = (): JSX.Element => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Propriedade", "Administrador"];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Paper className={classes.main}>
      <Grid container spacing={2} direction="row" justify="center">
        <Grid item xs={12}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12}>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Signup;
