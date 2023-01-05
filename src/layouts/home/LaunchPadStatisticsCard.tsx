import React from "react";
import Card from "@mui/material/Card";
import { Box, CardActions, Typography } from "@mui/material";
import Image from "../../components/Image";
import Iconify from "../../components/Iconify";
const LaunchPadStatisticsCard = (props: any) => {
  return (
    <Box
    sx={{
      backgroundImage: `url(${props?.launchpad?.backgroundImg})`,
      backgroundRepeat: "no-repeat",
      width: "265px",
      height: "177px",
      borderRadius: "10px",
      paddingLeft: 2,
      paddingTop: 2,
    }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "22px",
          textTransform: "capitalize",
          color: "#FFFFFF",
          textAlign: "start",
        }}
      >
        {/* <Iconify
          icon="ic:baseline-do-not-disturb-on-total-silence"
          color="#FFFFFF"
        />{" "} */}
        {props?.launchpad?.title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "28px",
          lineHeight: "34px",
          textTransform: "capitalize",
          color: "#FFFFFF",
          textAlign: "start",
        }}
      >
        {props?.launchpad?.value}
      </Typography>
      <CardActions>
        {/* <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={props?.launchpad?.image}
        /> */}
      </CardActions>
    </Box>
  );
};

export default LaunchPadStatisticsCard;
