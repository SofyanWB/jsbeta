import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(rgba(186, 223, 255, 0.2), rgba(0, 0, 0, 0))",
}));

export const BoxAtas = styled(Box)(({ theme }) => ({
    bottom: "0"
}));

export const BoxFooter = styled(Box)(({ theme }) => ({
    position: "absolute",
    bottom: "0px",
    width: "100%",
}));

export const BoxContent = styled(Box)(({ theme }) => ({
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "8%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxImage1 = styled("img")(({ src }) => ({
    src: `url(${src})`,
    position: "absolute",
    width: "100%",
    height: "100%",
    marginTop: "-80px",
}));

export const BoxImage2 = styled("img")(({ src }) => ({
    src: `url(${src})`,
    position: "absolute",
    width: "40%",
    marginTop: "-80px",
}));

export const BoxTitle1 = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    zIndex: "10",
    fontSize: "2em",
    textAlign: "center",
    marginBottom: "15px",
    color: "#004581",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const BoxTitle2 = styled(Typography)(({ theme }) => ({
    lineHeight: 1.2,
    zIndex: "10",
    fontSize: "1.5em",
    textAlign: "left",
    marginTop: "15px",
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const BoxLittleTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",
    marginBottom: "45px",
    color: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));