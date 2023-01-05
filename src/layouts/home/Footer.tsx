import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        //   display: "flex",
        //   justifyContent: "space-between",
        paddingLeft: 3,
        paddingRight: 3,
        mb:4
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "52px",
            lineHeight: "78px",
            color: "#FFFFFF",
            textAlign: "start",
            backgroundClip: "text",
          }}
        >
          Partners
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "27px",
            color: "#FFFFFF",
            textAlign: "start",
            // opacity:0.5
          }}
        >
          Tinapad is honored and thrilled to be backed by leading Venture
          Capitals in blockchain industry.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
