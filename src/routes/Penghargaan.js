import React, { useState } from 'react'
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
    AppBar,
} from "@material-ui/core";
import {
    Nav,
    NavContainer
} from '../styles/appbar/indexNavbar2';
import { HalamanFooter } from "../../src/components/footer/index";
import { withTranslation } from 'react-i18next';
import {
    BoxTitle,
    BoxAtas,
    BoxContainer,
    BoxPagination,
} from "../routes/routeStyle/PenghargaanStyle";
import Skeleton from '@mui/material/Skeleton';
import {
    Typography,
    // Grid,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    Divider,
    useMediaQuery,
} from '@mui/material';

function Penghargaan(props) {
    const { t } = props;

    document.title = t('penghargaan.penghargaanTab');

    const isMobile = useMediaQuery("(max-width: 1042px)");

    const [loading, setLoading] = useState(false);
    const handleSetLoading = () => {
        setLoading(true);
    };

    const datas = [
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/8%20(1).jpg?v=1690523853370',
            title: t('penghargaan.judul1'),
            desc: t('penghargaan.keterangan1'),
            link: 'https://dcktrp.jakarta.go.id/beranda/v.1/DCKTRP/lihat_berita/437/Pemprov_DKI_Dapat_Bhumandala_Award_2021'
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/uc%20esri@4x-100%20(1)%20(1).jpg?v=1690523853375',
            title: t('penghargaan.judul2'),
            desc: t('penghargaan.keterangan2'),
            link: ''
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/anis_bumandala.jpg?v=1690523853381',
            title: t('penghargaan.judul3'),
            desc: t('penghargaan.keterangan3'),
            link: ''
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/hub-image-card-crop-ig2tpxepe.png?v=1690523853386',
            title: t('penghargaan.judul4'),
            desc: t('penghargaan.keterangan4'),
            link: ''
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/hub-image-card-crop-i2lguttta.png?v=1690523853389',
            title: t('penghargaan.judul5'),
            desc: t('penghargaan.keterangan5'),
            link: ''
        },

    ];

    return (
        <>
            <AppBar elevation={0} color='transparent'>
                <Nav>
                    <NavContainer>
                        <HalamanNavbar />
                    </NavContainer>
                </Nav>
            </AppBar>
            <BoxContainer>
                <BoxAtas>
                    <BoxTitle>{t('penghargaan.judul')}</BoxTitle>
                    <Divider
                        sx={{
                            margin: "0 auto",
                            bgcolor: "#004581",
                            height: 4,
                            width: "75px",
                            borderRadius: "10px",
                            marginBottom: "20px"
                        }} />
                </BoxAtas>
                <BoxPagination>
                    {datas.map((penghargaan, i) => (
                        <CardActionArea key={i} href={penghargaan.link} target='_blank' disableRipple>
                            <Card elevation={0}
                                sx={{
                                    height: "100%",
                                    display: isMobile ? "flex-start" : "flex",
                                    background: "none",
                                    margin: "20px",
                                    border: "1px solid grey"
                                }}>
                                <CardMedia
                                    sx={{
                                        width: "auto",
                                        minWidth: "450px",
                                        maxWidth: "450px",
                                        maxHeight: "450px",
                                        backgroundSize: "100% 100%"
                                    }}>
                                    {penghargaan.imageSrc && (
                                        <>
                                            <Skeleton variant='rectangular' animation="wave" sx={{ height: 600, display: loading ? "none" : "block" }} />
                                            <img onLoad={handleSetLoading}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    backgroundPosition: "center",
                                                    objectFit: "cover",
                                                    objectPosition: "right",
                                                    aspectRatio: "1/1",
                                                    display: loading ? "block" : "none"
                                                }}
                                                alt="" src={penghargaan.imageSrc} />
                                        </>
                                    )}
                                </CardMedia>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Card key={i} elevation={0} square={true} sx={{ display: 'flex', background: "none" }}>
                                        <CardContent>
                                            <Skeleton variant='text' animation="wave" sx={{ width: 600, height: 100, display: loading ? "none" : "block" }} />
                                            <Typography onLoad={handleSetLoading}
                                                sx={{
                                                    fontSize: "2em",
                                                    fontWeight: "bold",
                                                    display: loading ? "block" : "none"
                                                }}>{penghargaan.title}</Typography>
                                            <Skeleton variant='text' animation="wave" sx={{ width: 800, height: 300, display: loading ? "none" : "block" }} />
                                            <Typography onLoad={handleSetLoading}
                                                sx={{
                                                    color: "rgba(0, 0, 0, 0.80)",
                                                    textAlign: "justify",
                                                    lineHeight: "195.3%",
                                                    display: loading ? "block" : "none"
                                                }}
                                                dangerouslySetInnerHTML={{ __html: penghargaan.desc }}></Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Card>
                        </CardActionArea>
                    ))}
                </BoxPagination >
            </BoxContainer >
            <HalamanFooter />
        </>
    );
};

export const RoutePenghargaan = withTranslation()(Penghargaan);