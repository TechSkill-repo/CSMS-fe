import Card from "@mui/material/Card/Card";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import MDBox from "components/MDBox";
import { AccountCircle } from "@mui/icons-material";
import Box from "@mui/material/Box/Box";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Button from "@mui/material/Button/Button";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Select from "@mui/material/Select/Select";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import FormControl from "@mui/material/FormControl/FormControl";
import Details from "./Details";
import { Icon } from "@mui/material";

const PPE = () => {
  const [items, setItems] = useState([1]);

  const handleAddClick = (complaint) => {
    setItems((prev) => prev.concat(prev.length + 1));
  };
  const handleRemoveClick = (complaint) => {
    setItems((prev) => prev.slice(0, prev.length - 1));
  };

  const details = [
    { name: "Name", value: "Richard Davis" },
    { name: "Safety Pass No.", value: "9018273EE" },
    { name: "Employee Id", value: "123456" },
    { name: "Employee Designation", value: "Employee" },
    { name: "Contact", value: "1234567890" },
    { name: "Address", value: "123, Street, City, State, Country" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid display="flex" sx={{ display: "flex", flexDirection: "column" }}>
        <Grid width="50%" sx={{ width: "100%" }}>
          <Card
            style={{
              marginTop: "1rem",
              padding: "1rem",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
            }}
          >
            <MDTypography
              variant="h5"
              sx={{
                margin: "1rem",
              }}
            >
              Daily PPE's Checklist
            </MDTypography>
            <Grid
              container
              sx={{
                width: "100%",
                padding: "10px",
                alignItems: "center",
                gap: "5rem",
              }}
            >
              <Grid
                item
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                  },
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                  // border: "1px solid gray",
                  borderRadius: "10px",
                  // padding: "1rem",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TextField
                  label="Date"
                  variant="outlined"
                  fullWidth
                  placeholder="Job"
                />
                <TextField
                  label="JOB"
                  variant="outlined"
                  fullWidth
                  placeholder="Job"
                />

                <TextField
                  label="SITE"
                  variant="outlined"
                  fullWidth
                  placeholder="Site"
                />

                <TextField
                  label="FORM NO."
                  variant="outlined"
                  fullWidth
                  placeholder="Form no."
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid width="50%" sx={{ width: "100%" }}>
          <Card
            style={{
              marginTop: "1rem",
              padding: "1rem",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
            }}
          >
            <MDBox mb={4}>
              <MDTypography variant="h4" color="primary">
                PPE Guide Lines
              </MDTypography>
            </MDBox>
            <MDTypography variant="subtitle2" color="info">
              PPE includes shoe cover, gown, mask, eye protection & gloves. Shoe
              cover should always be worn before entering the patient care area
              (Isolation ward etc.). If gowns are not fluid resistant, use a
              waterproof apron for procedures with expected high fluid volumes
              that might penetrate the gown.
            </MDTypography>
          </Card>
        </Grid>
      </Grid>
      <Card
        sx={{
          width: "100%",
          padding: "1rem",
          margin: "1rem 0",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6.5} lg={6.5}>
            <MDTypography
              variant="body1"
              sx={{
                fontSize: "17px",
                margin: "10px 0",
              }}
            >
              Employee PPE conditions
            </MDTypography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Grid item xs={12} md={10}>
                <FormControl
                  variant="standard"
                  fullWidth
                  sx={{ textAlign: "left" }}
                  required
                >
                  <InputLabel id="demo-simple-select-label">
                    Employee ID
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
                      1234
                    </MenuItem>
                    <MenuItem key={2} value={"Rmm"}>
                      2345432
                    </MenuItem>
                    <MenuItem key={2} value={"Rmm"}>
                      1234
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {items.map((item, index) => {
                return (
                  <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                    key={index.toString()}
                  >
                    <Grid item xs={12} md={5}>
                      <FormControl
                        variant="standard"
                        fullWidth
                        sx={{ textAlign: "left" }}
                        required
                      >
                        <InputLabel id="demo-simple-select-label">
                          PPE Equipments
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
                            Safety Shoes
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Safety Helmet with chain strip
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Safety Hand gloves
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Safety Goggles
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Safety Jacket
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Safety Dust Mask
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Safety Leg Guard
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Face Shield
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} md={5}>
                      <FormControl
                        variant="standard"
                        fullWidth
                        sx={{ textAlign: "left" }}
                        required
                      >
                        <InputLabel id="demo-simple-select-label">
                          Status
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
                            Good
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Partially Good
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Bad
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
              <MDBox mt={4} mb={2}>
                <MDButton width="100%" variant="gradient" color="info">
                  Submit
                </MDButton>
              </MDBox>
              <MDButton width="100%" variant="gradient" color="success">
                <Icon>done</Icon> &nbsp; Click here to mark all PPE checked Good
              </MDButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={5} lg={5}>
            <Details details={details}></Details>
          </Grid>
        </Grid>
      </Card>
    </DashboardLayout>
  );
};

export default PPE;
