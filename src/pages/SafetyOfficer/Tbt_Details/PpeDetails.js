import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import logo from "assets/logo.jpeg";
import MDTypography from "components/MDTypography";

import DataTable from "examples/Tables/DataTable";
// import DoneAllIcon from "@mui/icons-material/DoneAll";

import { FcHighPriority, FcLowPriority } from "react-icons/fc";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoneAllIcon from "@mui/icons-material/FileDownloadDone";
import CloseIcon from "@mui/icons-material/Close";

const PpeDetails = () => {
  const columns = [
    { Header: "Sl. no.", accessor: "index", width: "5%" },
    {
      Header: "Name of Workman",
      accessor: "name",
      width: "5%",
    },
    { Header: "Safety Shoes", accessor: "shoes", width: "5%" },
    {
      Header: "Safety Helmet with chain Strap",
      accessor: "helmet",
      width: "5%",
    },
    {
      Header: "Safety Ear Plug",
      accessor: "earPlug",
      width: "5%",
    },
    {
      Header: "Safety Hand Gloves",
      accessor: "gloves",
      width: "5%",
    },
    {
      Header: "Safety Goggles",
      accessor: "goggles",
      width: "5%",
    },
    {
      Header: "Safety Flourescent Jacket",
      accessor: "jacket",
      width: "5%",
    },
    {
      Header: "Safety Dust Mask",
      accessor: "mask",
      align: "center",
      width: "5%",
    },
    {
      Header: "Leg Guard",
      accessor: "legGuard",
      width: "5%",
    },
    {
      Header: "Face Sheild",
      accessor: "faceShield",
      width: "5%",
    },
  ];

  const rows = [
    {
      name: (
        <Typography
          sx={{
            fontSize: "14px",
            width: "80px",
          }}
        >
          Muzaffar Alishan
        </Typography>
      ),
      index: "1",
      shoes: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      legGuard: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      helmet: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      mask: (
        <CloseIcon
          fontSize="medium"
          sx={{
            color: "red",
          }}
        />
      ),
      goggles: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      faceShield: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      jacket: (
        <CloseIcon
          fontSize="medium"
          sx={{
            color: "red",
          }}
        />
      ),
      earPlug: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      gloves: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
    },
    {
      name: (
        <Typography
          sx={{
            fontSize: "14px",
            width: "80px",
          }}
        >
          Muzaffar Alishan
        </Typography>
      ),
      index: "2",
      shoes: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      legGuard: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      helmet: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      mask: (
        <CloseIcon
          fontSize="medium"
          sx={{
            color: "red",
          }}
        />
      ),
      goggles: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      faceShield: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      jacket: (
        <CloseIcon
          fontSize="medium"
          sx={{
            color: "red",
          }}
        />
      ),
      earPlug: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      gloves: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
    },
    {
      name: (
        <Typography
          sx={{
            fontSize: "14px",
            width: "80px",
          }}
        >
          Muzaffar Alishan
        </Typography>
      ),
      index: "3",
      shoes: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      legGuard: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      helmet: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      mask: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      goggles: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      faceShield: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
      jacket: (
        <CloseIcon
          fontSize="medium"
          sx={{
            color: "red",
          }}
        />
      ),
      earPlug: (
        <CloseIcon
          fontSize="medium"
          sx={{
            color: "red",
          }}
        />
      ),
      gloves: (
        <DoneAllIcon
          fontSize="medium"
          sx={{
            color: "green",
          }}
        />
      ),
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
            DAILY CHECKLIST OF PPE's
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
        ></Grid>
      </Grid>

      <Grid
        container
        flexDirection={"column"}
        spacing={{
          xs: 1,
          sm: 1,
          md: 0.2,
        }}
      >
        <Grid item display="flex">
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
            Job:
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
            123456
          </MDTypography>
        </Grid>
        <Grid item display="flex">
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
            Agency:
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
            123456
          </MDTypography>
        </Grid>
        <Grid item display="flex">
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
            Site:
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
            123456
          </MDTypography>
        </Grid>
        <Grid item display="flex">
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
            Form No.:
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
            123456
          </MDTypography>
        </Grid>
      </Grid>
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

export default PpeDetails;
