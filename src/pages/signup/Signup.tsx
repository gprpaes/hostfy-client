import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Forms from "./Forms";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      margin: "10px",
      marginTop: "100px",
      overflow: "hidden",
      display: "flex",
      padding: "20px",
      paddingLeft: "150px",
      paddingRight: "150px"
    },
    next: {
      float: "right",
      marginTop: "15px"
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

  const onSubmit  = (formState: object) => {
      console.log(formState)
  }
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
              <Forms stepIndex={activeStep} />
              <div>
                <Button
                  className={classes.next   }
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
