import React, { useState } from 'react'
import {
    Typography,
    Button,
    Stepper,
    Step,
    StepLabel,
  } from "@material-ui/core";
//   import "./Linear.module.css";
  import BasicDetails from "../components/Steeper/BasicDetails";
  import VerifyAccount from "../components/Steeper/VerifyAccount";
  import KycDetails from "../components/Steeper/KycDetails";
  import {
    useForm,
    // Controller,
    FormProvider,
    // useFormContext,
  } from "react-hook-form";
  
  function getSteps() {
    return ["Registration", "Verify Your Account", "Complete Your KYC"];
  }



  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <BasicDetails />
          </>
        );
  
      case 1:
        return (
          <>
            <VerifyAccount />
          </>
        );
      case 2:
        return (
          <>
            <KycDetails />
          </>
        );
  
      default:
        return "unknown step";
    }
  }
  
  const LinearSteeper = () => {
    const methods = useForm();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const isStepFalied = () => {
        return Boolean(Object.keys(methods.formState.errors).length);
      };
    const handleNext = (data) => {
        console.log(data);
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
    return (
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => {
              const labelProps = {};
                if (isStepFalied() && activeStep == index) {
                    labelProps.error = true;
                  }
            return (
              <Step>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
  
        {activeStep === 3 ? (
          <Typography variant="h5" align="center">
            Thank You For Registering with us
          </Typography>
        ) : (
          
        //     {/* <form>{getStepContent(activeStep)}</form>
        //     <Button
        //       variant="contained"
        //       color="primary"
        //       disabled={activeStep === 0}
        //       onClick={handleBack}
        //     >
        //       Back
        //     </Button>
        //     <Button variant="contained" color="primary" onClick={handleNext}>
        //       {activeStep === 2 ? "Finish" : "Next"}
        //     </Button>
        //   </> */}
          <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )} */}
              <Button
                
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
        )}
      </div>
    );
  };
  
  export default LinearSteeper;