import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { Comment } from "components/Comment";
import { HorizontalStart } from "components/Horizontal";
import React from "react";

const data = [
  {
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    author: "Remy Sharp",
    comment: "我就是那個沒錢的人",
    commentTime: "2022.05.26 17:41",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/15338242?v=4",
    author: "Yuchi",
    comment: "電腦道德綁架一舉兩得",
    commentTime: "2022.05.26 17:42",
  },
  {
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    author: "Travis Howard",
    comment: "渾沌善良",
    commentTime: "2022.05.26 17:43",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/15338242?v=4",
    author: "Yuchi",
    comment: "wow",
    commentTime: "2022.05.26 17:44",
  },
];

export default function PostPage() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <HorizontalStart>
        <Avatar
          src="https://mui.com/static/images/avatar/2.jpg"
          sx={{ height: "32px", width: "32px" }}
        />
        <Typography variant="body1">Travis Howard</Typography>
        <Typography variant="body2">發表於 美食版</Typography>
      </HorizontalStart>
      <Typography variant="body2">2022.05.26 17:38</Typography>
      <Typography variant="h4">
        真佛系勒索軟體GoodWill：需要做三件善事才能解鎖你的資料
      </Typography>
      <img
        src="https://cdn1.techbang.com/system/excerpt_images/96634/post_inpage/2fa9e3a4a93b5d0b7d0a41c4878a3406.jpg?1653557698"
        alt="真佛系勒索軟體GoodWill：需要做三件善事才能解鎖你的資料"
      />
      <Typography variant="h6">
        在很多人的印象中，一旦設備感染勒索軟體都需要支付高昂的贖金才能取回自己的資料。不過現在出現了一種新型的贖回方式，那就是做善事。
        印度一家資安業者 CloudSEK
        威脅情報研究團隊最近發現了一個名為「GoodWill」的勒索軟體，受害者如果想要獲得密鑰，就必須做一些善事，包括：給不幸的人提供食物、毛毯，或者向病人捐錢。總體來說，受害者必須參與三項以上的活動，才能恢複他們被加密的資料。
      </Typography>
      <HorizontalStart>
        <IconButton size="small">
          <ThumbUpAltIcon fontSize="inherit" sx={{ color: "green" }} />
          <Typography variant="body2">{5}</Typography>
        </IconButton>
        <IconButton size="small">
          <ThumbDownAltIcon fontSize="inherit" sx={{ color: "red" }} />
          <Typography variant="body2">{2}</Typography>
        </IconButton>
      </HorizontalStart>
      <Divider />
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={open ? "收起留言" : "展開留言"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {data.map((comment, index) => (
          <Comment {...comment} floor={index + 1} key={index} />
        ))}
      </Collapse>
    </>
  );
}
