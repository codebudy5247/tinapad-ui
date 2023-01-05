import './App.css';
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/nav-section/Navbar";
import { Box, Container, Toolbar, Typography } from '@mui/material';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MyContribution from './pages/MyContribution';
import MyAlarm from './pages/MyAlarm';
import CreatePreasale from './pages/CreatePreasale';

const mdTheme = createTheme();


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
      <Navbar />
      <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Router>
          <Fragment>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contribution" element={<MyContribution />} />
          <Route path="/alarm" element={<MyAlarm />} />
          <Route path="/alarm" element={<CreatePreasale />} />
          </Routes>
          </Fragment>
          </Router>
         
        </Box>
      </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
