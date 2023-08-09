import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(rgba(186, 223, 255, 0.2), rgba(0, 0, 0, 0))",
}));

export const BoxAtas = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    paddingTop: "10%",
    textAlign: "center",

    [theme.breakpoints.down(1440)]: {
        paddingTop: "0",
    },
    [theme.breakpoints.down(1043)]: {
        paddingTop: "1%",
    },
}));
export const BoxPagination = styled(Box)(({ theme }) => ({
    marginLeft: "7%",
    marginRight: "7%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxImage1 = styled("img")(({ src }) => ({
    src: `url(${src})`,
    position: "absolute",
    width: "100%",
    height: "100%",
    marginTop: "-80px"
}));

export const BoxImage2 = styled("img")(({ src }) => ({
    src: `url(${src})`,
    position: "absolute",
    width: "40%",
    marginTop: "-80px",
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    zIndex: "10",
    fontSize: "2em",
    textAlign: "center",
    marginBottom: "15px",
    color: "#004581",

    [theme.breakpoints.down(1440)]: {
        fontSize: "2.2vw",
        paddingTop: "10%",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "2.5vw",
        paddingTop: "15%",
    },
    [theme.breakpoints.down(800)]: {
        fontSize: "4vw",
        paddingTop: "20%",
    },
    [theme.breakpoints.down(700)]: {
        fontSize: "5vw",
        paddingTop: "20%",
    },
    [theme.breakpoints.down(600)]: {
        fontSize: "5vw",
        paddingTop: "25%",
    },
    [theme.breakpoints.down(500)]: {
        fontSize: "5vw",
        paddingTop: "25%",
    },
    [theme.breakpoints.down(401)]: {
        fontSize: "5vw",
        paddingTop: "20%",
    },
    [theme.breakpoints.down(400)]: {
        fontSize: "7vw",
        paddingTop: "25%",
    },
    [theme.breakpoints.down(350)]: {
        fontSize: "7vw",
        paddingTop: "35%",
    },
    [theme.breakpoints.down(260)]: {
        fontSize: "7vw",
        paddingTop: "40%",
    },
}));

export const BoxLittleTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",
    marginBottom: "45px",

    color: "rgba(0, 0, 0, 0.6)",

    [theme.breakpoints.down(1440)]: {
        fontSize: "1.5vw",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "2vw",
    },
    [theme.breakpoints.down(800)]: {
        fontSize: "2.3vw",
    },
    [theme.breakpoints.down(700)]: {
        fontSize: "2.5vw",
    },
    [theme.breakpoints.down(600)]: {
        fontSize: "2.5vw",
    },
    [theme.breakpoints.down(500)]: {
        fontSize: "3.5vw",
    },
    [theme.breakpoints.down(400)]: {
        fontSize: "4vw",
        marginLeft: "2%",
        marginRight: "2%",
    },
    [theme.breakpoints.down(315)]: {
        fontSize: "3vw",
    },
}));

export const BoxTitlePagination = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",

    [theme.breakpoints.down(1440)]: {
        fontSize: "1.5vw",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "1.7vw",
    },
    [theme.breakpoints.down(800)]: {
        fontSize: "1.8vw",
    },
    [theme.breakpoints.down(700)]: {
        fontSize: "2vw",
    },
    [theme.breakpoints.down(600)]: {
        fontSize: "2.3vw",
    },
    [theme.breakpoints.down(500)]: {
        fontSize: "3vw",
    },
    [theme.breakpoints.down(400)]: {
        fontSize: "3vw",
    },
    [theme.breakpoints.down(325)]: {
        fontSize: "4vw",
    },
}));