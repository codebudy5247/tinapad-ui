import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import StepButton from '@mui/material/StepButton'
import Typography from '@mui/material/Typography';
import FairApproveToken from './FairApproveToken';
import FairPresaleInform from './FairPresaleInform';
import FairProjectInform from './FairProjectInform';
import FairSubmit from './FairSubmit';

const FairStepper = () => {
  const steps = ['Approve Token', 'Presale Information', 'Project Information', 'Submit'];
  const stepsPara = ['Enter the token address and approve', 'Enter the Presale information, in case of trouble check our Docs', 'Add project links, description and select tier', 'Submit your presale'];

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean; }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%', my: '3rem' }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {/* <Typography component="p" style={{ fontWeight: '400', fontSize: '10px' }} >
      {stepsPara[index]}
      </Typography> */}
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
       <Typography variant="h4" style={{ fontWeight: '600', fontSize: '16px', marginTop: '0.8rem' }}>
         {label}
       </Typography>
     </Box> */}
      <Box>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
     {/* ...............................................Steps_Pages............................................... */}
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              {
                activeStep == 0 ?
                  <FairApproveToken />
                  :
                  activeStep == 1 ?
                    <FairPresaleInform />
                    :
                    activeStep === 2 ?
                      <FairProjectInform />
                      :
                      <FairSubmit />
              }
            </Typography>
          </React.Fragment>
        )}
      </Box>
    </Box>
  )
}

export default FairStepper