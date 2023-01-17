import { Box, Stack } from "@mui/material";
import SearchBar from "../../components/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { ColorButton } from "../../components/Button";
import { useState, useEffect } from "react";

const DesktopView = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <SearchBar />
      </Box>
      <Stack direction="row" spacing={2}>
        <ColorButton
          variant="contained"
          startIcon={<AddCircleIcon />}
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
        >
          Create
        </ColorButton>
        <ColorButton
          variant="contained"
          startIcon={<AddCircleIcon />}
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
        >
          Ethereum Chain
        </ColorButton>
        <ColorButton
          variant="contained"
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
          startIcon={<AccountBalanceWalletIcon />}
        >
          {" "}
          Connect wallet
        </ColorButton>
      </Stack>
    </Box>
    
);
};

const MobileView = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <SearchBar />
      </Box>
      <Stack direction="row" spacing={{ xs: 0.5, sm: 2 }}>
        <ColorButton
          variant="contained"
          startIcon={<AddCircleIcon />}
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
        >
          ETH
        </ColorButton>
        <ColorButton
          variant="contained"
          sx={{
            height: "fit-content",
            borderRadius: "20px",
            bgcolor: "rgba(242, 12, 236, 0.15)",
          }}
          startIcon={<AccountBalanceWalletIcon />}
        >
          {" "}
          Connect
        </ColorButton>
      </Stack>
    </Box>
  );
};

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth < 900) {
        setMobileView(true);
      }
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return <>{mobileView ? <MobileView /> : <DesktopView />}</>;
};

export default Header;
