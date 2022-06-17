import { Avatar, Box, Stack, Typography } from "@mui/material";
import { HorizontalStart } from "components/Horizontal";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export const Comment = (props) => {
  const { avatar, author, comment, commentTime, floor } = props;
  return (
    <Box>
      <HorizontalStart>
        <Link to="/">
          <Avatar src={avatar} sx={{ height: "40px", width: "40px" }} />
        </Link>
        <Stack>
          <Typography>{author}</Typography>
          <Typography>
            B{floor} ({commentTime})
          </Typography>
        </Stack>
        <article>
          <Typography variant="comment">{comment}</Typography>
        </article>
      </HorizontalStart>
    </Box>
  );
};

Comment.propTypes = {
  avatar: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  commentTime: PropTypes.string.isRequired,
  floor: PropTypes.number.isRequired,
};

Comment.defaultProps = {
  avatar: "",
  author: "未知的作者",
  comment: "未知的留言",
  commentTime: "未知的時間",
  floor: NaN,
};
