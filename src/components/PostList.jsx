import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Horizontal, { HorizontalStart } from "./Horizontal";
import { VerticalStart } from "./Vertical";

export const PostList = ({ post }) => {
  const {
    postId,
    avatar,
    author,
    postTime,
    thumbnail,
    postTitle,
    postSubTitle,
    like,
    dislike,
    comment,
  } = post;
  return (
    <VerticalStart
      sx={{
        p: "10px",
        bgcolor: "#1e1e1e",
        height: "185px",
        borderRadius: "10px",
      }}
    >
      <HorizontalStart>
        <Avatar src={avatar} sx={{ height: "24px", width: "24px" }} />
        <Typography variant="body2">{author ?? "who"}</Typography>
        <Typography variant="body3">{postTime ?? "when"}</Typography>
      </HorizontalStart>
      <HorizontalStart sx={{ height: "100%", width: "100%" }}>
        <img
          // height="110px"
          // width="120px"
          style={{
            display: "block",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "110px",
            width: "110px",
            borderRadius: "5px",
            objectFit: "cover",
          }}
          src={thumbnail}
          alt={postId}
        />
        <Card sx={{ height: "100%", width: "100%" }}>
          <CardContent sx={{ p: 0 }}>
            <Link to="/post" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                color="text.primary"
                noWrap
                sx={{
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                {postTitle}
              </Typography>
            </Link>
            <Typography variant="body2" color="text.secondary" noWrap>
              {postSubTitle}
            </Typography>
          </CardContent>
          <CardActions sx={{ height: "30px", mt: "22px" }}>
            <Horizontal sx={{ width: "50px" }}>
              <ThumbUpAltIcon />
              <Typography variant="body2">{like}</Typography>
            </Horizontal>
            <Horizontal sx={{ width: "50px" }}>
              <ThumbDownAltIcon />
              <Typography variant="body2">{dislike}</Typography>
            </Horizontal>
            <Horizontal sx={{ width: "50px" }}>
              <CommentIcon />
              <Typography variant="body2">{comment}</Typography>
            </Horizontal>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </HorizontalStart>
    </VerticalStart>
  );
};
