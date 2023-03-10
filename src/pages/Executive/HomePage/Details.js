import { Grid, Typography } from "@mui/material";
import MDTypography from "components/MDTypography";
import React from "react";

function Details() {
  const details = [
    { name: "Name", value: "Richard Davis" },
    { name: "Email", value: "noname@domain.com" },
    { name: "Employee Id", value: "123456" },
    { name: "Employee Designation", value: "Employee" },
    { name: "Contact", value: "1234567890" },
    { name: "Address", value: "123, Street, City, State, Country" },
    { name: "Date of Birth", value: "01/01/1990" },
  ];

  return (
    <>
      <Grid
        container
        flexDirection={"column"}
        style={{
          paddingTop: "1rem",
          gap: {
            xs: "0px",
            sm: "1px",
          },
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
                  md: 16,
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
                  md: 16,
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
    </>
  );
}

export default Details;
