import { Container } from "@mui/system";
import React from "react";
import Header from "../layouts/common/Header";
import LaunchPadRecord from "../layouts/home/LaunchPadRecord";
import LaunchPad from "../layouts/home/LaunchPad";
import Footer from "../layouts/home/Footer";
const Home = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <LaunchPadRecord />
        <LaunchPad />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
