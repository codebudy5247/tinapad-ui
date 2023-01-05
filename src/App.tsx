import './App.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/nav-section/Navbar";
import { Box, Container, Toolbar, Typography } from '@mui/material';
import Home from './pages/Home';

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
          <Home />
         
        </Box>
      </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
