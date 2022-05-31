import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import _ from "lodash";
import React from "react";
import { useLocation } from "react-router-dom";

const SidebarItem = (props) => {
  const { title, path, icon } = props;
  const location = useLocation();
  const isActive = React.useMemo(
    () => (path === location.pathname ? "#3C9F00" : undefined),
    [path, location.pathname]
  );

  return (
    <ListItemButton
      disableGutters
      component="a"
      href={path}
      sx={{ p: 1, bgcolor: isActive }}
    >
      <ListItemIcon sx={{ minWidth: 24, mr: 3, justifyContent: "center" }}>
        {icon}
      </ListItemIcon>
      <ListItemText>
        <Typography variant="body2">{title}</Typography>
      </ListItemText>
    </ListItemButton>
  );
};

const CollapseIcon = ({ open }) => {
  return open ? <ExpandLess /> : <ExpandMore />;
};

const SidebarItemChildren = (props) => {
  const { title, icon, children } = props;
  const location = useLocation();
  const hasActivePage = _.find(children, { path: location.pathname });
  const showActive = hasActivePage ? "#3C9F00" : undefined;

  const [open, setOpen] = React.useState(hasActivePage);

  const trigger = () => setOpen(!open);

  return (
    <>
      <ListItemButton onClick={trigger} sx={{ p: 1, bgcolor: showActive }}>
        <ListItemIcon sx={{ minWidth: 24, mr: 3, justifyContent: "center" }}>
          {icon}
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2">{title}</Typography>
        </ListItemText>
        <CollapseIcon open={open} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children.map((child) => {
          return <SidebarItem key={child.path} {...child} />;
        })}
      </Collapse>
    </>
  );
};

const SidebarSection = (props) => {
  const { items } = props;

  return (
    <>
      {items.map((item) => {
        if (item.children) {
          return <SidebarItemChildren key={item.title} {...item} />;
        } else {
          return <SidebarItem key={item.title} {...item} />;
        }
      })}
    </>
  );
};

export default SidebarSection;
