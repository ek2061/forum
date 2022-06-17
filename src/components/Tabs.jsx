import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import React from "react";

export const Tabs = (props) => {
  // the number of step
  const [value, setValue] = React.useState("0");

  const handlerChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: "5px" }}>
          <TabList
            onChange={handlerChange}
            centered={props.centered}
            indicatorColor={"secondary"}
          >
            {props.steps.map((step, idx) => {
              return (
                <Tab
                  key={idx}
                  value={idx.toString()}
                  icon={step.icon}
                  iconPosition="start"
                  label={step.title}
                  sx={{
                    borderRadius: "5px 5px 0px 0px",
                    minHeight: "48px",
                    maxWidth: "210px",
                    width: "50%",
                    mr: "6px",
                  }}
                />
              );
            })}
          </TabList>
        </Box>
        {props.steps.map((step, idx) => {
          return (
            <TabPanel key={idx} value={idx.toString()} sx={{ p: 0 }}>
              {step.content}
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
};

Tabs.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element,
      title: PropTypes.string.isRequired,
      content: PropTypes.element,
    })
  ),
  centered: PropTypes.bool,
};

Tabs.defaultProps = {
  steps: [],
  centered: false,
};
