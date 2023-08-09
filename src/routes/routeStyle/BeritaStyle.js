import {
    Divider,
    styled,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
    backgroundImage: "linear-gradient(rgba(186, 223, 255, 0.2), rgba(0, 0, 0, 0))",
    marginTop: "-4.5vh",
    zIndex: "1",

    [theme.breakpoints.down(1440)]: {
        marginTop: "-5vh",
    },
    [theme.breakpoints.down(1043)]: {
        marginTop: "-5vh",
    },
}));

export const BoxCarousel = styled(Box)(({ theme }) => ({
    marginLeft: "2.4%",
    marginRight: "2.4%",
    marginTop: "5%",
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

export const BoxBeritaTerbaru = styled(Box)(({ theme }) => ({
    marginLeft: "9%",
    marginRight: "9%",
    marginBottom: "3%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxSemuaBerita = styled(Box)(({ theme }) => ({
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "1%",
    justifyContent: "center",
    textAlign: "center",

    [theme.breakpoints.down(1440)]: {
        marginLeft: "2%",
        marginRight: "2%",
    },
    [theme.breakpoints.down(1043)]: {
        marginLeft: "2%",
        marginRight: "2%",
    },
}));

export const BoxImage = styled("img")(({ src }) => ({
    width: "100%",
    height: "100%",
}));

export const BoxImageBeritaTerbaru = styled("img")(({ src }) => ({
    width: "56vh",
    height: "20vw",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2)"
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
    marginTop: "2%",
    lineHeight: 1.5,
    zIndex: "10",
    fontSize: "35px",
    fontWeight: "600",
    letterSpacing: "0.088px",
    textAlign: "center",
    marginBottom: "15px",
    color: "#003577",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const BoxTitleBeritaTerbaru = styled(Typography)(({ theme }) => ({
    textAlign: "left",
    fontSize: "2.5em",
    color: "rgba(0, 0, 0, 0.80)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const DividerSemuaBeritaKiri = () => {
    return (
        <div>
            <Divider
                sx={{
                    width: "110%",
                    height: 2,
                    bgcolor: "#464646"
                }} />
        </div>
    )
}

export const DividerSemuaBeritaKanan = () => {
    return (
        <div>
            <Divider
                sx={{
                    marginLeft: "-10%",
                    width: "110%",
                    height: 2,
                    bgcolor: "#464646"
                }} />
        </div>
    )
}