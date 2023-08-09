import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  paddingBottom: "50px",
  //background: Colors.light_gray,
  [theme.breakpoints.down(1043)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BoxImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "550px",
  [theme.breakpoints.down(1443)]: {
    width: "35vw",
    height: "auto",
  },
  [theme.breakpoints.down(1043)]: {
    width: "55vw",
  },
}));

export const BoxContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  maxWidth: 700,
  // padding: "20px",
  paddingLeft: "20px",
  marginLeft: "50px",
  [theme.breakpoints.down(1440)]: {
    marginLeft: "4vw",
  },
  [theme.breakpoints.down(1043)]: {
    marginLeft: 0,
    paddingBottom: "1vw",
  },
  [theme.breakpoints.down(600)]: {
    marginLeft: 0,
    marginBottom: "50px",
  },
}));

export const BoxContent2 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));


export const BoxTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.1,
  fontSize: "46px",
  textAlign: "center",
  marginBottom: "30px",
  maxWidth: 800,
  color: "#004581",
  [theme.breakpoints.down(1440)]: {
    fontSize: "3.2vw",
    marginBottom: "2vw",
  },
  [theme.breakpoints.down(1043)]: {
    maxWidth: "78vw",
    fontSize: "6vw",
    marginBottom: "4vw",
  },
  [theme.breakpoints.down(600)]: {
    marginBottom: "7vw",
  },
  [theme.breakpoints.down(315)]: {
    maxWidth: "100%",
    fontSize: "6vw",
    marginBottom: "4vw",
  },
}));

export const BoxDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.8,
  fontSize: "19px",
  marginBottom: "1.5em",
  textAlign: "center",
  maxWidth: "70%",
  
  [theme.breakpoints.down(1043)]: {
    fontSize: "2vw",
  },
  [theme.breakpoints.down(500)]: {
    fontSize: "12px",
    textAlign: "center",
  },
}));


export const boxDefault = {
  padding: 2,
  m: 1,
  display: "flex",
};


// StyleButtonPilihan

export const iconButtonStyles = {
  height: "143px",
  width: "130px",
  fontSize: "10px",
  backgroundColor: "rgb(101, 158, 188, 0.2)",
  borderRadius: 8,
  textTransform: "none",
  margin: "20px",
  "&:hover": {
    backgroundColor: "rgb(101, 158, 188, 0.6)",
  },
  "@media (max-width: 1400px)": {
    width: "9vw",
    height: "10vw",
    margin: "0.3vw",
    borderRadius: "2vw",
  },
  "@media (max-width: 1042px)": {
    width: "15vw",
    height: "17vw",
    margin: "2vw",
  },
}

export const iconButtonStyles2 = {
  height: "143px",
  width: "130px",
  fontSize: "10px",
  backgroundColor: "rgb(214, 255, 182, 0.5)",
  borderRadius: 8,
  textTransform: "none",
  margin: "20px",
  "&:hover": {
    backgroundColor: "rgb(214, 255, 182, 4)",
  },
  "@media (max-width: 1400px)": {
    width: "9vw",
    height: "10vw",
    borderRadius: "2vw",
  },
  "@media (max-width: 1042px)": {
    width: "15vw",
    height: "17vw",
  },
}

export const iconButtonStyles3 = {
  height: "65px",
  width: "200px",
  fontSize: "18px",
  backgroundColor: "#F7941D",
  borderRadius: 8,
  textTransform: "none",
  margin: "30px",
  boxShadow: "3px 3px 8px 1px rgba(0, 0, 0, 0.25)",

  "&:hover": {
    backgroundColor: "white",
    color: "#F7941D",
    border: "2px solid #F7941D",
  },
  "@media (max-width: 1440px)": {
    margin: "3.5vw",
    height: "4.5vw",
    width: "14vw",
    fontSize: "1.3vw"
  },
  "@media (max-width: 1042px)": {
    margin: "8vw",
    height: "7vw",
    width: "21vw",
    fontSize: "2vw"
  },
  "@media (max-width: 600px)": {
    margin: "8vw",
    height: "9vw",
    width: "35vw",
    fontSize: "2.5vw"
  },

}


export const BoxImage2 = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "50%",
  position: "center",

  [theme.breakpoints.down(1043)]: {
    width: "60%"
  },
  [theme.breakpoints.down(600)]: {
    width: "50%"
  },
}));

export const judulButton = {
  color: "black",
  "@media (max-width: 1440px)": {
    fontSize: "1.1vw"
  },
  "@media (max-width: 1042px)": {
    fontSize: "2vw"
  },
  "@media (max-width: 600px)": {
    fontSize: "4vw",
  },
}

export const button600px = {
  "@media (max-width: 600px)": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  }, //merubah posisi icon dan judul
}

export const kotakGambar = {
  height: "30%",
  width: "70%",
  backgroundColor: "rgb(101, 158, 188, 0.1)",
  borderRadius: 4,
  margin: "20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 1400px)": {
    width: "500px",
    height: "120px",
  },
  "@media (max-width: 1042px)": {
    width: "70vw",
    height: "16vw",
  },
}

export const imageContent = {
  margin: "3%",
  display: "grid",
  justifyItems: "center",
  "@media (max-width: 1042px)": {
    margin: "5%"
  }
}

export const textContent = {
  textAlign: "center",
  paddingTop: "9%",
  fontSize: "0.9vw",
  "@media (max-width: 1440px)": {
    fontSize: "12px"
  },
  "@media (max-width: 1042px)": {
    fontSize: "1.5vw"
  },
  "@media (max-width: 600px)": {
    fontSize: "2vw",
  },
}

export const divider = {
  orientation: "vertical",
  border: "0.1vw solid rgba(0, 53, 119, 0.5)",
  // backgroundColor:"#003577",
  height: "3.5vw",
  "@media (max-width: 1440px)": {
    border: "1.34px solid rgba(0, 53, 119, 0.5)",
    height: "50px"
  },
  "@media (max-width: 1042px)": {
    border: "0.15vw solid rgba(0, 53, 119, 0.5)",
    height: "6vw"
  },

}

