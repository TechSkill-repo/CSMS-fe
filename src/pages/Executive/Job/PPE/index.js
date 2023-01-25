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

      <MDTypography
        variant="h5"
        sx={{
          margin: "1rem",
        }}
      >
        Daily PPE Checklist
      </MDTypography>

      <Box sx={{ display: "flex", alignItems: "flex-end", margin: "1rem 0" }}>
        <AccountCircle
          sx={{ color: "action.active", mr: 1, my: 0.5 }}
          fontSize="medium"
        />
        <TextField
          id="input-with-sx"
          label="Enter Employee ID"
          variant="standard"
          //   value={search}
          //   onChange={(e) => setSearch(e.target.value)}
          //   helperText={error}
          //   error={error ? true : false}
        />
        <Button
          variant="gradient"
          color="info"
          //   onClick={searchEmployee}
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
          {/* {loading? <img
                  src={loader}
                  style={{ width: "20px", height: "20px" }}
                ></img>:"Search"} */}
          Search
        </Button>
      </Box>

      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "center",
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
              md: "50%",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid gray",
            borderRadius: "10px",
            padding: "1rem",
            flexDirection: "column",
            gap: "10px",
          }}
        >
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
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBox
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              color: "green",
            }}
          >
            <MDTypography variant="h6" fontSize={"18px"} color="green">
              All PPE Equipments are in good condition{" "}
            </MDTypography>
            <DoneAllIcon fontSize="medium"></DoneAllIcon>
          </MDBox>
          <MDButton variant="gradient" color="info">
            ALL GOOD
          </MDButton>
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
              Equipments Damaged Condition
            </MDTypography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
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
                            PPE
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            HouseKeeping
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Tools and tackles
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
                            PPE
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            HouseKeeping
                          </MenuItem>
                          <MenuItem key={2} value={"Rmm"}>
                            Tools and tackles
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
              <MDButton variant="gradient" color="info">
                Submit
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
