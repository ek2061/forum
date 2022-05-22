import { Box } from "@mui/material";
import { styled } from "@mui/system";
import SignInWave from "assets/SignInWave.png";
import React from "react";
import { LoginForm } from "./LoginForm";

const BackgroundImage = styled("div")(({ theme }) => ({
  backgroundColor: "#093545",
  backgroundImage: `url(${SignInWave})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  width: "100%",
  height: "100vh",
}));

const Root = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  background: "#093545",
}));

export default function Login() {
  return (
    <Root>
      <BackgroundImage>
        <LoginForm />
      </BackgroundImage>
    </Root>
  );
}
