import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Box, Button, Typography } from "@mui/material";
import Horizontal from "components/Horizontal";
import { Tabs } from "components/Tabs";
import { VerticalCenter } from "components/Vertical";
import React from "react";
import { PostContainer } from "views/Board/PostContainer";

export default function Board() {
  return (
    <VerticalCenter sx={{ width: "100%", height: "100%", pl: "4%", pr: "4%" }}>
      <Horizontal>
        <RestaurantIcon fontSize="large" sx={{ width: "50px" }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">美食版</Typography>
        </Box>
        <Button variant="contained">追蹤</Button>
      </Horizontal>
      <Tabs
        steps={[
          { title: "最新", content: <PostContainer display="card" /> },
          {
            title: "熱門",
            content: <PostContainer display="list" />,
          },
        ]}
        centered
      />
    </VerticalCenter>
  );
}
