import { Container } from "@mui/system";
import React from "react";
import Header from "../layouts/common/Header";
import StepForm from "../layouts/Launchpad/StepForm";
const CreatePreasale = () => {
  return (
    <Container maxWidth="xl">
        <Header />
        <StepForm/>
      </Container>
  )
}

export default CreatePreasale