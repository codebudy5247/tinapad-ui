import { Box, Stack } from "@mui/material";
import SearchBar from "../../components/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { ColorButton } from "../../components/Button";


const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", position: 'relative', top: "-2rem" }}>
      <Box> <SearchBar /> </Box>
      <Stack direction="row" spacing={2}>
        <ColorButton variant="contained" startIcon={<AddCircleIcon />}>
          Create
        </ColorButton>
        <ColorButton
          variant="contained"
          // sx={{ ml: 1 }}
          startIcon={<AddCircleIcon />}
        >
          Ethereum Chain
        </ColorButton>
        <ColorButton
          variant="contained"
          // sx={{ ml: 1 }}
          startIcon={<AccountBalanceWalletIcon />}
        >
          {" "}
          Connect wallet
        </ColorButton>
      </Stack>
    </Box>
  );
};

export default Header;
