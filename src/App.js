import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useRoutes } from "react-router-dom";
import { routers } from "router";
import { createCustomTheme } from "./theme";

export default function App() {
  const content = useRoutes(routers);
  const theme = createCustomTheme({ theme: "dark" });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {content}
    </ThemeProvider>
  );
}
