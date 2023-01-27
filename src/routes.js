/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 PRO React layouts
import Analytics from "layouts/dashboards/analytics";
import Sales from "layouts/dashboards/sales";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import AllProjects from "layouts/pages/profile/all-projects";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Timeline from "layouts/pages/projects/timeline";
import PricingPage from "layouts/pages/pricing-page";
import Widgets from "layouts/pages/widgets";
import RTL from "layouts/pages/rtl";
import Charts from "layouts/pages/charts";
import Notifications from "layouts/pages/notifications";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpCover from "layouts/authentication/sign-up/cover";
import ResetCover from "layouts/authentication/reset-password/cover";
import HomePage from "pages/Executive/HomePage";

// Material Dashboard 2 PRO React components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";
import TBTForm from "pages/Executive/Job/TBT";

// Images
import profilePicture from "assets/images/team-3.jpg";
import EmployeeEntry from "pages/Executive/Job/EmployeeEntry";
import PPE from "pages/Executive/Job/PPE";
import ToolsTackles from "pages/Executive/Job/TAT/ToolsTackles";
import Attendance from "pages/Executive/Attendance/Attendance";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AttendanceRecord from "pages/Executive/AttendanceRecord/AttendanceRecord";
import FSGR from "./pages/Executive/FSGR/FSGR";

const routes = [
  {
    type: "collapse",
    name: "Supervisor",
    key: "brooklyn-alice",
    icon: <MDAvatar src={profilePicture} alt="Brooklyn Alice" size="sm" />,
    collapse: [
      {
        name: "Logout",
        key: "logout",
        route: "/authentication/sign-in/basic",
        component: <SignInBasic />,
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    noCollapse: true,
    route: "/home",
    type: "collapse",
    component: <HomePage></HomePage>,
    name: "Homepage",
    key: "homepage",
    icon: <Icon fontSize="medium">dashboard</Icon>,
  },
  {
    noCollapse: true,
    route: "/tbt-form",
    type: "collapse",
    component: <EmployeeEntry></EmployeeEntry>,
    name: "TBT - Form",
    key: "TBT - Form",
    icon: <Icon fontSize="medium">apps</Icon>,
  },

  {
    noCollapse: true,
    route: "/ppe-checklist",
    type: "collapse",
    component: <PPE></PPE>,
    name: "PPE Checklist",
    key: "PPE Checklist",
    icon: <EngineeringIcon />,
  },
  {
    noCollapse: true,
    route: "/tools-and-tackles",
    type: "collapse",
    component: <ToolsTackles />,
    name: "Tools & Tackles",
    key: "Tools & Tackles",
    icon: <Icon fontSize="medium">construction</Icon>,
  },
  {
    noCollapse: true,
    route: "/attendance",
    type: "collapse",
    component: <Attendance />,
    name: "Attendance",
    key: "attendance",
    icon: <Icon fontSize="medium">man</Icon>,
  },
  {
    noCollapse: true,
    route: "/attendance-record",
    type: "collapse",
    component: <AttendanceRecord />,
    name: "Attendance Record",
    key: "attendance-record",
    icon: <Icon fontSize="medium">book</Icon>,
  },
  {
    noCollapse: true,
    route: "/fsgr",
    type: "collapse",
    component: <FSGR />,
    name: "FSGR",
    key: "fsgr",
    icon: <Icon fontSize="medium">health_and_safety</Icon>,
  },
  {
    route: "/tbt-form-fillup",

    component: <TBTForm></TBTForm>,
    name: "TBT-Form-Fillup",
    key: "TBT-Form-Fillup",
    icon: <Icon fontSize="medium">apps</Icon>,
  },
];

export default routes;
