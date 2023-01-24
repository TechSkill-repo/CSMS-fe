import { Button, Grid, TextField, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import React from "react";
import { Link } from "react-router-dom";

function Form() {
  return (
    <>
      <Grid
        container
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <MDBox>
          <Typography variant="h5">
            Please Enter Your Work Permit Number To Get Access of TBT
          </Typography>
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
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
              // helperText={error}
              // error={error ? true : false}
            />
          </MDBox>
        </MDBox>
        <Typography
          variant="subtitle1"
          fontSize={14}
          color={"red"}
          fontWeight={"regular"}
        >
          If your Time has been Expired Please ask for grace time, with reason
          specified.
        </Typography>

        <MDBox
          sx={{
            width: "50%",
          }}
        >
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
            >
              Submit
            </Button>
          </MDBox>
        </MDBox>
        <Typography variant="h5">OR</Typography>
        <Link to="/tbt-form-fillup">
          <MDButton
            variant="info"
            color="gradient"
            // onClick={searchEmployee}
            sx={{
              color: "white",
              marginLeft: "1rem",
              padding: "0.8rem 2.2rem",
              border: "1px solid gray",
              fontSize: "15px",
              transition: "all 0.1s ease-in-out",
              "&:hover": {
                color: "white !important",
                background: "#232526",
                background:
                  "-webkit-linear-gradient(to right, #232526, #414345)",
                background: "linear-gradient(to right, #232526, #414345)",
              },
            }}
          >
            Submit
          </MDButton>
        </Link>
      </Grid>
    </>
  );
}

export default Form;
