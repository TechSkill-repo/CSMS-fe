import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Form() {
  const [timeBox, setTimeBox] = useState(false);
  return (
    <Grid
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px;",
      }}
      p={2}
      mt={5}
      textAlign="center"
      width="100%"
    >
      <MDBox>
        <MDTypography variant="h6">
          Please Enter Your Work Permit Number To Get Access of TBT
        </MDTypography>
        <MDBox
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <TextField
            id="input-with-sx"
            label="Enter Work Permit Number"
            variant="outlined"
            fullWidth
          />
        </MDBox>
      </MDBox>
      <MDTypography
        variant="subtitle2"
        color="info"
        fontSize={14}
        mt={2}
        textAlign="left"
      >
        Please ask for grace time, with reason specified.{" "}
        <span
          style={{ fontWeight: "800", color: "#e91e63" }}
          onClick={() => setTimeBox(!timeBox)}
        >
          Click here
        </span>
      </MDTypography>

      {timeBox === true ? (
        <MDBox mt={3}>
          <MDBox sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <TextField
              id="input-with-sx"
              label="Reason for Grace Time"
              variant="outlined"
              fullWidth
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
                  background:
                    "-webkit-linear-gradient(to right, #232526, #414345)",
                  background: "linear-gradient(to right, #232526, #414345)",
                },
              }}
              onClick={() => setTimeBox(false)}
            >
              Submit
            </Button>
          </MDBox>
        </MDBox>
      ) : (
        ""
      )}
      <Link to="/tbt-form-fillup">
        <MDBox mt={3}>
          <MDButton variant="gradient" color="dark">
            Submit
          </MDButton>
        </MDBox>
      </Link>
    </Grid>
  );
}

export default Form;
