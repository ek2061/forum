import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { dark } from "./dark";
import { light } from "./light";

export const createCustomTheme = (props) => {
  const options = props.theme === "dark" ? dark : light;
  const theme = createTheme({ ...options });
  return responsiveFontSizes(theme);
};
