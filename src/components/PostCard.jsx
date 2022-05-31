import CommentIcon from "@mui/icons-material/Comment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import Horizontal, { HorizontalStart } from "./Horizontal";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PostCard = ({ post }) => {
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={avatar} />}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={author}
        subheader={postTime}
      />
      <CardMedia component="img" height="194" image={thumbnail} alt={postId} />
      <CardContent>
        <Link to="/post" style={{ textDecoration: "none" }}>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              "&:hover": {
                color: "red",
              },
            }}
            noWrap
          >
            {postTitle}
          </Typography>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <HorizontalStart>
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
        </HorizontalStart>
        <Box sx={{ flexGrow: 1 }} />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {postSubTitle}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
