import { Box } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import Table from "./Table";

const Tbt = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Table></Table>
    </DashboardLayout>
  );
};

export default Tbt;
