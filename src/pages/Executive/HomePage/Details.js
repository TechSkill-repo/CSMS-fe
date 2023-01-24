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
        gap="1px"
        style={{ paddingTop: "1rem" }}
      >
        {details.map((detail) => (
          <Grid item display="flex">
            <MDTypography variant="h6" color="dark" fontSize={16} mb={2}>
              {detail.name}:{" "}
            </MDTypography>
            <MDTypography
              variant="body1"
              color="secondary"
              ml={2}
              fontSize={16}
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
