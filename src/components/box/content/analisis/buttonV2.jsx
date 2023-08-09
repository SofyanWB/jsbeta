import { Box, Divider, Typography } from "@mui/material"
import {
    // BoxContent,
    BoxImage2,
    // button600px,
    divider,
    // iconButtonStyles,
    // iconButtonStyles2,
    imageContent,
    // judulButton,
    kotakGambar,
    textContent,
} from "../../../../styles/dataAnalisis/index.js";
import React from "react";

export const Kotak = () => {

    return (

        <Box
            sx={kotakGambar}>

            <Box
                sx={imageContent}>
                <BoxImage2
                    src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/aa79a1f3d6f54b0c81432e593ad999e2/data" />
                <Typography sx={textContent}>Apotek</Typography>
            </Box>

            <Box>
                <Divider 
                    sx={divider} />
            </Box>

            <Box
                sx={imageContent}>
                <BoxImage2
                    src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/11e9b1d81d5640a5a66f40e4ede0fad8/data" />
                <Typography sx={textContent}>Batas Administrasi</Typography>
            </Box>

            <Box>
                <Divider 
                    sx={divider} />
            </Box>

            <Box
                sx={imageContent}>
                <BoxImage2
                    src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/aee41da5af8848aaaf8a10c7035d2504/data" />
                <Typography sx={textContent}>Transjakarta</Typography>
            </Box>

            <Box>
                <Divider 
                    sx={divider} />
            </Box>

            <Box
                sx={imageContent}>
                <BoxImage2
                    src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/f3008d96383c4beeb2e2b08ab67fa5dc/data" />
                <Typography sx={textContent}>Halte</Typography>
            </Box>

        </Box>
    )
}
