import { Grid, Typography } from "@mui/material";
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
        gap="5px"
        style={{ paddingTop: "1rem" }}
      >
        {details.map((detail) => (
          <Grid item>
            <Typography
              variant="subtitle1"
              fontSize={14}
              color={"gray"}
              fontWeight={"regular"}
            >
              {detail.name}: {detail.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Details;
