import { Box, styled } from "@mui/material";
import theme from "../theme";

export const BoxContainer = styled(Box)(() => ({
  top: "-8vh",
  position: "relative",
  zIndex: "1",
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

  "@media (max-width: 599px)": {
    top: "-6vh",
  },
  "@media (max-width: 499px)": {
    top: "-8vh",
  },
  "@media (max-width: 449px)": {
    top: "-5vh",
  },

  // "@media (max-width: 2299px)": {
  //   top: "-10vh",
  // },
  // "@media (max-width: 2199px)": {
  //   top: "-10vh",
  // },
  // "@media (max-width: 2099px)": {
  //   top: "-10vh",
  // },
  // "@media (max-width: 1999px)": {
  //   top: "-8vh",
  // },
  // "@media (max-width: 1899px)": {
  //   top: "-8vh",
  // },
  // "@media (max-width: 1799px)": {
  //   top: "-8vh",
  // },
  // "@media (max-width: 1699px)": {
  //   top: "-8vh",
  // },
  // "@media (max-width: 1599px)": {
  //   top: "-8vh",
  // },
  // "@media (max-width: 1499px)": {
  //   top: "-8vh",
  // },
  // "@media (max-width: 1399px)": {
  //   top: "-8vh",
  // },
  // "@media (max-width: 1299px)": {
  //   top: "-8vh",
  // },
  // "@media (max-width: 1199px)": {
  //   top: "-7vh",
  // },
  // "@media (max-width: 1099px)": {
  //   top: "-12vh",
  // },
  // "@media (max-width: 499px)": {
  //   top: "-15vh",
  // },
  // "@media (max-width: 449px)": {
  //   top: "-10vh",
  // },
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
