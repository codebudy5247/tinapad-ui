import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import Image from "../../components/Image"
import Form_youtubeImg from "../../assets/Form_youtube.png"

const steps = ['Approve Token', 'Presale Information', 'Project Information', 'Submit'];

const stepsPara = ['Enter the token address and approve', 'Enter the Presale information, in case of trouble check our Docs', 'Add project links, description and select tier', 'Submit your presale'];

export default function HorizontalNonLinearStepper() {
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

  return (
    <section>
      <Box sx={{ width: '100%', marginTop: '2rem' }}>
        <Stepper nonLinear activeStep={activeStep} >
          {
            steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <Box>
                  <button style={{ height: '2.5rem', width: '2.5rem', backgroundColor: '#F20CEC', cursor: 'pointer', border: 'none', borderRadius: '10px', color: 'white', fontWeight: '600', fontSize: '18px' }} onClick={handleStep(index)}>
                    {index + 1}
                  </button>
                </Box>
              </Step>
            ))
          }
        </Stepper>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h4" style={{ fontWeight: '600', fontSize: '16px', marginTop: '0.8rem' }}>
          {label}
        </Typography>
        <Typography component="p" style={{ fontWeight: '400', fontSize: '10px' }} >
          {stepsPara[index]}
        </Typography>
      </Box> */}
      </Box>
      <form>
        <Box sx={{ backgroundColor: '#1D1F23', height: '400px', marginY: '3rem', display: 'flex', borderRadius: '20px', padding: '3rem', columnGap: '2rem' }}>
          <Box sx={{ flex: 2 }}>
            <TextField fullWidth id="outlined-basic" label="Token Address" variant="outlined"
              sx={{ input: { color: 'white' , outlineColor:'white'} }} />
            {/* sx={{ mt: '0.2rem', mb: '2rem' }} /> */}

            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <Input
                id="standard-adornment-amount" sx={{ mb: '0.7rem', textAlign: 'end' }}
                startAdornment={<InputAdornment position="start">Token Name:</InputAdornment>}
              />
              <Input
                id="standard-adornment-amount" sx={{ mb: '0.7rem' }}
                startAdornment={<InputAdornment position="start">Symbol:</InputAdornment>}
              />
              <Input
                id="standard-adornment-amount" sx={{ mb: '0.7rem' }}
                startAdornment={<InputAdornment position="start">Total Supply:</InputAdornment>}
              />
            </FormControl>
          </Box>
          <Box sx={{ flex: 1 }}>
            {/* <img src='Images/Form_youtube.png' alt='formimg' /> */}
            <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={Form_youtubeImg}
            // sx={{ height: 30, color: "black" }}
          />
          </Box>
        </Box>
      </form>
    </section>

  );
}