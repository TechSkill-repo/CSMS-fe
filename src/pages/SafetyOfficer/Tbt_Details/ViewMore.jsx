import { Card } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import TbtDetails from "../../Executive/Job/TBT/components/FinalStep";

const ViewMore = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card
        sx={{
          padding: "2rem",
        }}
      >
        <TbtDetails></TbtDetails>
      </Card>
    </DashboardLayout>
  );
};

export default ViewMore;
