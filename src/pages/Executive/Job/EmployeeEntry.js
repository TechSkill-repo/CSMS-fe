import { AccountCircle } from "@mui/icons-material";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import Form from "./Form";

function EmployeeEntry() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        sx={{ display: "flex", alignItems: "flex-end", marginTop: "1rem" }}
      >
        <AccountCircle
          sx={{ color: "action.active", mr: 1, my: 0.5 }}
          fontSize="medium"
        />
        <TextField
          id="input-with-sx"
          label="Enter Employee ID"
          variant="standard"
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
          // helperText={error}
          // error={error ? true : false}
        />
        <Button
          variant="gradient"
          color="info"
          // onClick={searchEmployee}
          sx={{
            color: "white",
            marginLeft: "1rem",
            border: "1px solid gray",
            transition: "all 0.1s ease-in-out",
            "&:hover": {
              color: "white !important",
              background: "#232526",
              background: "-webkit-linear-gradient(to right, #232526, #414345)",
              background: "linear-gradient(to right, #232526, #414345)",
            },
          }}
        >
          Search
        </Button>
      </MDBox>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Grid container flexDirection={"column"} gap={"5px"}>
          <Typography
            variant="subtitle1"
            fontSize={14}
            color={"gray"}
            fontWeight={"regular"}
          >
            Date: {new Date().toLocaleDateString()}
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={14}
            color={"gray"}
            fontWeight={"regular"}
          >
            Employee Name: Fahad Mahmood
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={14}
            color={"gray"}
            fontWeight={"regular"}
          >
            Designation: Site Employee
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={14}
            color={"gray"}
            fontWeight={"regular"}
          >
            Shift: Morning Shift
          </Typography>
          <Typography
            variant="subtitle1"
            fontSize={14}
            color={"gray"}
            fontWeight={"regular"}
          >
            Access Time: 8:00 AM - 11:00 AM
          </Typography>
        </Grid>
      </Card>

      <Grid container>
        <Form></Form>
      </Grid>
    </DashboardLayout>
  );
}

export default EmployeeEntry;
