import { Divider, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from 'react';

export const BoxContainer = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    position: "relative",
    paddingTop: "10%",
    zIndex: "1",
    textAlign: "center",
    backgroundImage: "linear-gradient(rgba(186, 223, 255, 0.2), rgba(0, 0, 0, 0))",
}));

export const BoxImage1 = styled("img")(({ src, theme }) => ({
    width: '80%',
    height: 'auto',
    // alignItems: 'center',

    [theme.breakpoints.down(1440)]: {
        width: '80%',

    },
    [theme.breakpoints.down(1043)]: {
        width: '80%',
        top: '20px',
        marginBottom: '30px',
    },
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    zIndex: "10",
    fontSize: "2em",
    textAlign: "center",
    marginBottom: "15px",
    color: "#004581",
}));

export const BoxLittleTitle = styled(Box)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "justify",
    color: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.down(1440)]: {
        fontSize: ".8em",
        padding: 0,
        margin: 0,

    },
    [theme.breakpoints.down(1043)]: {
        fontSize: ".8em",
        padding: 0,
        // margin: 0,
        top: '16px',
        marginBottom: '50px',

    },
}));

export const BoxLittleTitle2 = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",
    margin: "20px",
    color: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const Dividers = () => {
    return (
        <div>
            <Divider
                color="#004581"
                sx={{
                    marginLeft: "47%",
                    marginRight: "47%",
                    height: 4,
                    width: "75px",
                    borderRadius: "10px",
                    marginBottom: "20px"
                }} />
        </div>
    )
}