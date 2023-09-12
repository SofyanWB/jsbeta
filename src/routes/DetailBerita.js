import React, { useEffect, useState } from 'react'
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
    AppBar,
} from "@material-ui/core";
import {
    Nav,
    NavContainer
} from '../styles/appbar/indexNavbar2';
import { HalamanFooter } from "../../src/components/footer/index";
import { useParams } from 'react-router-dom';
import {
    Typography,
    Box,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    ThemeProvider,
    Divider,
    Grid,
    Skeleton,
    useMediaQuery
} from '@mui/material';

import axios from "axios";
import { Link as RouterLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import theme from '../styles/theme';

import { BoxContainer } from './routeStyle/DetailBeritaStyle';

function DetailBerita(props) {
    const { t } = props;

    document.title = t('berita.detailBeritaTab');

    const isMobile = useMediaQuery("(max-width: 960px)");

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const handleSetLoading = () => {
        setLoading(true);
    };

    const [newsLatest, setnewsLatest] = useState([]);
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const getLatestList = async () => {
            const response = await axios.get(
                "https://jakartasatu.jakarta.go.id/apimobile/app/v4/news/" + id
            );
            const newsLatest = response.data.data;
            setnewsLatest(newsLatest);
        };
        getLatestList();
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const getNewsList = async () => {
            const response = await axios.get(
                "https://jakartasatu.jakarta.go.id/apimobile/app/v4/news/"
            );
            const beritaTerbaru = response.data.data.items;
            const beritaTerbaruBaru = beritaTerbaru.slice(0, 3);

            setNewsList(beritaTerbaruBaru);
        };
        getNewsList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar elevation={0} color='transparent'>
                    <Nav>
                        <NavContainer>
                            <HalamanNavbar />
                        </NavContainer>
                    </Nav>
                </AppBar>
                <BoxContainer>
                    <Grid container
                        spacing={isMobile ? 5 : 1}
                        justifyContent="space-between"
                        onLoad={handleSetLoading}>
                        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
                            <Box sx={{ textAlign: "left", marginTop: "-40px" }}>
                                <Skeleton variant='text' animation="wave" sx={{ width: 200, height: 30, display: loading ? "none" : "block" }} />
                                <Typography sx={{
                                    fontSize: "14px",
                                    color: "rgba(0, 0, 0, 0.40)",
                                    mb: 2,
                                    display: loading ? "block" : "none"
                                }}>{newsLatest.created_at}</Typography>
                                <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 50, display: loading ? "none" : "block" }} />
                                <Typography sx={{
                                    fontSize: "30px",
                                    fontWeight: 500,
                                    color: "rgba(0, 0, 0, 0.80)",
                                    display: loading ? "block" : "none"
                                }}>{newsLatest.title}</Typography>
                            </Box>
                            <CardMedia>
                                <Skeleton variant='rounded' animation="wave" sx={{ height: 500, display: loading ? "none" : "block" }} />
                                <img
                                    style={{
                                        marginTop: "30px",
                                        marginBottom: "30px",
                                        width: "100%",
                                        boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "grey",
                                        display: loading ? "block" : "none"
                                    }} src={newsLatest.source_image} alt='' />
                            </CardMedia>
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30, display: loading ? "none" : "block" }} />
                            <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30, display: loading ? "none" : "block" }} />
                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    color: "rgba(0, 0, 0, 0.80)",
                                    textAlign: "justify",
                                    lineHeight: "195.3%",
                                    display: loading ? "block" : "none"
                                }}
                                dangerouslySetInnerHTML={{ __html: newsLatest.content }}></Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={1} lg={1} xl={3}>
                            <Divider orientation={isMobile ? "horizontal" : "vertical"} variant="middle"
                                sx={{
                                    margin: "auto"
                                }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} xl={3}>
                            <Box>
                                {
                                    loading ? (
                                        <Grid
                                            sx={{
                                                display: "Grid",
                                                objectFit: "cover",
                                                gridAutoFlow: isMobile ? "column" : "",
                                                gridAutoColumns: isMobile ? "1fr" : "",
                                                gap: isMobile ? 1 : 4,
                                            }}>
                                            {newsList.map((news) => (
                                                <Card key={news.id} elevation={0} square={true} sx={{ background: "none" }}>
                                                    <CardActionArea onClick={handleClick} component={RouterLink} to={`/detail-berita/${news.id}`} disableRipple>
                                                        <CardMedia sx={{ mb: -1 }}>
                                                            {news.source_image && (
                                                                <img
                                                                    style={{
                                                                        maxWidth: "100%",
                                                                        height: "auto",
                                                                        backgroundColor: "grey"
                                                                    }}
                                                                    alt="" src={news.source_image} />
                                                            )}
                                                        </CardMedia>
                                                        <CardContent
                                                            sx={{
                                                                textAlign: "left",
                                                                marginLeft: "-14px",
                                                                marginRight: "-14px"
                                                            }}>
                                                            <Typography sx={{
                                                                fontSize: isMobile ? "12px" : "14px",
                                                                lineHeight: "185.5%",
                                                                fontWeight: 500,
                                                                mb: 1
                                                            }}>{news.title}</Typography>
                                                            <Typography sx={{
                                                                color: "rgba(0, 0, 0, 0.70)",
                                                                fontSize: isMobile ? "10px" : "12px",
                                                                mb: 1
                                                            }}>{news.created_at}</Typography>
                                                            <Typography sx={{
                                                                fontSize: isMobile ? "10px" : "12px",
                                                                textAlign: "justify",
                                                                hyphens: "auto",
                                                                webkitHyphens: "auto",
                                                                lineHeight: "195.3%"
                                                            }}>{news.short_content}</Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            ))}
                                        </Grid>
                                    ) : (
                                        <Grid container
                                            spacing={4}
                                            direction="column"
                                            justifyContent="center"
                                            alignItems="stretch">
                                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                                <Skeleton variant='rounded' animation="wave" sx={{ height: 180 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "25%", height: 30 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 50 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30 }} />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                                <Skeleton variant='rounded' animation="wave" sx={{ height: 180 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "25%", height: 30 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 50 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30 }} />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                                <Skeleton variant='rounded' animation="wave" sx={{ height: 180 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "25%", height: 30 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 50 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30 }} />
                                                <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30 }} />
                                            </Grid>
                                        </Grid>
                                    )
                                }
                            </Box>
                        </Grid>
                    </Grid>
                </BoxContainer>
            </ThemeProvider>
            <HalamanFooter />
        </>
    );
};

export const RouteDetailBerita = withTranslation()(DetailBerita);