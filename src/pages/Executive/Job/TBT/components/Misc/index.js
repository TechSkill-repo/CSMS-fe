import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React, { useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function Misc() {
  const [items, setItems] = useState([1]);
  const [complaints, setComplaints] = useState([1]);

  const assignOfficers = [
    {
      name: "John Doe",
      id: 1,
    },
    {
      name: "Sarah Doe",
      id: 2,
    },
    {
      name: "Aleem RK",
      id: 3,
    },
  ];

  const handleAddClick = (complaint) => {
    console.log("====================================");
    console.log(complaint);
    console.log("====================================");
    if (complaint) {
      setComplaints((prev) => prev.concat(prev.length + 1));
      return;
    }

    setItems((prev) => prev.concat(prev.length + 1));
  };
  const handleRemoveClick = (complaint) => {
    if (complaint) {
      setComplaints((prev) => prev.slice(0, prev.length - 1));
      return;
    }
    setItems((prev) => prev.slice(0, prev.length - 1));
  };
  return (
    <MDBox>
      <Grid
        container
        sx={{
          gap: "1rem",
        }}
      >
        <Grid item xs={12}>
          <MDTypography
            variant="h6"
            fontSize={15}
            sx={{
              margin: "10px 0",
            }}
          >
            4. Standard Operating Procedures (SOP) relative to the group
          </MDTypography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Message"
            multiline={true}
            rows={2}
          ></TextField>
        </Grid>

        <Grid item xs={12} sm={12}>
          <MDTypography
            variant="h6"
            fontSize={15}
            sx={{
              marginBottom: "10px",
            }}
          >
            5. Reminder to there Employees of there Personal Responsibilities to
            insure and maintains.
          </MDTypography>
          {items.map((item, index) => {
            return (
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                key={index.toString()}
              >
                <Grid item xs={12} md={10}>
                  <FormControl
                    variant="standard"
                    fullWidth
                    sx={{ textAlign: "left" }}
                    required
                  >
                    <InputLabel id="demo-simple-select-label">
                      Responsibilities
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
        </Grid>
        <Grid item xs={12}>
          <MDTypography
            variant="h6"
            fontSize={15}
            sx={{
              margin: "10px 0",
            }}
          >
            6. Safety Message Hand-out/circular to be shared with contract
            Employees.
          </MDTypography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Message"
            multiline={true}
            rows={2}
          ></TextField>
        </Grid>

        <Grid item xs={12}>
          <MDTypography
            variant="h6"
            fontSize={15}
            sx={{
              margin: "10px 0",
            }}
          >
            7. Action resulting from meeting and points raised by contract
            employees and supervisor.
          </MDTypography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Message"
            multiline={true}
            rows={2}
          ></TextField>
        </Grid>
      </Grid>
      <Box
        sx={{
          margin: "1rem 0",
        }}
      >
        <MDTypography
          variant="h6"
          fontSize={15}
          sx={{
            margin: "10px 0",
          }}
        >
          8. Feedback Suggestion and Grievance Requests
        </MDTypography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {complaints.map((item, index) => {
            return (
              <>
                <Grid
                  item
                  xs={12}
                  md={10}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Employee Name"
                    fullWidth
                  />
                  <TextField
                    variant="outlined"
                    placeholder="Description"
                    fullWidth
                  />
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
                        display: complaints.length === 1 ? "none" : "",
                      }}
                      onClick={() => handleRemoveClick(true)}
                    />
                    <AddCircleIcon
                      onClick={() => handleAddClick(true)}
                      style={{
                        fontSize: "3em",
                        cursor: "pointer",
                        color: "#4782da",
                      }}
                    />
                  </div>
                </Grid>
              </>
            );
          })}
        </Grid>
        <Grid container flexDirection={"column"} gap="10px">
          <Grid item>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ textAlign: "left" }}
              required
            >
              <InputLabel id="demo-simple-select-label">
                Primary Assign
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
          <Grid item>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ textAlign: "left" }}
              required
            >
              <InputLabel id="demo-simple-select-label">
                Secondary Assign
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
        </Grid>
      </Box>
    </MDBox>
  );
}

export default Misc;
