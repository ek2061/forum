import { styled } from "@mui/system";
import NavBar from "layouts/Navbar";
import { Outlet } from "react-router-dom";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  overflow: "hidden",
  height: "100%",
  width: "100%",
}));

const Wrapper = styled("div")(({ theme }) => ({
  paddingTop: "64px",
  flex: "1 1 auto",
  WebkitOverflowScrolling: "touch",
  overflow: "hidden",
}));

const Container = styled("div")(({ theme }) => ({
  flex: "1 1 auto",
  overflow: "hidden",
  padding: theme.spacing(3),
}));

export default function HomePage() {
  return (
    <Root>
      <NavBar />
      <Wrapper>
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
    </Root>
  );
}
