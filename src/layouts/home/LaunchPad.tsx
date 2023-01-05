import React from "react";
import { _launchpad, _launchpadStatistics } from "../../_mocks/_launchpad";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { ColorButton } from "../../components/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LaunchPadCard from "./LaunchPadCard";
import LaunchPadStatisticsCard from "./LaunchPadStatisticsCard";
import presalesBackImg from "../../assets/img1.png";
import { borderRadius } from "@mui/system";
const LaunchPad = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 8,
          paddingLeft: 3,
          paddingRight: 3,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: "52px",
              lineHeight: "78px",
              backgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              color: "#715DEC",
              textAlign: "start",
              fontStyle: "normal",
              // fontFamily:'Poppins'
            }}
          >
            The Launchpad
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              fontSize: "52px",
              lineHeight: "78px",
              backgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              color: "#FFFFFF",
              textAlign: "start",
              fontStyle: "normal",
              // fontFamily:'Poppins'
            }}
          >
            Protocol for Everyone!
          </Typography>
        </Box>
        <Box sx={{ width: "40%" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ColorButton variant="contained" startIcon={<AddCircleIcon />}>
              Create Launchpad
            </ColorButton>
          </Box>

          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "27px",
              color: "#FFFFFF",
              textAlign: "start",
              mt: 3,
              fontStyle: "normal",
            }}
          >
            Tinapad Helps everyone to create their own tokens and token sales in
            few seconds. Tokens Created on Pinksale will be varified and
            published on explorer websties.
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 5, paddingLeft: 4, mb: 2 }}>
        <Grid container spacing={3}>
          {_launchpad.map((data: any) => (
            <Grid xs key={data.id}>
              <LaunchPadCard launchpad={data} />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={3} sx={{ mt: 5 }}>
          {_launchpadStatistics.map((data: any) => (
            <Grid xs key={data.id}>
              <LaunchPadStatisticsCard launchpad={data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default LaunchPad;
