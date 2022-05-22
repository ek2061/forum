import { Stack } from "@mui/material";
import PropTypes from "prop-types";

const Vertical = (props) => (
  <Stack direction="column" {...props}>
    {props.children}
  </Stack>
);

Vertical.propTypes = {
  justifyContent: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  spacing: PropTypes.number,
  sx: PropTypes.object,
};

Vertical.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  spacing: 1,
  sx: { width: "100%", height: "100%" },
};

const VerticalStart = (props) => (
  <Vertical justifyContent="flex-start" {...props} />
);

const VerticalCenter = (props) => (
  <Vertical justifyContent="center" {...props} />
);

const VerticalBetween = (props) => (
  <Vertical justifyContent="space-between" {...props} />
);

const VerticalEnd = (props) => (
  <Vertical justifyContent="flex-end" {...props} />
);

export { VerticalStart, VerticalCenter, VerticalBetween, VerticalEnd };

export default Vertical;
