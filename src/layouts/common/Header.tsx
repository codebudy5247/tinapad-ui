import { Box, Stack } from "@mui/material";
import SearchBar from "../../components/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { ColorButton } from "../../components/Button";
import Grid from "@mui/material/Grid/Grid";


const Header = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: 'relative', top: "-2rem" }}>
      <Box>
        <SearchBar />
      </Box>
      <Stack direction="row" spacing={2} display="flex" alignItems="center">
        <ColorButton variant="contained" startIcon={<AddCircleIcon />} sx={{ height: 'fit-content' }}>
          Create
        </ColorButton>
        <ColorButton variant="contained" startIcon={<AddCircleIcon />} sx={{
          display: { xs: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
          height: 'fit-content'
        }}>
          Ethereum Chain
        </ColorButton>
        <ColorButton variant="contained" startIcon={<AddCircleIcon />} sx={{
          display: { xs: 'block', md: 'none', lg: 'none', xl: 'none' },
          height: 'fit-content'
        }}>ETH
        </ColorButton>
        <ColorButton variant="contained" startIcon={<AccountBalanceWalletIcon />} sx={{ height: 'fit-content' }}>
          {" "} Connect wallet
        </ColorButton>
      </Stack>
    </Box>
  );
};

export default Header;
