import { Card, Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React from "react";
import MDTypography from "components/MDTypography";
import { useNavigate } from "react-router-dom";

function Table() {
  const navigate = useNavigate();

  return (
    <Grid>
      <Card
        style={{
          marginTop: "1rem",
          padding: "1rem",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <MDTypography variant="h5">TBT Details</MDTypography>
        <DataTable
          table={{
            columns: [
              { Header: "Date", accessor: "date", width: "25%" },
              {
                Header: "Work Order No.",
                accessor: "workOrder",
                width: "30%",
              },
              { Header: "Location", accessor: "location" },

              { Header: "Shift", accessor: "shift" },
              { Header: "View More", accessor: "action", width: "12%" },
            ],
            rows: [
              {
                date: "Hanny Baniard",
                shift: "10",
                location: "Baorixile",
                workOrder: 42,
                date: "4/11/2021",
                action: (
                  <RemoveRedEyeIcon
                    onClick={() => navigate("/tbt-details/view-more")}
                    fontSize="small"
                    sx={{ cursor: "pointer" }}
                  />
                ),
              },
              {
                date: "Hanny Baniard",
                shift: "10",
                location: "Baorixile",
                workOrder: 42,
                date: "4/11/2021",
                action: (
                  <RemoveRedEyeIcon
                    onClick={() => navigate("/tbt-details/view-more")}
                    fontSize="small"
                    sx={{ cursor: "pointer" }}
                  />
                ),
              },
              {
                date: "Hanny Baniard",
                shift: "10",
                location: "Baorixile",
                workOrder: 42,
                date: "4/11/2021",
                action: (
                  <RemoveRedEyeIcon
                    onClick={() => navigate("/tbt-details/view-more")}
                    fontSize="small"
                    sx={{ cursor: "pointer" }}
                  />
                ),
              },
              {
                date: "Hanny Baniard",
                shift: "10",
                location: "Baorixile",
                workOrder: 42,
                date: "4/11/2021",
                action: (
                  <RemoveRedEyeIcon
                    onClick={() => navigate("/tbt-details/view-more")}
                    fontSize="small"
                    sx={{ cursor: "pointer" }}
                  />
                ),
              },
            ],
          }}
        />
      </Card>
    </Grid>
  );
}

export default Table;
