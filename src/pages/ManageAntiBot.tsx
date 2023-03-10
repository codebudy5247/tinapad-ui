import React from 'react'
import { Box, FormControl, FormGroup, FormLabel, TextField } from '@mui/material'
import Header from '../layouts/common/Header';


const ManageAntiBot = () => {
    return (
        <>
            <Header />
            <Box sx={{ backgroundColor: '#1D1F23', width: '65%', marginX: 'auto', marginY: 'auto', display: 'flex', flexDirection: 'column', rowGap: '2rem', boxSizing: 'border-box', padding: '4%', borderRadius: '20px', marginTop: '2rem' }}>
                <FormControl>
                    <FormLabel sx={{ fontWeight: '600', fontSize: '24px', color: '#FFFFFF', textAlign: 'left', mb: '4%' }}>Manage Anti Bot</FormLabel>
                    <FormGroup sx={{ display: 'flex', flexDirection: 'column', rowGap: '1.5rem' }}>
                        <TextField autoFocus
                            id="outlined-required"
                            label="Token  Adress"
                            placeholder="EX: 0xeE"
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default ManageAntiBot
