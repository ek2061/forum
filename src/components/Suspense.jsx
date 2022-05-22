import { Box } from "@mui/material";
import React from "react";
import Progress from "./Progress";

const Fallback = () => (
  <Box sx={{ width: "100%", height: "100vh" }}>
    <Progress />
  </Box>
);

const Suspense = (Component) => (props) =>
  (
    <React.Suspense fallback={<Fallback />}>
      <Component {...props} />
    </React.Suspense>
  );

export default Suspense;
