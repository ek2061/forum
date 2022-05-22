import { CircularProgress } from "@mui/material";
import { HorizontalCenter } from "./Horizontal";

const Progress = (props) => {
  return (
    <HorizontalCenter
      alignItems="center"
      sx={{ width: "100%", height: "100%", p: props.p }}
    >
      <CircularProgress color="success" {...props} />
    </HorizontalCenter>
  );
};

Progress.defaultProps = {
  p: 3,
};

export default Progress;
