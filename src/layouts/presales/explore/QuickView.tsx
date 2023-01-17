import React from "react";
import { Box, Grid } from "@mui/material";

import { _explore } from "../../../_mocks/_explore";
import Card from "./Card";
const QuickView = () => {
  return (
    <>
      <Box sx={{
        flexGrow: 1,
        mt: 8,
        paddingX:{xs: '8%', sm: '5%', },
        mb: 2,
      }}>
        <Grid container spacing={3}  >
          {_explore.map((data: any) => (
            <Grid xs key={data.id}>
              <Card explore={data} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default QuickView;
