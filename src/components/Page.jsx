import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";
import { HorizontalBetween } from "./Horizontal";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: "100%",
  minHeight: "300px",
}));

export const Page = (props) => {
  return (
    <Root>
      <HorizontalBetween alignItems="flex-end">
        <Typography variant="h4" color="#F2F2F7">
          {props.title}
        </Typography>
        {props.operation}
      </HorizontalBetween>
      <br />
      {props.children}
    </Root>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  operation: PropTypes.element,
};
