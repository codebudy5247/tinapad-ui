import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Image from "../Image";
import DocsImg from "../../assets/Docs.png";
import KYCImg from "../../assets/KYC.png";
import LaunchpadImg from "../../assets/Launchpad.png";
import PresaleImg from "../../assets/Presale.png";
import SpecialSales from "../../assets/SpecialSales.png";
import Lock from "../../assets/Lock.png";
import UtilityImg from "../../assets/Utility.png";
import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HomeImg from "../../assets/Home.png";
import LogoImg from "../../assets/logo.png";
const NavItems = () => {
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon sx={{ color: "white" }}>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={LogoImg}
            sx={{ height: 30, color: "black" }}
          />
        </ListItemIcon>
        <Box>
          <ListItemText primary="Tina" />
          <ListItemText primary="LaunchPad" />
        </Box>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon sx={{ color: "white" }}>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={HomeImg}
            sx={{ height: 30, color: "black" }}
          />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={LaunchpadImg}
            sx={{ height: 40, color: "black" }}
          />
        </ListItemIcon>
        <ListItemText primary="Presales" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={SpecialSales}
            sx={{ height: 40, color: "black" }}
          />
        </ListItemIcon>
        <ListItemText primary="Special Sales" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={Lock}
            sx={{ height: 40, color: "black" }}
          />
        </ListItemIcon>
        <ListItemText primary="Lock" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={UtilityImg}
            sx={{ height: 40, color: "black" }}
          />
        </ListItemIcon>
        <ListItemText primary="Utility & Tools" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={PresaleImg}
            sx={{ height: 40, color: "black" }}
          />
        </ListItemIcon>
        <ListItemText primary="Presale Alerts" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={KYCImg}
            sx={{ height: 40, color: "black" }}
          />
        </ListItemIcon>
        <ListItemText primary="KYC & Audits" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <Image
            disabledEffect
            visibleByDefault
            alt="empty content"
            src={DocsImg}
            sx={{ height: 40, color: "black" }}
          />
        </ListItemIcon>
        <ListItemText primary="Docs" />
      </ListItemButton>
    </React.Fragment>
  );
};

export default NavItems;
