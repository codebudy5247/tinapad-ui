import { Typography } from '@mui/material'
import { styled } from '@mui/styles'
import React from 'react'

const Paragraph = styled(Typography)(({ theme }) => ({
    fontWeight: "400",
    fontSize: "16px",
    textTransform: "capitalize",
}))

export default Paragraph

