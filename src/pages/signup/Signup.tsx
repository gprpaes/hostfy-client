import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: "10px",
      marginTop: "20px",
      overflow: "hidden",
      display: "flex",
      height: "95vh",
    },
  })
);

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
      <Grid container spacing={4} direction="row" justify="center">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
    </Paper>
  );
};

export default Signup;
