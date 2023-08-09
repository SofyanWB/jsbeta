import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(rgba(186, 223, 255, 0.2), rgba(0, 0, 0, 0))",
}));

export const BoxAtas = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    paddingTop: "10%",
    textAlign: "center",
}));

export const BoxPagination = styled(Box)(({ theme }) => ({
    margin: "6%",

    [theme.breakpoints.down(1440)]: {
        margin: "0px",
    },
    [theme.breakpoints.down(1043)]: {
        margin: "0px",
    },
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
    fontSize: "2em",
    textAlign: "center",
    marginBottom: "15px",
    color: "#004581",

    [theme.breakpoints.down(1440)]: {
        fontSize: "3.2vw",
        paddingTop: "20%",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "6vw",
        paddingTop: "20%",
    },
}));

export const BoxLittleTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",
    marginBottom: "45px",

    color: "rgba(0, 0, 0, 0.6)",

    [theme.breakpoints.down(1440)]: {
        fontSize: "3vw",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "4vw",
    },
}));

export const BoxTitlePagination = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",

    [theme.breakpoints.down(1440)]: {
        fontSize: "3vw",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "4vw",
    },
}));