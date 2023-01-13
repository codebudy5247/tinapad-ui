import { Drawer, List, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoImg from "../../assets/logo.png";
import Image from "../Image";
import { Box } from "@mui/material";
import SocialsButton from "../SocialsButtons";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Toolbar>
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
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
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
         <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            //   mt: "20%",
            }}
          >
            <SocialsButton />
          </Box>
      </List>
    </Drawer>
  );
};

export default Sidebar;
