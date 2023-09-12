import { Divider, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
//import Carousel from "react-material-ui-carousel";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingBottom: "100px",
  //background: Colors.light_gray,

}));

export const BoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "90%",
  padding: "20px",

}));


// background image 

export const BoxImage2 = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "700px",
  top: "300px",
  left: "-4vh",
  height: "720px",

  position: "absolute"

}));

// ========== Judul dan Deskripsi ===================

// Judul

export const BoxTitle = styled(Typography)(({ theme }) => ({
  fontSize: "44px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "0.066px",
  color: "#003577",

  textAlign: "center",
  marginBottom: "2%",
  
  [theme.breakpoints.down(1440)]: {
    fontSize: "3.2vw",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "6vw",
  },
}));

// Deskripsi

export const BoxDescription = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "180.5%",
  letterSpacing: "0.027px",

  marginBottom: "3em",
  textAlign: "center",
  paddingLeft: "179px",
  paddingRight: "179px",
  marginTop: "5%",

  [theme.breakpoints.down(1440)]: {
    fontSize: "1.1vw",
    paddingLeft: "15vw",
    paddingRight: "15vw",
  },
  [theme.breakpoints.down(1043)]: {
    fontSize: "2vw",
    paddingLeft: "0vw",
    paddingRight: "0vw",
  },
  [theme.breakpoints.down(500)]: {
    fontSize: "12px",
    textAlign: "center",
  },
}));


// Garis

export const Dividers = () => {

  return (
    <div>

      <Divider
        color="#1455A3"
        sx={{
          height: 3,
          width: '7%',
          margin: "auto"
        }} />

    </div>

  )
}

// ================= end ==================


// ========== button logo dan title ============ 

export const efekHover = {
  width: "100%",
  borderRadius: "15%",
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  paddingTop: "10%",
  // padding:"20%",
  "&:hover": {
    boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.1)",
    bgcolor: "white"
  },
  "@media (max-width: 600px)": {
    height: "100%",
    paddingTop: "1%",
  }
}



// Logo

export const BoxImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  height: "80px",

  [theme.breakpoints.down(1400)]: {
    height: "4vw"
  },
  [theme.breakpoints.down(1042)]: {
    height: "9vw"
  },
  [theme.breakpoints.down(500)]: {
    height: "60px"
  },
}));


// Title Logo

export const textButton = {
  fontSize: "15px",
  textTransform: "none",
  height: "100px",
  color: "black",
  paddingTop: "10%",
  margin: "5%",
  textAlign: "center",
  "@media (max-width: 1400px)": {
    fontSize: "1vw",
  },
  "@media (max-width: 1043px)": {
    fontSize: "2vw",
  },
  "@media (max-width: 600px)": {
    fontSize: "12px",
    height: "30%"
  },
}

// ===================== end =====================


// ========= button Lihat Semua ==========

export const StyleButton = {
  width: "190px",
  height: "60px",
  borderRadius: 10,
  backgroundColor: "transparent",
  color: "blue",
  margin: "0 auto",
  "&:hover": {
    backgroundColor: "#1455A3",
    color: "white"
  }
}

export const StyleButton2 = {
  height: "65px",
  width: "200px",
  fontSize: "18px",
  backgroundColor: "#F7941D",
  borderRadius: 8,
  textTransform: "none",
  margin: "0 auto",

  boxShadow: "3px 3px 8px 1px rgba(0, 0, 0, 0.25)",
  "&:hover": {
    backgroundColor: "white",
    color: "#F7941D",
    border: "2px solid #F7941D",
  },
  "@media (max-width: 1440px)": {

    height: "4.5vw",
    width: "14vw",
    fontSize: "1.3vw"
  },
  "@media (max-width: 1042px)": {

    height: "7vw",
    width: "21vw",
    fontSize: "2vw"
  },
  "@media (max-width: 600px)": {

    height: "9vw",
    width: "35vw",
    fontSize: "2.5vw"
  },
}


export const StyleTextButton = {
  textDecoration: "underline",
}

export const CarouselStyle = {
  height: "30vw",
  marginBottom: "3%",

  "@media (max-width: 2160px)": {
    marginLeft: "-5%",
    marginRight: "-5%",
    height: "28vw",
  },
  "@media (max-width: 1900px)": {
    marginLeft: "-5%",
    marginRight: "-5%",
    height: "30vw",
  },
  "@media (max-width: 1600px)": {
    marginLeft: "-5%",
    marginRight: "-5%",
    height: "35vw",
  },
  "@media (max-width: 1440px)": {
    marginLeft: "-5%",
    marginRight: "-5%",
    height: "35vw",
  },
  "@media (max-width: 1042px)": {
    marginLeft: "-7%",
    marginRight: "-7%",
    height: "60vw",
  },
  "@media (max-width: 900px)": {
    marginLeft: "-7%",
    marginRight: "-7%",
    height: "60vw",
  },
  "@media (max-width: 800px)": {
    marginLeft: "-7%",
    marginRight: "-7%",
    height: "63vw",
  },
  "@media (max-width: 700px)": {
    marginLeft: "-9%",
    marginRight: "-9%",
    height: "65vw",
  },
  "@media (max-width: 600px)": {
    marginLeft: "-9%",
    marginRight: "-9%",
    height: "65vw",
  },
  "@media (max-width: 500px)": {
    marginLeft: "-10%",
    marginRight: "-10%",
    height: "75vw",
  },
  "@media (max-width: 450px)": {
    marginLeft: "-20%",
    marginRight: "-20%",
    height: "85vw",
  },
  "@media (max-width: 400px)": {
    marginLeft: "-20%",
    marginRight: "-20%",
    height: "95vw",
  },
  "@media (max-width: 350px)": {
    marginLeft: "-30%",
    marginRight: "-30%",
    height: "120vw",
  }
}