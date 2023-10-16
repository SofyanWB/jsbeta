import React from "react";
import { Box, Divider, Skeleton, Typography } from "@mui/material"
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

import { withTranslation } from "react-i18next";
import { useState } from "react";

function Kotak(props) {
    const { t } = props;

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <Box
            sx={kotakGambar}>
            <Box
                sx={imageContent}>

                <Skeleton
                    variant="rectangular"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 30, width: "4.5vw", height: "4.5vw", margin: "0.5vw 1vw" }}
                    animation="wave"
                />

                <BoxImage2
                    src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/aa79a1f3d6f54b0c81432e593ad999e2/data"
                    style={{ display: imageLoaded ? "block" : "none" }}
                    onLoad={handleImageLoad} />

                <Skeleton
                    variant="text" width="70%" height="2vw" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
                />

                <Typography
                    sx={textContent}
                    style={{ display: imageLoaded ? "block" : "none" }}>
                    {t('beranda.analisis.kotak.apotek')}
                </Typography>
            </Box>
            <Box>
                <Divider
                    sx={divider} />
            </Box>
            <Box
                sx={imageContent}>

                <Skeleton
                    variant="rectangular"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 30, width: "4.5vw", height: "4.5vw", margin: "0.5vw 1vw" }}
                    animation="wave"
                />

                <BoxImage2
                    src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/11e9b1d81d5640a5a66f40e4ede0fad8/data"
                    style={{ display: imageLoaded ? "block" : "none" }}
                    onLoad={handleImageLoad} />

                <Skeleton
                    variant="text" width="70%" height="2vw" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
                />

                <Typography
                    sx={textContent}
                    style={{ display: imageLoaded ? "block" : "none" }}>
                    {t('beranda.analisis.kotak.batasAdministrasi')}
                </Typography>
            </Box>
            <Box>
                <Divider
                    sx={divider} />
            </Box>
            <Box
                sx={imageContent}>

                <Skeleton
                    variant="rectangular"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 30, width: "4.5vw", height: "4.5vw", margin: "0.5vw 1vw" }}
                    animation="wave"
                />
                <BoxImage2
                    src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/aee41da5af8848aaaf8a10c7035d2504/data"
                    style={{ display: imageLoaded ? "block" : "none" }}
                    onLoad={handleImageLoad} />

                <Skeleton
                    variant="text" width="70%" height="2vw" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
                />

                <Typography
                    sx={textContent}
                    style={{ display: imageLoaded ? "block" : "none" }}>
                    {t('beranda.analisis.kotak.transjakarta')}
                </Typography>
            </Box>
            <Box>
                <Divider
                    sx={divider} />
            </Box>
            <Box
                sx={imageContent}>

                <Skeleton
                    variant="rectangular"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 30, width: "4.5vw", height: "4.5vw", margin: "0.5vw 1vw" }}
                    animation="wave"
                />

                <BoxImage2
                    src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/f3008d96383c4beeb2e2b08ab67fa5dc/data"
                    style={{ display: imageLoaded ? "block" : "none" }}
                    onLoad={handleImageLoad} />

                <Skeleton
                    variant="text" width="70%" height="2vw" animation="wave"
                    style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
                />

                <Typography
                    sx={textContent}
                    style={{ display: imageLoaded ? "block" : "none" }}>
                    {t('beranda.analisis.kotak.halte')}
                </Typography>
            </Box>
        </Box>
    )
}

export const HalamanKotak = withTranslation()(Kotak);
