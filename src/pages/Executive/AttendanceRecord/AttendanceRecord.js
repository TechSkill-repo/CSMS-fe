import { Card, Grid } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import React from "react";
import MDTypography from "components/MDTypography";

function AttendanceRecord() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid>
        <Card
          style={{
            marginTop: "1rem",
            padding: "1rem",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          }}
        >
          <MDTypography variant="h5">Attendance Sheet</MDTypography>
          <DataTable
            table={{
              columns: [
                { Header: "Date", accessor: "startDate", width: "25%" },
                {
                  Header: "Total People Assign",
                  accessor: "position",
                  width: "30%",
                },
                { Header: "Total People Present", accessor: "age" },
                { Header: "Photo", accessor: "action", width: "12%" },
              ],
              rows: [
                {
                  name: "Hanny Baniard",
                  position: "10",
                  office: "Baorixile",
                  age: 42,
                  startDate: "4/11/2021",
                  salary: "$474,978",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Lara Puleque",
                  position: "20",
                  office: "Cijangkar",
                  age: 47,
                  startDate: "8/2/2021",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Torie Repper",
                  position: "15",
                  office: "Montpellier",
                  age: 25,
                  startDate: "4/21/2021",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Nat Gair",
                  position: "12",
                  office: "Imider",
                  age: 57,
                  startDate: "12/6/2020",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Maggi Slowan",
                  position: "9",
                  office: "Jaunpils",
                  age: 56,
                  startDate: "11/7/2020",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Marleah Snipe",
                  position: "6",
                  office: "Orekhovo-Borisovo Severnoye",
                  age: 31,
                  startDate: "7/18/2021",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Georgia Danbury",
                  position: "5",
                  office: "Gniezno",
                  age: 50,
                  startDate: "10/1/2020",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Bev Castan",
                  position: "18",
                  office: "Acharnés",
                  age: 19,
                  startDate: "1/14/2021",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Reggi Westney",
                  position: "8",
                  office: "Piuí",
                  age: 56,
                  startDate: "3/21/2021",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Bartholomeus Prosh",
                  position: "16",
                  office: "Kelīshād va Sūdarjān",
                  age: 28,
                  startDate: "5/27/2021",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Sheffy Feehely",
                  position: "Software Consultant",
                  office: "Ndibène Dahra",
                  age: 27,
                  startDate: "3/23/2021",
                  action: <RemoveRedEyeIcon />,
                },
                {
                  name: "Euphemia Chastelain",
                  position: "Engineer IV",
                  office: "Little Baguio",
                  age: 63,
                  startDate: "5/1/2021",
                  action: <RemoveRedEyeIcon />,
                },
              ],
            }}
          />
        </Card>
      </Grid>
    </DashboardLayout>
  );
}

export default AttendanceRecord;
