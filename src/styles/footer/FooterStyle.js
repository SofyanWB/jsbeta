import styled from "@emotion/styled";
import { Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";

export const FooterContainer = styled(Box)(() => ({
  color: "rgba(0, 0, 0, 0.7)",
  lineHeight: "2",
}));

export const BoxContainer = styled(Box)(() => ({
  paddingLeft: "7%",
  paddingRight: "5%",
  position: "relative",
  fontSize: "0.8em",
}));

export const BoxContainer2 = styled(Box)(() => ({
  position: "relative",
  marginTop: "3%",
  marginLeft: "5%",
  marginRight: "5%",
}));

export const BoxContainer3 = styled(Box)(() => ({
  height: "38px",
  marginTop: "10px",
  paddingLeft: "6%",
  paddingRight: "6%",
  textAlign: "center",
  fontSize: "0.8em",
}));

export const FooterTitle = styled(Typography)(() => ({
  fontSize: "23px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "170.182%",
  letterSpacing: "-0.3px",
}));

export const FooterTitleDecription = styled(Typography)(() => ({
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "204.182%",
  letterSpacing: "-0.3px",
}));

export const FooterBawah = styled(Typography)(() => ({
  fontSize: "1em",
  textAlign: "center"
}));

export const Dividers1 = () => {
  return (
    <div>
      <Divider
        color="#e1e1e1"
        sx={{
          height: 4,
          border: "none",
          width: "100%",
          borderRadius: "10px",
          marginTop: "9px",
        }} />
    </div>
  )
}

export const Dividers2 = () => {
  return (
    <div>
      <Divider
        color="#e1e1e1"
        sx={{
          height: 4,
          border: "none",
          width: "100%",
          borderRadius: "10px",
          marginTop: "9px",
        }} />
    </div>
  )
}