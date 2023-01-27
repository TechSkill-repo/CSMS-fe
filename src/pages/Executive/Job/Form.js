import { Button, Card, Grid, Icon, TextField, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const [timeBox, setTimeBox] = useState(false);
  const [workOrder, setWorkOrder] = useState("");

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/tbt-form-fillup");
  };
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
        <MDTypography
          variant="h6"
          fontSize={{
            xs: "14px",
            sm: "14px",
            md: "18px",
          }}
        >
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
            value={workOrder}
            onChange={(e) => setWorkOrder(e.target.value)}
          />
        </MDBox>
      </MDBox>
      <MDTypography
        variant="subtitle2"
        color="info"
        fontSize={{
          xs: "14px",
          sm: "14px",
          md: "15px",
        }}
        mt={2}
        sx={{
          textAlign: {
            xs: "left",
            sm: "left",
            md: "center",
          },
        }}
      >
        Please ask for grace time, with reason specified.{" "}
        <span
          style={{ fontWeight: "800", color: "#e91e63", cursor: "pointer" }}
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
      <MDBox
        mt={3}
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-end",
          },
        }}
      >
        <MDButton
          disabled={workOrder.length < 5}
          variant="gradient"
          color="success"
          onClick={handleNext}
        >
          <Icon>done</Icon>&nbsp; Submit
        </MDButton>
      </MDBox>
    </Grid>
  );
}

export default Form;
