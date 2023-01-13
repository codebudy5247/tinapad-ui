import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider,Theme } from "@mui/material/styles";
import Navbar from "./components/nav-section/Navbar";
import { Box, Toolbar } from '@mui/material';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MyContribution from './pages/MyContribution';
import MyAlarm from './pages/MyAlarm';
import CreatePreasale from './pages/CreatePreasale';
import CreateHyperLaunch from './pages/CreateHyperLaunch';
import CreateFairLaunch from './pages/CreateFairLaunch';
import CreateLock from './layouts/Lock/CreateLock';
import TokenLock from './layouts/Lock/TokenLock';
import TokenLockInfo from './layouts/Lock/TokenLockInfo';
import LiquidityLock from './layouts/Lock/LiquidityLock/LiquidityLock';
import UtilityTools from './layouts/Utility&Tools/UtilityTools';
import Airdrop from './layouts/Utility&Tools/Airdrop/Airdrop';
import CreateToken from './layouts/Utility&Tools/CreateToken';
import Stake from './layouts/Utility&Tools/Stake/Stake';
import KYCAudits from './layouts/KYC&Audits/KYCAudits';
import Docs from './layouts/Doc/Docs';
import ManageAntiBot from './layouts/Utility&Tools/ManageAntiBot';
import SpecialPresales from './layouts/Launchpad/SpecialPresales/SpecialPresales';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
});

const mdTheme = createTheme({
  palette: {
    mode: "dark",
  },
});



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
                  <Route path="/create-presales" element={<CreatePreasale />} />
                  <Route path="/create-hyperlaunch" element={<CreateHyperLaunch />} />
                  <Route path="/create-fairlaunch" element={<CreateFairLaunch />} />
                  <Route path="/createlock" element={<CreateLock />} />
                  <Route path="/tokenlock" element={<TokenLock />} />
                  <Route path="/tokenlockinfo" element={<TokenLockInfo />} />
                  <Route path="/liquiditylock" element={<LiquidityLock />} />
                  <Route path="/utilitytools" element={<UtilityTools />} />
                  <Route path="/airdrop" element={<Airdrop />} />
                  <Route path="/createtoken" element={<CreateToken />} />
                  <Route path="/stake" element={<Stake />} />
                  <Route path="/kyc-audits" element={<KYCAudits />} />
                  <Route path="/docs" element={<Docs />} />
                  <Route path="/manageantibot" element={<ManageAntiBot />} />
                  <Route path="/specialpresales" element={<SpecialPresales />} />
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
