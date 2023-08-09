import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";

export const BoxContainer = styled(Box)(({ theme }) => ({
    display: "relative",
    backgroundImage: "linear-gradient(rgba(186, 223, 255, 0.2), rgba(0, 0, 0, 0))",
}));

export const BoxBukuPanduan = styled(Box)(({ theme }) => ({
    position: "relative",
    height: "100%",
    paddingTop: "12%",
    marginLeft: "9%",
    marginRight: "9%",
    justifyContent: "center",
    textAlign: "center",

    [theme.breakpoints.down(1043)]: {
        paddingTop: "15%",
    },
    [theme.breakpoints.down(960)]: {
        paddingTop: "15%",
    },
    [theme.breakpoints.down(720)]: {
        paddingTop: "20%",
    },
    [theme.breakpoints.down(450)]: {
        paddingTop: "30%",
    },
    [theme.breakpoints.down(350)]: {
        paddingTop: "35%",
    },
    [theme.breakpoints.down(300)]: {
        paddingTop: "40%",
    },
}));

export const BoxTutorialdanPanduanGIS = styled(Box)(({ theme }) => ({
    position: "relative",
    height: "100%",
    marginTop: "9%",
    marginLeft: "9%",
    marginRight: "9%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxTutorialdanPanduanIRK = styled(Box)(({ theme }) => ({
    position: "relative",
    height: "100%",
    marginTop: "25%",
    marginLeft: "9%",
    marginRight: "9%",
    marginBottom: "9%",
    justifyContent: "center",
    textAlign: "center",

    [theme.breakpoints.down(1440)]: {
        marginTop: "25%",
    },
    [theme.breakpoints.down(1043)]: {
        marginTop: "10%",
    },
    [theme.breakpoints.down(960)]: {
        marginTop: "-10%",
    },
    [theme.breakpoints.down(700)]: {
        marginTop: "-8%",
    },
    [theme.breakpoints.down(600)]: {
        marginTop: "-5%",
    },
    [theme.breakpoints.down(500)]: {
        marginTop: "5%",
    },
    [theme.breakpoints.down(450)]: {
        marginTop: "10%",
    },
    [theme.breakpoints.down(400)]: {
        marginTop: "20%",
    },
    [theme.breakpoints.down(350)]: {
        marginTop: "25%",
    },
    [theme.breakpoints.down(300)]: {
        marginTop: "40%",
    },
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    marginBottom: "20px",
    color: Colors.title,
    position: "relative",

    [theme.breakpoints.down(1043)]: {
        fontSize: "3vw",
    },
    [theme.breakpoints.down(960)]: {
        fontSize: "4vw",
    },
    [theme.breakpoints.down(500)]: {
        fontSize: "5vw",
    },
    [theme.breakpoints.down(400)]: {
        fontSize: "5.5vw",
    },
}));

export const BoxTitle2 = styled(Typography)(({ theme }) => ({
    lineHeight: 1.1,
    marginBottom: "20px",
    color: Colors.title,
    position: "relative",

    [theme.breakpoints.down(1440)]: {
        fontSize: "3.3vw",
    },
    [theme.breakpoints.down(1043)]: {
        marginTop: "50%",
        fontSize: "3vw",
    },
    [theme.breakpoints.down(960)]: {
        fontSize: "4vw",
    },
    [theme.breakpoints.down(700)]: {
        fontSize: "4vw",
    },
    [theme.breakpoints.down(600)]: {
        fontSize: "3.8vw",
    },
    [theme.breakpoints.down(500)]: {
        fontSize: "4.5vw",
    },
    [theme.breakpoints.down(400)]: {
        fontSize: "5.5vw",
    },
}));

export const BoxLittleTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.8,
    marginBottom: "3em",
    maxWidth: "100%",
    position: "relative",

    [theme.breakpoints.down(1440)]: {
        fontSize: "1.2vw",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "1.5vw",
    },
    [theme.breakpoints.down(800)]: {
        fontSize: "2vw",
    },
    [theme.breakpoints.down(700)]: {
        fontSize: "2vw",
    },
    [theme.breakpoints.down(600)]: {
        fontSize: "2.5vw",
    },
    [theme.breakpoints.down(500)]: {
        fontSize: "3vw",
    },
    [theme.breakpoints.down(400)]: {
        fontSize: "3.5vw",
    },
    [theme.breakpoints.down(315)]: {
        fontSize: "3vw",
    },
}));