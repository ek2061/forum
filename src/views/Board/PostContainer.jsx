import { Grid } from "@mui/material";
import { PostCard } from "components/PostCard";
import { PostList } from "components/PostList";
import React from "react";

const data = [
  {
    postId: 1,
    avatar: "https://mui.com/static/images/avatar/2.jpg",
    author: "Travis Howard",
    postTime: "2022.05.26 17:38",
    thumbnail:
      "https://cdn1.techbang.com/system/excerpt_images/96634/post_inpage/2fa9e3a4a93b5d0b7d0a41c4878a3406.jpg?1653557698",
    postTitle: "【情報】真佛系勒索軟體GoodWill：需要做三件善事才能解鎖你的資料",
    postSubTitle:
      "在很多人的印象中，一旦設備感染勒索軟體都需要支付高昂的贖金才能取回自己的資料。不過現在出現了一種新型的贖回方式，那就是做善事。印度一家資安業者 CloudSEK…",
    like: 5,
    dislike: 2,
    comment: 6,
  },
  {
    postId: 2,
    avatar: "https://mui.com/static/images/avatar/1.jpg",
    author: "Remy Sharp",
    postTime: "2022.05.26 17:37",
    thumbnail:
      "https://memeprod.ap-south-1.linodeobjects.com/user-template/29b215b9e86bd5bfcb06130cb0ab077a.png",
    postTitle: "【問題】發薪日下班老闆請了我一罐啤酒？",
    postSubTitle: "這幾天才發薪水，下班後來到福利社買罐啤酒",
    like: 3,
    dislike: 14,
    comment: 2,
  },
  {
    postId: 3,
    avatar: "https://avatars.githubusercontent.com/u/15338242?v=4",
    author: "Yuchi",
    postTime: "2022.05.26 17:36",
    thumbnail: "https://gigadeapp.files.wordpress.com/2015/06/vs-01.png",
    postTitle: "【引戰】北部粽是不是3D油飯？",
    postSubTitle: "如題啦",
    like: 30,
    dislike: 14,
    comment: 59,
  },
];

export const PostContainer = ({ display }) => {
  return (
    <Grid container spacing={2}>
      {display === "list" &&
        data.map((post) => (
          <Grid item xs={12} md={12} xl={12} key={post.postId}>
            <PostList post={post} />
          </Grid>
        ))}
      {display === "card" &&
        data.map((post) => (
          <Grid item xs={12} md={6} xl={4} key={post.postId}>
            <PostCard key={post.postId} post={post} />
          </Grid>
        ))}
    </Grid>
  );
};
