import ErrorIcon from "@mui/icons-material/Error";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const messages = {
  isRequired: "The field should be filled.",
  isInvalid: "Incorrect format.",
};

export const TextHelper = (props) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <ErrorIcon color="error" fontSize="small" />
      <Typography color="error">{props.message}</Typography>
    </Stack>
  );
};

TextHelper.propTypes = {
  message: PropTypes.string.isRequired,
};

TextHelper.defaultProps = {
  message: "error",
};

export const TextHelperInvalid = () => {
  return <TextHelper message="Incorrect format." />;
};

export const TextHelperRequired = () => {
  return <TextHelper message="The field should be filled." />;
};
