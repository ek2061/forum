import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { HorizontalStart } from "components/Horizontal";
import React from "react";

const NavBarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#5539FF",
  color: theme.palette.text.primary,
  boxShadow: "none",
}));

const NavBar = () => {
  const [avatarPopover, setAvatarPopover] = React.useState(null);
  const openAvatarPopover = (e) => setAvatarPopover(e.currentTarget);
  const closeAvatarPopover = () => setAvatarPopover(null);

  const onLogout = () => {
    window.sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <NavBarRoot position="fixed">
      <Toolbar>
        <HorizontalStart>
          <Typography variant="h4">Forum</Typography>
        </HorizontalStart>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          onClick={openAvatarPopover}
          fontSize="large"
          sx={{ textAlign: "center" }}
        >
          <Avatar sx={{ width: 26, height: 26, bgcolor: "#D1D1D6" }} />
          <ExpandMoreIcon />
        </IconButton>
        <Popover
          open={Boolean(avatarPopover)}
          anchorEl={avatarPopover}
          onClose={closeAvatarPopover}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <List>
            <ListItemButton onClick={onLogout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </List>
        </Popover>
      </Toolbar>
    </NavBarRoot>
  );
};

export default NavBar;
