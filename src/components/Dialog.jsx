import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import {
  Avatar,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import MuiDialog from "@mui/material/Dialog";
import { styled } from "@mui/system";
import { HorizontalBetween, HorizontalStart } from "components/Horizontal";
import PropTypes from "prop-types";

const Header = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const DialogBody = styled(DialogContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  overflowY: "auto",
}));

export const DialogFooter = styled(DialogActions)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
}));

export const Dialog = (props) => {
  return (
    <MuiDialog open={props.open} maxWidth={props.maxWidth} fullWidth>
      <Header>
        <HorizontalBetween>
          {props.title}
          <IconButton onClick={props.control}>
            <CloseIcon />
          </IconButton>
        </HorizontalBetween>
      </Header>
      {props.children}
    </MuiDialog>
  );
};

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  control: PropTypes.func.isRequired,
  title: PropTypes.node.isRequired,
  actions: PropTypes.node,
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  minBodyHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dialog.defaultProps = {
  open: false,
  maxWidth: "md",
  minBodyHeight: "100%",
};

export const DialogCreate = (props) => (
  <Dialog
    {...props}
    title={
      <HorizontalStart>
        <Avatar sx={{ width: "30px", height: "30px", bgcolor: "#3C9F00" }}>
          <NoteAddIcon fontSize="18px" htmlColor="#E0E0E0" />
        </Avatar>
        <Typography variant="h4" color="#E0E0E0">
          {props.title}
        </Typography>
      </HorizontalStart>
    }
  />
);

export const DialogUpdate = (props) => (
  <Dialog
    {...props}
    title={
      <HorizontalStart>
        <Avatar sx={{ width: "30px", height: "30px", bgcolor: "#3C9F00" }}>
          <EditIcon fontSize="18px" htmlColor="#E0E0E0" />
        </Avatar>
        <Typography variant="h4" color="#E0E0E0">
          {props.title}
        </Typography>
      </HorizontalStart>
    }
  />
);

export const DialogDestroy = (props) => (
  <Dialog
    {...props}
    title={
      <HorizontalStart>
        <Avatar sx={{ width: "30px", height: "30px", bgcolor: "#E83F00" }}>
          <DeleteForeverIcon fontSize="18px" htmlColor="#E0E0E0" />
        </Avatar>
        <Typography variant="h4" color="#E0E0E0">
          {props.title}
        </Typography>
      </HorizontalStart>
    }
  />
);

export const DialogAlert = (props) => (
  <Dialog
    {...props}
    title={
      <HorizontalStart>
        <Avatar sx={{ width: "30px", height: "30px", bgcolor: "#E88000" }}>
          <PriorityHighIcon sx={{ color: "#E0E0E0", fontSize: "18px" }} />
        </Avatar>
        <Typography variant="h4" color="#E0E0E0">
          {props.title}
        </Typography>
      </HorizontalStart>
    }
  />
);
