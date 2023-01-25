import { Box, Card, Grid, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";

import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";
import Details from "./Details";

function HomePage() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox position="relative" mb={5}>
        <MDBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="10.75rem"
          minWeight="100%"
          borderRadius="xl"
          sx={{
            backgroundImage: ({
              functions: { rgba, linearGradient },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        />
        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            py: 2,
            px: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <MDAvatar
                src={burceMars}
                alt="profile-image"
                size="xl"
                shadow="sm"
              />
            </Grid>
            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  Richard Davis
                </MDTypography>
                <MDTypography
                  variant="button"
                  color="text"
                  fontWeight="regular"
                >
                  Employee
                </MDTypography>
              </MDBox>
            </Grid>
          </Grid>
          <Grid
            container
            style={{
              paddingTop: "1rem",
              gap: "2rem",
            }}
          >
            <Grid item>
              <MDTypography
                variant="h6"
                color="dark"
                // fontWeight="regular"
                fontSize={17}
              >
                Personal Details
              </MDTypography>
              <Details></Details>
            </Grid>
            <Grid item>
              <MDTypography
                variant="h6"
                color="dark"
                // fontWeight="regular"
                fontSize={17}
              >
                Company Details
              </MDTypography>
              <Details></Details>
            </Grid>
          </Grid>
        </Card>
      </MDBox>
    </DashboardLayout>
  );
}

export default HomePage;
