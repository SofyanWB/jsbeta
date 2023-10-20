import {
    styled,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    position: "relative",
    paddingTop: "10%",
    zIndex: "1",
    textAlign: "center",
}));

export const BoxAll = styled(Box)(({ theme }) => ({
    maxWidth: "1500px",
    margin: "0 auto",
}));

export const BoxAtas = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    textAlign: "center",

    [theme.breakpoints.down(1440)]: {
        paddingTop: "0",
    },
    [theme.breakpoints.down(1043)]: {
        paddingTop: "1%",
    },
}));

export const BoxContent = styled(Box)(({ theme }) => ({
    marginLeft: "7%",
    marginRight: "7%",
    justifyContent: "center",
    position: "relative",
    paddingTop: "10%",
    zIndex: "1",
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

export const BoxTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    zIndex: "10",
    fontSize: "2.2em",
    textAlign: "center",
    marginBottom: "15px",
    color: "#004581",

    [theme.breakpoints.down(1440)]: {
        marginTop: "3%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "2.2em",
    },
    [theme.breakpoints.down(1043)]: {
        marginTop: "5%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "2em",
    },
    [theme.breakpoints.down(800)]: {
        marginTop: "10%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "2em",
    },
    [theme.breakpoints.down(700)]: {
        marginTop: "13%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "2em",
    },
    [theme.breakpoints.down(600)]: {
        marginTop: "15%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "2em",
    },
    [theme.breakpoints.down(500)]: {
        marginTop: "18%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "2em",
    },
    [theme.breakpoints.down(400)]: {
        marginTop: "20%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "2em",
    },
    [theme.breakpoints.down(315)]: {
        marginTop: "23%",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: "2em",
    },
}));

export const BoxLittleTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",
    margin: "45px",
    color: "rgba(0, 0, 0, 0.6)",

    [theme.breakpoints.down(1440)]: {
        fontSize: "1em",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "1em",
    },
}));