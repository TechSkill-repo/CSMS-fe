import { Card } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import TbtDetails from "../../Executive/Job/TBT/components/FinalStep";
import PpeDetails from "./PpeDetails";
import ToolsDetails from "./ToolsDetails";

const ViewMore = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card
        sx={{
          padding: "2rem",

          marginTop: "2rem",
        }}
      >
        <TbtDetails></TbtDetails>
      </Card>
      <Card
        sx={{
          padding: "2rem",
          marginTop: "2rem",
        }}
      >
        <PpeDetails></PpeDetails>
      </Card>

      <Card
        sx={{
          padding: "2rem",

          marginTop: "2rem",
        }}
      >
        <ToolsDetails></ToolsDetails>
      </Card>
    </DashboardLayout>
  );
};

export default ViewMore;
