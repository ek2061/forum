import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { HorizontalStart } from "components/Horizontal";
import { TextHelper } from "components/TextHelper";
import PropTypes from "prop-types";

export const TextInput = (props) => {
  const {
    label,
    value,
    onChange,
    error,
    disabled,
    width,
    placeholder,
    labelWidth,
    icon,
    type,
    inputBackground,
  } = props;

  return (
    <Box sx={{ py: 1, width: "100%" }}>
      <HorizontalStart>
        {icon}
        {label && (
          <Typography sx={{ width: labelWidth, color: "#F2F2F7" }}>
            {label}
          </Typography>
        )}
        <TextField
          type={type}
          value={value}
          onChange={onChange}
          fullWidth
          inputProps={{
            sx: {
              m: 0,
              p: 0,
              paddingLeft: 1,
              height: "45px",
              background: inputBackground,
              borderRadius: "10px",
            },
          }}
          autoComplete="off"
          error={Boolean(error)}
          helperText={error}
          FormHelperTextProps={{
            component: () => <TextHelper message={error} />,
          }}
          disabled={disabled}
          sx={{ width }}
          placeholder={placeholder}
        />
      </HorizontalStart>
    </Box>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  width: PropTypes.string,
  labelWidth: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  type: PropTypes.string,
  inputBackground: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
  disabled: false,
  width: "80%",
  labelWidth: "20%",
  placeholder: "",
};
