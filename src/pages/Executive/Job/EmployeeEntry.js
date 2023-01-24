import { AccountCircle } from "@mui/icons-material";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import Form from "./Form";

function EmployeeEntry() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Grid container flexDirection={"column"} gap={"5px"}>
          <MDTypography variant="h6" fontSize={14} color="dark">
            Date: {new Date().toLocaleDateString()}
          </MDTypography>
          <MDTypography variant="h6" fontSize={14} color="dark">
            Shift: Morning Shift
          </MDTypography>
          <MDTypography variant="h6" fontSize={14} color="dark">
            Access Time: 8:00 AM - 11:00 AM
          </MDTypography>
        </Grid>
      </Card>

      <Grid container>
        <Form></Form>
      </Grid>
    </DashboardLayout>
  );
}

export default EmployeeEntry;
