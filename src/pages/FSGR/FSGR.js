import { Card, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

function FSGR() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid>
        <Card
          style={{
            marginTop: "1rem",
            padding: "1rem",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          }}
        >
          <MDTypography variant="h5">
            Initial Investigation Report Generation
          </MDTypography>
          <MDBox mt={3}>
            <MDTypography variant="subtitle1" color="info">
              Please fill the following details to generate a initial
              Investigation report
            </MDTypography>
          </MDBox>
          <MDBox my={3}>
            <MDInput type="date" label="Date" value="2018-11-23" />
          </MDBox>
          <MDTypography variant="h6">1.) Report Description</MDTypography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <MDInput variant="outlined" label="Report Description" />
          </Box>
          <MDTypography variant="h6">2.) ACTUAL FSGR</MDTypography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <MDInput variant="outlined" label="ACTUAL FSGR" />
          </Box>
          <Grid display="flex" justifyContent="space-between">
            <Grid p={1}>
              <MDBox ml={1}>
                <MDTypography variant="subtitle2">EMPLOYEE NAME</MDTypography>
              </MDBox>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "240px" },
                }}
                noValidate
                autoComplete="off"
              >
                <MDInput variant="outlined" label="EMPLOYEE NAME" />
              </Box>
            </Grid>

            <Grid p={1}>
              <MDBox ml={1}>
                <MDTypography variant="subtitle2">
                  SAFETY PASS NUMBER
                </MDTypography>
              </MDBox>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "240px" },
                }}
                noValidate
                autoComplete="off"
              >
                <MDInput variant="outlined" label="SAFETY PASS NUMBER" />
              </Box>
            </Grid>
            <Grid p={1}>
              <MDBox ml={1}>
                <MDTypography variant="subtitle2">DESIGNATION</MDTypography>
              </MDBox>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "240px" },
                }}
                noValidate
                autoComplete="off"
              >
                <MDInput variant="outlined" label="DESIGNATION" />
              </Box>
            </Grid>
            <Grid p={1}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "240px" },
                }}
                noValidate
                autoComplete="off"
              >
                <MDBox ml={1}>
                  <MDTypography variant="subtitle2">JOB LOCATION</MDTypography>
                </MDBox>
                <MDInput variant="outlined" label="JOB LOCATION" />
              </Box>
            </Grid>
          </Grid>
          <MDBox>
            <MDTypography my={2}>
              INVESTIGATION TEAM WITH DESIGNATION
            </MDTypography>
            <Grid container display="flex">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "500px" },
                }}
                noValidate
                autoComplete="off"
              >
                <MDInput variant="outlined" label="Safety Manager" />
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "500px" },
                }}
                noValidate
                autoComplete="off"
              >
                <MDInput variant="outlined" label="Safety Officer" />
              </Box>
            </Grid>
          </MDBox>
          <MDBox mt={2}>
            <MDTypography>ANALYSIS METHOD (5W1H)</MDTypography>
          </MDBox>
          <MDBox my={2}>
            <MDTypography>
              Q.1) WHAT WAS THE ISSUE/ WHAT WAS THE FACT ?
            </MDTypography>
          </MDBox>
          <MDInput label="Type here..." multiline rows={2} />
          <MDBox my={2}>
            <MDTypography>Q.2) WHEN WAS THE ISSUE ?</MDTypography>
          </MDBox>
          <MDInput type="date" />
          <MDBox my={2}>
            <MDTypography>Q.3) WHERE WAS THE ISSUE ?</MDTypography>
          </MDBox>
          <MDInput label="Type here..." />
          <MDBox my={2}>
            <MDTypography>
              Q.4) WHO SUGGESTS THE ISSUE / WHO HANDLED THE ISSUE ?
            </MDTypography>
            <Grid container>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "500px" },
                }}
                noValidate
                autoComplete="off"
              >
                <MDInput label="Who Suggested the Issue ?" />
              </Box>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "500px" },
                }}
                noValidate
                autoComplete="off"
              >
                <MDInput label="Who Handled the Issue ?" />
              </Box>
            </Grid>
          </MDBox>
          <MDBox my={2}>
            <MDTypography>Q.5) WHY WAS THE ISSUE</MDTypography>
          </MDBox>
          <MDInput label="Type here..." multiline rows={2} />
          <MDBox my={2}>
            <MDTypography>Q.6) HOW TO SOLVE THE ISSUE ?</MDTypography>
          </MDBox>
          <MDInput label="Type here..." multiline rows={2} />
          <MDBox my={2}>
            <MDTypography variant="h6">
              FINDINGS AFTER INVESTIGATION
            </MDTypography>
          </MDBox>
          <MDInput label="Type here..." multiline rows={2} />
          <MDBox my={2}>
            <MDTypography variant="h6">CHALLENGES/RISK</MDTypography>
          </MDBox>
          <MDInput
            label="Type here..."
            multiline
            rows={2}
            style={{ marginBottom: "25px" }}
          />
          <MDButton color="success" variant="gradient">
            Submit
          </MDButton>
        </Card>
      </Grid>
    </DashboardLayout>
  );
}

export default FSGR;
