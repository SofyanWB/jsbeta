import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(rgba(186, 223, 255, 0.2), rgba(0, 0, 0, 0))",
}));

export const BoxAll = styled(Box)(({ theme }) => ({
    maxWidth: "1300px",
    margin: "0 auto",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxAtas = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    paddingTop: "10%",
    textAlign: "center",
}));

export const BoxContent = styled(Box)(({ theme }) => ({
    marginLeft: "6%",
    marginRight: "6%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxCarouselAtas = styled(Box)(({ theme }) => ({
    position: "sticky",
    overflow: "hidden",
    marginTop: "6%",
    // marginBottom: "3%",

    [theme.breakpoints.down(1440)]: {
        marginLeft: "1%",
        marginRight: "1%",
    },
    [theme.breakpoints.down(1043)]: {
        marginLeft: "1%",
        marginRight: "1%",
    },
}));

export const BoxCarouselBawah = styled(Box)(({ theme }) => ({
    position: "sticky",
    overflow: "hidden",
    marginTop: "6%",
    marginLeft: "6%",
    marginRight: "6%",
    // marginBottom: "3%",

    [theme.breakpoints.down(1440)]: {
        marginLeft: "1%",
        marginRight: "1%",
    },
    [theme.breakpoints.down(1043)]: {
        marginLeft: "1%",
        marginRight: "1%",
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

export const BoxDescription = styled(Typography)(({ theme }) => ({
    color: "#004581",
    fontSize: "31px",
    fontWeight: "550",
    lineHeight: "160%",
    letterSpacing: "0.047px",
    textAlign: "left",

    [theme.breakpoints.down(1440)]: {
        fontSize: "3.2vw",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "6vw",
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