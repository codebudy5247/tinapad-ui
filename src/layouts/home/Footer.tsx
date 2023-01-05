import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../../components/Image";
import tokeroImg from "../../assets/tokero.png";
import rikkeiImg from "../../assets/rikkeicapital.png";
import codevixImg from "../../assets/codevix.png";
import copperImg from "../../assets/copper.png";
import elrondImg from "../../assets/elrond.png";
const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        //   display: "flex",
        //   justifyContent: "space-between",
        paddingLeft: 3,
        paddingRight: 3,
        mb: 4,
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
      <Box
        sx={{
          display: "flex",
          mt: 2,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={tokeroImg}
          sx={{ height: 30 }}
        />
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={rikkeiImg}
          sx={{ height: 30 }}
        />
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={elrondImg}
          sx={{ height: 30 }}
        />
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={codevixImg}
          sx={{ height: 30 }}
        />
        <Image
          disabledEffect
          visibleByDefault
          alt="empty content"
          src={copperImg}
          sx={{ height: 30 }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
