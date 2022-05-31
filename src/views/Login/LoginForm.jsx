import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Typography } from "@mui/material";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/system";
import { HorizontalCenter } from "components/Horizontal";
import { TextInput } from "components/TextInput";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectErrors, selectForm, setAccount, setPassword } from "store/login";

const FormBox = styled(Box)(({ theme }) => ({
  minWidth: "250px",
  maxWidth: "406px",
  width: "90%",
  height: "347px",
  padding: "20px",
}));

const Title = styled(Typography)(({ theme }) => ({
  height: "80px",
  fontFamily: "Lexend Deca",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "45px",
  lineHeight: "80px",
  textAlign: "center",
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  height: "30px",
  fontFamily: "Lexend Deca",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "20px",
  textAlign: "center",
}));

const LoginButton = styled(MuiButton)(({ theme }) => ({
  maxWidth: "406px",
  width: "100%",
  height: "45px",
  borderRadius: "10px",
  background: "#20DF7F",
  "&:hover": {
    backgroundColor: "#296763",
  },
  justifyContent: "center",
  color: "#fff",
}));

export const LoginForm = () => {
  const form = useSelector(selectForm);
  const errors = useSelector(selectErrors);

  const dispatch = useDispatch();
  const accountChanged = (e) => dispatch(setAccount(e.target.value));
  const passwordChanged = (e) => dispatch(setPassword(e.target.value));

  return (
    <HorizontalCenter>
      <FormBox component="form">
        <Title align="center" sx={{ my: 1 }}>
          Sign In
        </Title>
        <SubTitle align="center" sx={{ my: 1 }}>
          Sign in and start managing your funding!
        </SubTitle>
        <TextInput
          icon={<AccountCircle sx={{ mr: 1 }} />}
          placeholder="account"
          width="100%"
          value={form.account}
          onChange={accountChanged}
          error={errors.account}
          inputBackground="#224957"
        />
        <TextInput
          icon={<LockIcon sx={{ mr: 1 }} />}
          placeholder="password"
          width="100%"
          value={form.password}
          onChange={passwordChanged}
          error={errors.password}
          type="password"
          inputBackground="#224957"
        />
        <Typography variant="body1" align="right">
          Forgot Password?
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <LoginButton sx={{ my: 2 }}>Login</LoginButton>
        </Link>
      </FormBox>
    </HorizontalCenter>
  );
};
