import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  Card,
  FormControl,
  Grid,
  Icon,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Stack } from "@mui/system";
import MDBadge from "components/MDBadge";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import MDButton from "components/MDButton";

function Attendance() {
  const [items, setItems] = useState([1]);

  const handleAddClick = (complaint) => {
    setItems((prev) => prev.concat(prev.length + 1));
  };
  const handleRemoveClick = (complaint) => {
    setItems((prev) => prev.slice(0, prev.length - 1));
  };
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
          <MDTypography variant="h4">Daily Attendance</MDTypography>
          <MDBox mt={1}>
            <MDTypography variant="subtitle2" color="info">
              Please enter all the employee Name
            </MDTypography>
          </MDBox>

          <MDBox mb={1}>
            <MDTypography variant="button">
              Total Number of Employee Assign to this Task
            </MDTypography>
          </MDBox>

          <MDInput variant="outlined" label="Date" />

          <MDInput
            style={{ marginTop: "20px" }}
            variant="outlined"
            label="Total No. of People Assign"
          />

          <Grid mt={4}>
            <MDTypography>Total Number of People present</MDTypography>
          </Grid>
          {items.map((item, index) => {
            return (
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                key={index.toString()}
              >
                <Grid mt={2} item xs={12} md={10}>
                  <FormControl
                    variant="standard"
                    fullWidth
                    sx={{ textAlign: "left" }}
                    required
                  >
                    <InputLabel id="demo-simple-select-label">
                      Employee Names
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Location"
                      // onChange={handleInput}
                      name="location"
                      py={2}
                      SelectDisplayProps={{
                        style: {
                          paddingTop: "8px",
                          paddingBottom: "8px",
                          paddingLeft: 0,
                        },
                      }}
                      sx={{
                        height: "30px",
                        //  textAlign:"left"
                      }}
                    >
                      <MenuItem key={1} value={"Coke"}>
                        Name 1
                      </MenuItem>
                      <MenuItem key={2} value={"Rmm"}>
                        Name 2
                      </MenuItem>
                      <MenuItem key={2} value={"Rmm"}>
                        Name 3
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6} md={2}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "end",
                    }}
                  >
                    <RemoveCircleIcon
                      style={{
                        fontSize: "3em",
                        cursor: "pointer",
                        color: "#4782da",
                        display: items.length === 1 ? "none" : "",
                      }}
                      onClick={() => handleRemoveClick(false)}
                    />
                    <AddCircleIcon
                      onClick={() => handleAddClick(false)}
                      style={{
                        fontSize: "3em",
                        cursor: "pointer",
                        color: "#4782da",
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            );
          })}
          <MDBox>
            <MDTypography variant="subtitle2" mt={2} color="success">
              Upload Group photo or Attendance sheet
            </MDTypography>
          </MDBox>
          <Grid mt={2} mb={2} pl={0} xs={12} md={4}>
            <Stack direction="row" alignItems="center" spacing={5}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#f44335",
                  color: "#f0f2f5",
                  width: "180px",
                }}
                component="label"
              >
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <IconButton
                style={{
                  color: "#495361",
                  fontSize: "30px",
                  width: "20%",
                }}
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </Stack>
          </Grid>
          <MDButton variant="gradient" color="success">
            <Icon>done</Icon>Submit
          </MDButton>
        </Card>
      </Grid>
    </DashboardLayout>
  );
}

export default Attendance;
