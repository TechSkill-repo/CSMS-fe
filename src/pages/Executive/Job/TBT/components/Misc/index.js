import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React, { useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

function Misc() {
  const [items, setItems] = useState([1]);
  const handleAddClick = () => setItems((prev) => prev.concat(prev.length + 1));
  const handleRemoveClick = () =>
    setItems((prev) => prev.slice(0, prev.length - 1));
  return (
    <MDBox>
      <Grid
        container
        sx={{
          gap: "1rem",
        }}
      >
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
                <Grid item xs={12} md={5}>
                  <FormControl
                    variant="standard"
                    fullWidth
                    sx={{ textAlign: "left" }}
                    required
                  >
                    <InputLabel id="demo-simple-select-label">
                      Employees
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
                        Coke Plant
                      </MenuItem>
                      <MenuItem key={2} value={"Rmm"}>
                        Rmm
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
                      onClick={() => handleRemoveClick()}
                    />
                    <AddCircleIcon
                      onClick={handleAddClick}
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

        <Grid item>
          <MDTypography
            variant="h6"
            fontSize={15}
            sx={{
              margin: "10px 0",
            }}
          >
            7. Feedback suggestions and grievances request.
          </MDTypography>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default Misc;
