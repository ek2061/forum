import CheckroomIcon from "@mui/icons-material/Checkroom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Box, Drawer, List, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import SidebarSection from "./SidebarSection";

const openStyle = (theme) => ({
  width: 256,
  overflowX: "hidden",
  background: "#2e2e2e",
});

const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  width: 256,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: theme.zIndex.appBar - 1,

  "& .MuiDrawer-paper": openStyle(theme),

  // default: tooltip > snackbar > modal > drawer > appBar > speedDial > mobileStepper
  // zIndex: theme.zIndex.appBar,
}));

const sections = [
  {
    items: [
      {
        title: "所有看板",
        icon: <ListAltIcon />,
        children: [
          {
            title: "美食",
            path: "/f/food",
            icon: <RestaurantIcon />,
          },
          {
            title: "穿搭",
            path: "/f/dressed",
            icon: <CheckroomIcon />,
          },
          {
            title: "旅遊",
            path: "/f/travel",
            icon: <LocalAirportIcon />,
          },
          {
            title: "娛樂",
            path: "/f/entertainments",
            icon: <SportsEsportsIcon />,
          },
        ],
      },
      {
        title: "熱門看板",
        path: "/hot",
        icon: <LocalFireDepartmentIcon />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <SidebarDrawer open={true} anchor="left" variant="permanent">
      <Toolbar />
      <Box sx={{ width: "100%" }}>
        <List disablePadding>
          {sections.map((section, index) => {
            return <SidebarSection key={index} {...section} open={true} />;
          })}
        </List>
      </Box>
    </SidebarDrawer>
  );
};

export default Sidebar;
