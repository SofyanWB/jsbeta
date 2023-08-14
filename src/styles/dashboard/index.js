import { ListItem, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  paddingBottom: "200px",
  
  //background: Colors.light_gray,
  [theme.breakpoints.down(1043)]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const DashboarImage = {
  width: "630px",
  height: "430px",
  position: "relative",
  "@media (max-width: 1440px)": {
    width: "35vw",
    height: "25vw"
  },
  "@media (max-width: 1043px)": {
    width: "60vw",
    height: "40vw",
    marginBottom: "5%"
  },
}

export const DashboardImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "60%",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    width: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "250px",
  },
}));

export const DashboardContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10px",
  position: "relative",
  "@media (max-width: 1043px)": {
    maxWidth: "90%"
  },
}));

export const DashboardButtonLihat = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const DashboardTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "33px",
  marginBottom: "30px",
  textAlign: "center",
  color: "#004581",
  maxWidth: 630,
  [theme.breakpoints.down(1440)]: {
    fontSize: "2.5vw",
  },
  [theme.breakpoints.down(1230)]: {
    maxWidth: 550,
  },
  [theme.breakpoints.down(1044)]: {
    fontSize: "4.5vw",
    maxWidth: "100%",
    marginBottom: "3%",
  },
}));

export const DashboardDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const StyleButton = {
  width: "210px",
  height: "70px",
  borderRadius: 10,
  backgroundColor: "#ED783E",
  boxShadow: 5
}

export const StyleButton2 = {
  height: "65px",
  width: "200px",
  fontSize: "18px",
  backgroundColor: "#F7941D",
  borderRadius: 8,
  textTransform: "none",
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

//menampung list menu



// styling efek & bentuk highlight
export const ListItemStyled = styled(ListItem)` 
    
    transform: translateY(-10%);  
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
    &:focus {
      transform: translateY(0);
      background-color: white;
      padding: 3px 13px;  
      border-radius: 10vw 10vw 10vw 10vw;
      
    }
  `;


//merubah style text didalam list view
export const listTextStyle = {
  fontSize: "20px",
  "@media (max-width: 1440px)": {
    fontSize: "1.5vw",
    height: "2.5vw"
  },
  "@media (max-width: 1043px)": {
    fontSize: "3vw",
    height: "4vw"
  },
  "@media (max-width: 600px)": {
    fontSize: "3vw",
    height: "3vw"
  },
}

//merubah style bentuk dari list
export const listStyle = {
  overflow: "auto",
  height: "400px",
  direction: "rtl",
  marginTop:"30px",
  marginBottom:"50px",
  "::-webkit-scrollbar": {
    width: "8px",
  },
  "::-webkit-scrollbar-track": {
    background: "white",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#1455A3",
    borderRadius: "5px",
  },
  "::-moz-scrollbar": {
    width: "8px",
  },
  "::-moz-scrollbar-track": {
    background: "white",
  },
  "::-moz-scrollbar-thumb": {
    backgroundColor: "#1455A3",
    borderRadius: "5px",
  },

  "@media (max-width: 1440px)": {
    height: "28vw",
  },

  "@media (max-width: 1043px)": {
    height: "50vw",
  },

  "@media (max-width: 425px)": {
    height: "60vw",
  },

}

//merubah style dari container list
export const listContainer = {
  display: "flex",
  flexDirection: "row",
  padding: "50px",
  paddingTop: "0px",
  alignItems: "center",
  justifyContent: "center",
  // add the following styles for small screens
  "@media (max-width: 1043px)": {
    flexDirection: "column-reverse",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  },
}