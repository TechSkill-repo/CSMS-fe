import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// NewProduct page components
import ToolBoxTalk from "./components/ToolBoxTalk";
import Media from "layouts/ecommerce/products/new-product/components/Media";
import Socials from "layouts/ecommerce/products/new-product/components/Socials";
import Pricing from "layouts/ecommerce/products/new-product/components/Pricing";

function getSteps() {
  return ["1. TBT", "2. Media", "3. Social", "4. Pricing"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ToolBoxTalk />;
    case 1:
      return <Media />;
    case 2:
      return <Socials />;
    case 3:
      return <Pricing />;
    default:
      return null;
  }
}

function NewProduct() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={5} mb={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <MDBox mt={6} mb={8} textAlign="center">
              <MDBox mb={1}>
                <MDTypography variant="h5" fontWeight="bold">
                  Tool-Box Talk
                </MDTypography>
              </MDBox>
            </MDBox>
            <Card>
              <MDBox mt={-3} mb={3} mx={2}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </MDBox>
              <MDBox p={2}>
                <MDBox>
                  {getStepContent(activeStep)}
                  <MDBox
                    mt={3}
                    width="100%"
                    display="flex"
                    justifyContent="space-between"
                  >
                    {activeStep === 0 ? (
                      <MDBox />
                    ) : (
                      <MDButton
                        variant="gradient"
                        color="light"
                        onClick={handleBack}
                      >
                        back
                      </MDButton>
                    )}
                    <MDButton
                      variant="gradient"
                      color="dark"
                      onClick={!isLastStep ? handleNext : undefined}
                    >
                      {isLastStep ? "send" : "next"}
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewProduct;
