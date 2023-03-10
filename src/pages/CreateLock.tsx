import React from 'react'
import { DateTimePicker } from '@mui/lab';
import { Box, FormControl, FormGroup, FormLabel, TextField, Typography } from '@mui/material'
import { ColorButton } from '../components/Button';
import Header from '../layouts/common/Header';
import Paragraph from '../components/Paragraph';


const CreateLock = () => {

    return (
        <>
            <Header />
            <Box sx={{
                backgroundColor: '#1D1F23', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '5%', pb: '1.2rem', borderRadius: '20px', marginTop: '2rem', fontFamily: 'Poppins', mb: '1rem',
                width: { xs: '92%', sm: '90%', md: '80%', lg: '65%' }
            }}>
                <FormControl sx={{ mt: { xs: '2rem', sm: '1rem', md: '0' } }}>
                    <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left', mb: '4%' }}>
                        Create Your Locks For Free</FormLabel>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
                        <TextField
                            id="outlined-required"
                            label="Token or LP Token Adress"
                            defaultValue="0xeE32AefeB41678d750FD794B11403b0d3113509B"
                        />
                        <TextField
                            id="outlined-required"
                            label="Amount"
                            defaultValue="10,000"
                        />
                        <TextField sx={{ display: 'flex', flex: '1' }}
                            id="datetime-local" label="Lock Until"
                            type="datetime-local" defaultValue="2017-05-24T10:30"
                        />
                    </FormGroup>
                    <Paragraph sx={{ width: { xs: '95%', sm: '100%' }, fontWeight: '400', fontSize: '12px', color: '#FC9823', textAlign: 'left', mt: '2%' }}> Exclude GemPad's lock address <Typography component="span" sx={{ fontWeight: '700', fontSize: '12px' }}>0x98cBfc7763c8c0a9525154D4C376014A4d00eE83</Typography>  from Fees, Max Transaction and Rewards.
                    </Paragraph>
                    <ColorButton sx={{ width: { xs: '6rem', sm: 'fit-content' }, px: '6%', mx: 'auto', mt: { xs: '10%', sm: '5%' }, }}>Lock</ColorButton>
                </FormControl>
            </Box>
        </>

    )
}

export default CreateLock
