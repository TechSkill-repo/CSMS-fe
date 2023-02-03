import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import logo from "assets/logo.jpeg";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";

const ToolsDetails = () => {
  const columns = [
    { Header: "Sl. no.", accessor: "index", width: "5%" },
    {
      Header: "Desc of Tools and Tackles",
      accessor: "description",
      width: "5%",
    },
    { Header: "Make/ID no.", accessor: "id", width: "5%" },
    {
      Header: "Physical Condition of Tools and Tackles",
      accessor: "condition",
      width: "5%",
    },
    {
      Header: "TPI Valid Date",
      accessor: "date",
      width: "5%",
    },
    {
      Header: "Any Deformities",
      accessor: "deformities",
      width: "5%",
    },
    {
      Header: "Audit done by",
      accessor: "audit",
      width: "5%",
    },
    {
      Header: "Signature",
      accessor: "signature",
      width: "5%",
    },
  ];
  const rows = [
    {
      index: 1,
      description: "Screw Driver",
      id: "123",
      condition: "OK",
      date: "12/12/2021",
      deformities: "No",
      audit: "Yasin Khan",
      signature: "Yasin Khan",
    },
    {
      index: 2,
      description: "Hammer",
      id: "12",
      condition: "OK",
      date: "12/12/2021",
      deformities: "No",
      audit: "Yasin Khan",
      signature: "Yasin Khan",
    },
  ];

  return (
    <Box>
      <Grid
        container
        flexDirection={{
          xs: "column",
          sm: "column",
          md: "row",
        }}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginBottom: {
            xs: 3,
            sm: 3,
          },
        }}
      >
        <Grid item xs={3}>
          <img src={logo} alt="" />
        </Grid>
        <Grid
          item
          xs={10}
          sm={10}
          md={6}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h4">S.H. Constructions & Co</Typography>
          <Typography variant="h6">JAMSHEDPUR</Typography>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
            }}
          >
            CHECKLIST OF TOOLS & TACKLES
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <MDTypography
              variant="h6"
              color="dark"
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 14,
                  md: 14,
                },
              }}
            >
              Date:
            </MDTypography>
            <MDTypography
              variant="body1"
              color="secondary"
              ml={2}
              sx={{
                fontSize: {
                  xs: 14,
                  sm: 14,
                  md: 14,
                },
              }}
            >
              {" "}
              {new Date().toLocaleDateString()}
            </MDTypography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "10px",
        }}
      >
        <DataTable
          table={{
            columns,
            rows,
          }}
        />
      </Box>
    </Box>
  );
};

export default ToolsDetails;
