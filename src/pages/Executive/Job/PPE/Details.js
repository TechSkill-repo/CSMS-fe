import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import MDTypography from "components/MDTypography";
import React from "react";

const Details = ({ details }) => {
  return (
    <Box>
      <Grid
        container
        flexDirection={"column"}
        style={{
          paddingTop: "1rem",
          gap: "0",
        }}
      >
        {details.map((detail) => (
          <Grid item display="flex">
            <MDTypography
              variant="h6"
              color="dark"
              mb={2}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 14,
                  md: 14,
                },
              }}
            >
              {detail.name}:{" "}
            </MDTypography>
            <MDTypography
              variant="body1"
              color="secondary"
              ml={2}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 14,
                  md: 14,
                },
              }}
              mb={2}
            >
              {" "}
              {detail.value}
            </MDTypography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Details;
