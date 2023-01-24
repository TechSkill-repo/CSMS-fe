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
        3.) Items of Safety Interest to this Group.
      </MDTypography>

      <MDBox mt={3}>
        <MDTypography variant="subtitle2">
          Red Strips, Orange Strips, Green Strips, Safety-alert tips for Satefy
          communications, hazards or Safety conditions applicable to this
          group's work area
        </MDTypography>
      </MDBox>
      <MDBox
        sx={{
          padding: "1rem",
        }}
      >
        <img
          src={
            "https://imgv2-2-f.scribdassets.com/img/document/517513004/original/20eb5956b0/1672853050?v=1"
          }
          alt="loader"
          style={{ width: "260px", height: "100%" }}
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
