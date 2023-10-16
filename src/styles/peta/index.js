import { Button, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "0px 0px",
  paddingBottom: "100px",
  marginTop: "120px",

  [theme.breakpoints.down(1043)]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down(762)]: {
    marginTop: "10vw"
  },
}));

export const BoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  maxWidth: "750px",
  paddingRight: "60px",
  paddingLeft: "0px",
  paddingBottom: "0px",

  [theme.breakpoints.down(2160)]: {
    maxWidth: "50vw",
  },
  // [theme.breakpoints.down(1440)]: {
  //   maxWidth: "60vw",
  // },
  [theme.breakpoints.down(1043)]: {
    width: "60vw",
    paddingRight: "0px"
  },
  [theme.breakpoints.down(413)]: {
    maxWidth: "80vw",
  },
}));

export const BoxContent2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  maxWidth: "600px",
  paddingBottom: "0px",
  zIndex: "20",

  [theme.breakpoints.down(1440)]: {
    width: "25vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "55vw",
  },
}));

export const BoxImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "80%",
  maxWidth: "400px",
  position: "relative",
  zIndex: "20",

  [theme.breakpoints.down(1440)]: {
    width: "29vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "55vw",
    marginBottom: "15%"
  },
}));

export const BoxImageLatar = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "43%",
  top: "2%",
  left: "-2%",
  position: "absolute",

  [theme.breakpoints.down("xl")]: {
    width: "43vw",

  },
  [theme.breakpoints.down(1075)]: {
    top: "1vw",
    width: "60vw",
  },

}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
  fontSize: "44px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "0.066px",
  marginBottom: "20px",
  color: Colors.title,
  position: "relative",

  [theme.breakpoints.down(1440)]: {
    fontSize: "3.3vw",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "6.5vw",
  },
  [theme.breakpoints.down(500)]: {
    fontSize: "7vw",
    textAlign: "center",
  },
}));

export const BoxDescription = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "180.5%",
  letterSpacing: "0.027px",
  marginBottom: "3em",
  maxWidth: "100%",
  position: "relative",

  [theme.breakpoints.down(1043)]: {
    fontSize: "2vw",
  },
  [theme.breakpoints.down(500)]: {
    fontSize: "2.5vw",
  },
  [theme.breakpoints.down(500)]: {
    fontSize: "12px",
    textAlign: "center",
  },
}));

//BUTTON

export const BoxImageButton = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "30%",
  padding: "8%",
  marginLeft: "4%",
  marginRight: "4%",
}));

export const ButtonDialog = styled(Button)(({ theme }) => ({
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",

  width: "89%",
  height: "65%",
  marginBottom: "50px",
  backgroundColor: "white",
  color: Colors.title,
  justifyContent: "left",
  textTransform: "none",

  [theme.breakpoints.down(1440)]: {
    width: "25vw",
    fontSize: "2vw"
  },
  [theme.breakpoints.down(1043)]: {
    width: "55vw",
    height: "15vw",
    fontSize: "4vw",
    marginBottom: "8vw",
  },
}));

export const iconButtonStyles = {
  borderRadius: 7,
  boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.1)",
  "@media (max-width: 1043px)": {
    borderRadius: "3vw"
  },
}

export const iconButtonStyles2 = {
  width: "100%",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    backgroundColor: "white",
  },


}

export const hoverItem = {
  textAlign: "left",
  color: "black",
  fontSize: "15px",
  //paddingRight: "10px",
  textTransform: "none",
  lineHeight: 1.5,
  "@media (max-width: 1440px)": {
    fontSize: "1.1vw",
  },
  "@media (max-width: 1042px)": {
    fontSize: "2.3vw",
  },
  "@media (max-width: 470px)": {
    paddingTop: "2vw",
  },
}

export const TypoHoverTitle = {
  color: Colors.title,
  textTransform: "none",
  fontSize: "20px",
  width: "80px",
  marginRight: "75%",
  "@media (max-width: 1440px)": {
    fontSize: "1.4vw",
  },
  "@media (max-width: 1042px)": {
    fontSize: "3.5vw",
  },
  "@media (max-width: 600px)": {
    fontSize: "3vw",
    marginLeft: "20%",
  },
}

export const TypoHoverTitle2 = {
  color: Colors.title,
  textTransform: "none",
  fontSize: "20px",
  marginLeft: "10px",
  marginBottom: "10px",
  "@media (max-width: 1440px)": {
    fontSize: "1.4vw",
  },
  "@media (max-width: 1042px)": {
    fontSize: "3.5vw",
  },
}

export const ImageButtonHover = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "80px",
  position: "relative",
  marginRight: "10%",
  "@media (max-width: 1440px)": {
    width: "4vw",
  },
  "@media (max-width: 1042px)": {
    width: "15vw",
  },
  "@media (max-width: 600px)": {
    width: "9vw",
  },
}));


//Popover 

export const BoxContainerHover1 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "400px",
  height: "170px",
  padding: "30px",
  [theme.breakpoints.down(1440)]: {
    width: "28vw",
    height: "12vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "60vw",
    height: "25vw",
    padding: "2vw"
  },
}));

export const BoxContainerHover2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "400px",
  height: "250px",
  padding: "30px",
  [theme.breakpoints.down(1440)]: {
    width: "28vw",
    height: "17vw",
  },
  [theme.breakpoints.down(1043)]: {
    width: "60vw",
    height: "38vw",
    padding: "2vw"
  },
}));

//Settingan konten dialog

export const ContentButtonHover = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",

  "@media (max-width: 1440px)": {
    padding: "3%"
  },
  "@media (max-width: 1043px)": {
    paddingLeft: "3%",
    paddingRight: "3%",
    marginLeft: "3%"
  },
  "@media (max-width: 600px)": {
    paddingTop: "1%"
  },
}));

//button dialognya

export const ButtonHoverAction = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  paddingTop: "8%",
  paddingBottom: "3%"
}));

export const PetaTitle = {
  borderRadius: 5, 
  marginTop:"-3vw",
  width:"30vw",
  height: "94px",
  "@media (max-width: 810px)": {
    height: "10vw",
    marginBottom:"2vw"
  },
}

export const Deskripsi1 = {
  width:"100%",
  height:"34px",
  borderRadius: 3,

  "@media (max-width: 810px)": {
    height: "5vw",
  },
}

export const ImagePeta = {
  width:"100%",
  height:"15vw",
  borderRadius: 7,

  "@media (max-width: 1042px)": {
    height: "30vw",
    marginTop:"2vw",
    marginBottom:"10vw"
  },
}

//SKELETON BUTTON

export const ImageButton = {
  margin: "7%", 
  padding: "9%",
}

export const SkelText = {
  width:"40%", 
  height:"60%", 
  animation:"wave", 
  borderRadius: 5,

  "@media (max-width: 1042px)": {
    // height: "30vw",
    // marginBottom:"7vw"
  },
}
