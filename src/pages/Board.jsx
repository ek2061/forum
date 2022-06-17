import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Box, Button, Typography } from "@mui/material";
import Horizontal from "components/Horizontal";
import { Tabs } from "components/Tabs";
import { VerticalCenter } from "components/Vertical";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "store/board";
import { PostContainer } from "views/Board/PostContainer";
import { PostCreate } from "views/Board/PostCreate";

export default function Board() {
  const dispatch = useDispatch();
  const { dialog } = useSelector((state) => state.board);

  return (
    <VerticalCenter sx={{ width: "100%", height: "100%", pl: "4%", pr: "4%" }}>
      <Horizontal>
        <RestaurantIcon fontSize="large" sx={{ width: "50px" }} />
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">美食版</Typography>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(openDialog({ name: "create" }))}
        >
          發文
        </Button>
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
      {dialog.create && <PostCreate open={dialog.create} />}
    </VerticalCenter>
  );
}
