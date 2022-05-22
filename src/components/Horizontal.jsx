import { Stack } from "@mui/material";
import PropTypes from "prop-types";

const Horizontal = (props) => (
  <Stack direction="row" {...props}>
    {props.children}
  </Stack>
);

Horizontal.propTypes = {
  justifyContent: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  spacing: PropTypes.number,
  sx: PropTypes.object,
};

Horizontal.defaultProps = {
  justifyContent: "center",
  alignItems: "center",
  spacing: 1,
  sx: { width: "100%", height: "100%" },
};

const HorizontalStart = (props) => (
  <Horizontal justifyContent="flex-start" {...props} />
);

const HorizontalCenter = (props) => (
  <Horizontal justifyContent="center" {...props} />
);

const HorizontalBetween = (props) => (
  <Horizontal justifyContent="space-between" {...props} />
);

const HorizontalEnd = (props) => (
  <Horizontal justifyContent="flex-end" {...props} />
);

export { HorizontalStart, HorizontalCenter, HorizontalBetween, HorizontalEnd };

export default Horizontal;
