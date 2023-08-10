import { Box, styled } from "@mui/material";
import theme from "../theme";

export const BoxContainer = styled(Box)(() => ({
  top: "-8vh",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "auto",
  height: "100%",
  opacity: "100%",
  width: "94%",
  background: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.1)",
  borderRadius: "30px",
  overflowX: "hidden", //yg bikin blank space di kanan

  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
  },

  "@media only screen and (max-height: 520px)": {
    top: "-18vh",
  },
}));

export const BoxContent = styled(Box)(() => ({
  backgroundImage: "linear-gradient(192deg, rgba(187, 221, 255, 0.14) 0%, rgba(187, 221, 255, 0.30) 20%, rgba(187, 221, 255, 0.00) 60%, rgba(187, 221, 255, 0.5))",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  width: "100%",
}));

export const BoxImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  position: "absolute",
  borderRadius: "30px",
  width: "100%",
  height: "100%"
}));
