import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import NotFoundImage from "assets/404.svg";
import ErrorImage from "assets/Error.svg";
import { HorizontalCenter } from "components/Horizontal";
import { VerticalCenter } from "components/Vertical";
import React from "react";
import { Link } from "react-router-dom";

const Root = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: "#2e2e2e",
}));

export default function NotFoundPage() {
  return (
    <Root>
      <HorizontalCenter>
        <VerticalCenter>
          <img
            src={ErrorImage}
            style={{ width: "35%", maxWidth: 280 }}
            alt="Error"
          />
          <br />
          <img
            src={NotFoundImage}
            style={{ width: "70%", maxWidth: 450 }}
            alt="404 Not Found"
          />
          <br />
          <Typography variant="h5" align="center">
            We can`t seem to find the page you are looking for
          </Typography>
          <br />
          <Link to="/funding" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="success" size="large">
              Home
            </Button>
          </Link>
        </VerticalCenter>
      </HorizontalCenter>
    </Root>
  );
}
