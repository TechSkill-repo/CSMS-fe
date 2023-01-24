import { Card, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";

function ViewPdf() {
  return (
    <MDBox
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDTypography variant="h5">
        Items of Safety Interest to this Group.
      </MDTypography>

      <MDBox
        sx={{
          padding: "1rem",
        }}
      >
        <img
          src={
            "https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNvZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          alt="loader"
          style={{ width: "500px", height: "500px" }}
        />
      </MDBox>
      <MDTypography
        variant="h6"
        fullWidth
        sx={{
          textAlign: "left",
          fontSize: "14px",
          width: "100%",
        }}
      >
        Please provide any queries you may have on the above.
      </MDTypography>
      <TextField
        sx={{
          margin: "5px 0",
        }}
        variant="outlined"
        fullWidth
        placeholder="Queries"
      ></TextField>
    </MDBox>
  );
}

export default ViewPdf;
