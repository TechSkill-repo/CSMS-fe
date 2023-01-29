import React from "react";
// import logo from "assets/logo.jpeg";
import { Box, Grid, Typography } from "@mui/material";
import MDTypography from "components/MDTypography";

const FinalStep = () => {
  const details = {
    date: "12/12/2021",
    time: "12:00",
    location: "Jamshedpur",
    department: "TechPedia ",
    safety: "TechPedia ",
    supervisor: "TechPedia ",
    constractor: "TechPedia ",
    employees: "TechPedia ",
    long: "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic",
  };

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
          <img
            src="https://cdn.logo.com/hotlink-ok/logo-social.png"
            alt=""
            height="50px"
          />
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
          <Typography variant="h4">TechPedia </Typography>
          <Typography variant="h6">JAMSHEDPUR</Typography>
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",
            }}
          >
            Tool Box Meeting
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
        spacing={{
          xs: 1,
          sm: 2,
          md: 3,
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
            Date & Time:
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
            {details.date} - {details.time}
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
            Location:
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
            {details.location}
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
            Department:
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
            mb={2}
          >
            {" "}
            {details.department}
          </MDTypography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
      >
        <Grid item display="flex" xs={11} sm={11} md={6}>
          <MDTypography
            variant="h6"
            color="dark"
            mb={2}
            sx={{
              fontSize: {
                xs: 14,
                sm: 14,
                md: 14,
              },
            }}
          >
            Company Supervisor/Line Manager:
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
            mb={2}
          >
            {" "}
            {details.supervisor}
          </MDTypography>
        </Grid>
        <Grid item display="flex" xs={11} sm={11} md={6}>
          <MDTypography
            variant="h6"
            color="dark"
            mb={2}
            sx={{
              fontSize: {
                xs: 14,
                sm: 14,
                md: 14,
              },
            }}
          >
            Safety Representative:
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
            mb={2}
          >
            {" "}
            {details.safety}
          </MDTypography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
      >
        <Grid item display="flex" xs={11} sm={11} md={6}>
          <MDTypography
            variant="h6"
            color="dark"
            mb={2}
            sx={{
              fontSize: {
                xs: 14,
                sm: 14,
                md: 14,
              },
            }}
          >
            Contractor's Representative :
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
            mb={2}
          >
            {" "}
            {details.supervisor}
          </MDTypography>
        </Grid>
        <Grid item display="flex" xs={11} sm={11} md={6}>
          <MDTypography
            variant="h6"
            color="dark"
            mb={2}
            sx={{
              fontSize: {
                xs: 14,
                sm: 14,
                md: 14,
              },
            }}
          >
            Contract Employees :
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
            mb={2}
          >
            {" "}
            {details.safety}
          </MDTypography>
        </Grid>
      </Grid>

      <MDTypography variant={"h6"}>
        Items Discussed: (Indicate if not discussed)
      </MDTypography>
      <Box>
        <MDTypography
          variant="h6"
          color="dark"
          mb={1}
          sx={{
            fontSize: {
              xs: 14,
              sm: 14,
              md: 14,
            },
          }}
        >
          1. Safety contract and review of action from the last meeting :
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
          mb={2}
        >
          {" "}
          {details.long}
        </MDTypography>
      </Box>
      <Box>
        <MDTypography
          variant="h6"
          color="dark"
          mb={1}
          sx={{
            fontSize: {
              xs: 14,
              sm: 14,
              md: 14,
            },
          }}
        >
          2. Items of General Safety Importance to the total work site(ask
          Employees to mention any Incident/near miss during the past day which
          may or may not have resulted into damage to property or injury to
          company or Contract personnel):
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
          mb={2}
        >
          {" "}
          {details.long}
        </MDTypography>
      </Box>
      <Box>
        <MDTypography
          variant="h6"
          color="dark"
          mb={1}
          sx={{
            fontSize: {
              xs: 14,
              sm: 14,
              md: 14,
            },
          }}
        >
          3. Items of Safety Interest to this Group: (e.g. Red Strips, Orange
          Strips, Green Strips, Safety alert tips for Safety communications
          applicable to this group's work area)
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
          mb={2}
        >
          {" "}
          {details.long}
        </MDTypography>
      </Box>
      <Box>
        <MDTypography
          variant="h6"
          color="dark"
          mb={1}
          sx={{
            fontSize: {
              xs: 14,
              sm: 14,
              md: 14,
            },
          }}
        >
          4. Standard Operating Procedures (SOP) relevant to this group :
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
          mb={2}
        >
          {" "}
          {details.long}
        </MDTypography>
      </Box>

      <Box>
        <MDTypography
          variant="h6"
          color="dark"
          mb={1}
          sx={{
            fontSize: {
              xs: 14,
              sm: 14,
              md: 14,
            },
          }}
        >
          5. Reminder to Employees of their personal responsibilities to ensure
          and maintain: (Personal Protextion Equipment, HouseKeeping, tool and
          tackles, Electric Equipment condition, Six directional Hazards,
          Special requirement (e.g. Permit to work, No Alcohol regulations, No
          horse play, Safe behaviour, team-work approach, any Hazardous material
          etc.) ) :
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
          mb={2}
        >
          {" "}
          {details.long}
        </MDTypography>
      </Box>

      <Box>
        <MDTypography
          variant="h6"
          color="dark"
          mb={1}
          sx={{
            fontSize: {
              xs: 14,
              sm: 14,
              md: 14,
            },
          }}
        >
          6. Safety manage Hand-outs/Circular to be shared with Contract
          Employees:
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
          mb={2}
        >
          {" "}
          {details.long}
        </MDTypography>
      </Box>

      <Box>
        <MDTypography
          variant="h6"
          color="dark"
          mb={1}
          sx={{
            fontSize: {
              xs: 14,
              sm: 14,
              md: 14,
            },
          }}
        >
          7. Actions Resulting from meeting and points raised by Contract
          Employee and Supervisor :
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
          mb={2}
        >
          {" "}
          {details.long}
        </MDTypography>
      </Box>
    </Box>
  );
};

export default FinalStep;
