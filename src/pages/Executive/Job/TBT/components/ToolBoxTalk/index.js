/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDEditor from "components/MDEditor";
import MDInput from "components/MDInput";

// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const activePoints = [
  {
    point:
      "We are worried about different products in different joined components",
  },
  {
    point:
      "We are worried about different products in different joined components",
  },
];

function ToolBoxTalk() {
  const [editorValue, setEditorValue] = useState(
    "<p>Some initial <strong>bold</strong> text</p><br><br><br><br>"
  );

  return (
    <MDBox>
      <MDTypography variant="h5">Tool-Box Talk</MDTypography>
      <MDBox
        mt={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Date" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Location" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Company Supervisor/Line Manager" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Safety Representative" />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Department" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              variant="standard"
              fullWidth
              sx={{ textAlign: "left" }}
              required
            >
              <InputLabel id="demo-simple-select-label">
                Contractor Representatives
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
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Contractor Employees" />
          </Grid>
        </Grid>
      </MDBox>

      <MDBox mt={4}>
        <MDTypography variant={"h6"}>
          1.) Safety Contract review of action items from last meetings.
        </MDTypography>
        {activePoints.map((activePoint) => {
          return (
            <MDBox mt={1} mb={1}>
              <MDTypography
                variant="button"
                color="success"
                fontWeight="regular"
                textGradient
              >
                <spna
                  style={{
                    fontWeight: "900",
                    fontSize: "20px",
                    alignItems: "center",
                  }}
                >
                  *
                </spna>{" "}
                {activePoint.point}
              </MDTypography>
            </MDBox>
          );
        })}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField variant="outlined" label="Any Discussions" fullWidth />
          </Grid>
        </Grid>
      </MDBox>

      <MDBox mt={4}>
        <MDTypography variant={"h6"}>
          2.) Items of General Safety Importance to the total work site.
        </MDTypography>
        <MDBox my={2}>
          <MDTypography variant="caption" textGradient color="info">
            Ask employee to mention any Incident/near miss duration that past
            day which may have or have resulted into damage to property or
            injury yo company or Contract personnel{" "}
          </MDTypography>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField variant="outlined" label="Any Discussions" fullWidth />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

export default ToolBoxTalk;
