import React, { useEffect, useState } from 'react'
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
    AppBar,
} from "@material-ui/core";
import {
    Nav,
    NavContainer
} from '../styles/appbar/index';
import '../styles/appbar/NavbarCSS.css';
import { HalamanFooter } from "../../src/components/footer/index";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';

import { Link as RouterLink } from 'react-router-dom';
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { withTranslation } from 'react-i18next';

import {
    BoxContainer,
    BoxSemuaBerita,
    BoxTitle,
    BoxCarousel,

    CardContentSectionAtas
} from "../routes/routeStyle/BeritaStyle";

import { CardActionArea, Divider, ThemeProvider } from "@mui/material";
import theme from '../styles/theme';

function Berita(props) {
    const { t } = props;

    document.title = t('berita.beritaTab');

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 400) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const isMobile = useMediaQuery("(max-width: 1042px)");

    const [loading, setLoading] = useState(false);
    const handleSetLoading = () => {
        setLoading(true);
    };

    const [newsLatest, setnewsLatest] = useState([]);

    const [newsList, setNewsList] = useState([]);
    const getNewsList = async () => {
        const response = await axios.get(
            "https://jakartasatu.jakarta.go.id/apimobile/app/v4/news/"
        );
        // setNewsList(response.data.data.items);
        // console.log(response.data.data.items[0]);

        const beritaTerbaru = response.data.data.items;
        // const coba1 = beritaTerbaru.slice(1, beritaTerbaru.length);

        // setNewsList(coba1);
        setNewsList(beritaTerbaru);

        setnewsLatest(beritaTerbaru[beritaTerbaru.length - 1]);
    };
    useEffect(() => {
        getNewsList();
    }, []);

    const firstIndex = 0;

    const [pageSize] = useState(6);
    const [page, setPage] = useState(1);
    const [, setData] = useState([newsList.slice(firstIndex, pageSize)]);

    useEffect(() => {
        setData(newsList.slice(0, pageSize));
    }, [pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event, value) => {
        setPage(value);
        setData(newsList.slice(firstIndex + pageSize * (value - 1), pageSize * value))
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar className="navbar" elevation={0} color='transparent' >
                    <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                        <NavContainer>
                            <HalamanNavbar />
                        </NavContainer>
                    </Nav>
                </AppBar>
                <Skeleton variant='rectangular' animation="wave" sx={{ height: 650, display: loading ? "none" : "block" }} />
                <Card onLoad={handleSetLoading}
                    square={true}
                    sx={{
                        width: "100%",
                        borderRadius: "none",
                        boxShadow: "none",
                        textAlign: "center",
                        display: loading ? "block" : "none"
                    }}>
                    <CardContent sx={CardContentSectionAtas}>
                        <CardActionArea component={RouterLink} to={`/detail-berita/${newsLatest.id}`}
                            sx={{
                                margin: "-20px",
                                padding: "20px",
                                borderRadius: "18px",
                            }}>
                            <Typography sx={{
                                fontSize: "14px",
                                lineHeight: "185.5%",
                                letterSpacing: "0.056px",
                                mb: 2
                            }}>{newsLatest.created_at}</Typography>
                            <Typography sx={{
                                fontSize: "25px",
                                fontWeight: 500,
                                lineHeight: "157.8%",
                                mb: 2
                            }}>{newsLatest.title}</Typography>
                            <Typography sx={{
                                textAlign: "justify",
                                fontSize: "16px",
                                lineHeight: "195.3%",
                                letterSpacing: "0.024px",
                                mb: 2
                            }}>{newsLatest.short_content}...&nbsp;
                                <span
                                    style={{
                                        color: "#2F80ED",
                                        textDecorationLine: "underline",
                                    }}>
                                    baca selengkapnya
                                </span>
                            </Typography>
                        </CardActionArea>
                    </CardContent>
                    <img style={{
                        width: "100%",
                        height: "650px",
                        objectFit: "cover",
                        filter: "brightness(0.4)",
                        backgroundColor: "grey",
                    }} src={newsLatest.source_image} alt='' />
                </Card>
                <BoxContainer>
                    <Paper elevation={0}
                        sx={{
                            margin: "0 auto",
                            position: "relative",
                            display: 'grid',
                            alignItems: 'center',
                            width: 250,
                            height: 70,
                            borderRadius: "40px",
                            boxShadow: "0 1px 15px rgb(0 0 0 / 0.2)",
                        }}>
                        <BoxTitle>Highlight</BoxTitle>
                    </Paper>
                    <BoxCarousel>
                        {
                            loading ? (
                                <Carousel
                                    stopAutoPlayOnHover={true}
                                    navButtonsAlwaysVisible={true}
                                    swipe={true}
                                    animation={"slide"}
                                    height={400}
                                    fullHeightHover={true}
                                    IndicatorIcon={false}
                                    indicatorProps={{
                                        style: {
                                            display: "none"
                                        }
                                    }}
                                    navButtonsProps={{
                                        style: {
                                            marginLeft: isMobile ? "0" : "",
                                            marginRight: isMobile ? "-25px" : "",
                                            width: isMobile ? "50%" : "67%",
                                            height: isMobile ? "10%" : "auto",
                                            backgroundColor: isMobile ? "transparent" : "#1455A3",
                                            color: isMobile ? "black" : "white",
                                            transform: isMobile ? "translateY(-50%)" : "translateY(-50%)"
                                        }
                                    }}>
                                    {newsList.map((step, index) => (
                                        <Grid key={index}
                                            container
                                            spacing={2}
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="stretch"
                                            sx={{
                                                paddingLeft: "7%",
                                                paddingRight: "7%",

                                                [theme.breakpoints.down(680)]: {
                                                    paddingLeft: "1%",
                                                    paddingRight: "1%",
                                                },
                                                [theme.breakpoints.down(600)]: {
                                                    paddingLeft: "7%",
                                                    paddingRight: "7%",
                                                },
                                            }}>
                                            <Grid item xs={12} sm={6}>
                                                <CardMedia component='div'>
                                                    <Box
                                                        component="img"
                                                        sx={{
                                                            // borderRadius: "18px",
                                                            maxWidth: 650,
                                                            width: '100%',
                                                            backgroundColor: "grey",
                                                            boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)"
                                                        }}
                                                        src={step.source_image} />
                                                </CardMedia>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6} lg={6} xl={12}>
                                                <CardActionArea component={RouterLink} to={`/detail-berita/${step.id}`}
                                                    sx={{
                                                        padding: "20px",
                                                        borderRadius: "18px",

                                                        [theme.breakpoints.down(600)]: {
                                                            padding: "0",
                                                            borderRadius: "0",
                                                        },
                                                    }}>
                                                    <CardContent
                                                        sx={{
                                                            textAlign: "left",
                                                            marginLeft: "-14px",
                                                            marginRight: "-14px",
                                                            marginTop: "-17px",
                                                        }}>
                                                        <Typography sx={{
                                                            color: "rgba(0, 0, 0, 0.70)",
                                                            fontSize: "14px",
                                                            lineHeight: "185.5%",
                                                            letterSpacing: "0.056px",
                                                            mb: 1,

                                                            [theme.breakpoints.down(1280)]: {
                                                                fontSize: "1.2vw",
                                                            },
                                                            [theme.breakpoints.down(600)]: {
                                                                fontSize: "2vw",
                                                            },
                                                            [theme.breakpoints.down(550)]: {
                                                                fontSize: "2.5vw",
                                                            },
                                                            [theme.breakpoints.down(450)]: {
                                                                fontSize: "3vw",
                                                            },
                                                            [theme.breakpoints.down(350)]: {
                                                                fontSize: "3.5vw",
                                                            },
                                                        }}>{step.created_at}</Typography>
                                                        <Typography sx={{
                                                            color: "#003577",
                                                            fontSize: "26px",
                                                            fontWeight: 500,
                                                            lineHeight: "160%",
                                                            letterSpacing: "0.039px",
                                                            mb: 1,

                                                            [theme.breakpoints.down(1280)]: {
                                                                fontSize: "1.9vw",
                                                            },
                                                            [theme.breakpoints.down(600)]: {
                                                                fontSize: "3vw",
                                                            },
                                                            [theme.breakpoints.down(550)]: {
                                                                fontSize: "3.5vw",
                                                            },
                                                            [theme.breakpoints.down(450)]: {
                                                                fontSize: "4vw",
                                                            },
                                                            [theme.breakpoints.down(350)]: {
                                                                fontSize: "4.5vw",
                                                            },
                                                        }}>{step.title}</Typography>
                                                        <Typography sx={{
                                                            fontSize: "16px",
                                                            lineHeight: "195.3%",
                                                            letterSpacing: "0.024px",

                                                            [theme.breakpoints.down(1280)]: {
                                                                fontSize: "1.2vw",
                                                            },
                                                            [theme.breakpoints.down(600)]: {
                                                                fontSize: "2vw",
                                                            },
                                                            [theme.breakpoints.down(550)]: {
                                                                fontSize: "2.5vw",
                                                            },
                                                            [theme.breakpoints.down(450)]: {
                                                                fontSize: "3vw",
                                                            },
                                                            [theme.breakpoints.down(350)]: {
                                                                fontSize: "3.5vw",
                                                            },
                                                        }}>{step.short_content}...&nbsp;
                                                            <span
                                                                style={{
                                                                    color: "#2F80ED",
                                                                    textDecorationLine: "underline",
                                                                }}>
                                                                baca selengkapnya
                                                            </span>
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Carousel>
                            ) : (
                                <Grid container
                                    spacing={4}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="stretch"
                                    sx={{
                                        mb: 9,
                                        paddingLeft: "6%",
                                        paddingRight: "6%"
                                    }}>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Skeleton variant='rounded' animation="wave" sx={{ height: 400 }} />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Skeleton variant='text' animation="wave" sx={{ width: "25%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 50 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 50 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 30 }} />
                                    </Grid>
                                </Grid>
                            )
                        }
                    </BoxCarousel>
                    <BoxSemuaBerita>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item xs={12}>
                                <BoxTitle>
                                    Semua
                                </BoxTitle>
                                <Divider
                                    sx={{
                                        backgroundColor: "#003577",
                                        margin: "auto",
                                        width: "50px",
                                        height: "2px",
                                    }} />

                                {/* <Paper elevation={0}
                                    sx={{
                                        margin: "0 auto",
                                        position: "relative",
                                        display: 'grid',
                                        alignItems: 'center',
                                        width: 250,
                                        height: 70,
                                        borderRadius: "40px",
                                        boxShadow: "0 1px 15px rgb(0 0 0 / 0.2)",
                                    }}>
                                    <BoxTitle>
                                        Semua
                                    </BoxTitle>
                                </Paper> */}
                            </Grid>
                        </Grid>
                        {
                            loading ? (
                                <Box
                                    sx={{
                                        // padding: "20px",
                                        // margin: "-20px",
                                        // background: "rgb(243, 246, 249)",
                                        // borderRadius: "30px",
                                        mt: 6,
                                        display: 'grid',
                                        gridTemplateRows: { md: '1fr 1fr' },
                                        gridTemplateColumns: { md: '1fr 1fr 1fr 1fr' },

                                        "& :first-of-type": {
                                            gridRow: "span 2",
                                            gridColumn: "span 2",
                                            backgroundSize: "auto",
                                        }
                                    }}>
                                    {newsList.map((news, i) => (
                                        <Card key={i} elevation={0} square={true} sx={{ background: "none" }}>
                                            <CardActionArea component={RouterLink} to={`/detail-berita/${news.id}`}
                                                sx={{
                                                    height: "100%",
                                                    padding: "20px",
                                                    borderRadius: "36px",

                                                }}>
                                                <CardMedia component='div'>
                                                    {news.source_image && (
                                                        <img
                                                            style={{
                                                                // borderRadius: "18px",
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
                                                        fontSize: "16px",
                                                        fontWeight: 500,
                                                        lineHeight: "171.3%",
                                                        letterSpacing: "0.024px",
                                                        mb: 1
                                                    }}>{news.title}</Typography>
                                                    <Typography sx={{
                                                        color: "rgba(0, 0, 0, 0.70)",
                                                        fontSize: "12px",
                                                        fontWeight: "400",
                                                        mb: 1
                                                    }}>{news.created_at}</Typography>
                                                    <Typography sx={{
                                                        fontSize: "12px",
                                                        textAlign: "justify",
                                                        lineHeight: "185.5%",
                                                        letterSpacing: "0.048px"
                                                    }}>{news.short_content}...&nbsp;
                                                        <span
                                                            style={{
                                                                color: "#2F80ED",
                                                                textDecorationLine: "underline",
                                                            }}>
                                                            baca selengkapnya
                                                        </span>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    ))}
                                </Box>
                            ) : (
                                <Grid container
                                    spacing={2}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="scretch"
                                    sx={{ mt: 8 }}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                        <Skeleton variant='rounded' animation="wave" sx={{ width: "100%", height: 360 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 35 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "20%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                        <Skeleton variant='rounded' animation="wave" sx={{ width: "100%", height: 180 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 35 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "20%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='rounded' animation="wave" sx={{ width: "100%", height: 180 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 35 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "20%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
                                        <Skeleton variant='rounded' animation="wave" sx={{ width: "100%", height: 180 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 35 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "20%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='rounded' animation="wave" sx={{ width: "100%", height: 180 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "80%", height: 35 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "20%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                        <Skeleton variant='text' animation="wave" sx={{ width: "100%", height: 30 }} />
                                    </Grid>
                                </Grid>
                            )
                        }
                    </BoxSemuaBerita>
                    <Stack alignItems="center" spacing={2}>
                        <Pagination
                            className="pagination"
                            shape="rounded"
                            count={Math.ceil(newsList.length / pageSize)}
                            page={page}
                            onChange={handleChange}
                            sx={{
                                marginBottom: "80px"
                            }} />
                    </Stack>
                </BoxContainer>
            </ThemeProvider >
            <HalamanFooter />
        </>
    );
};

export const RouteBerita = withTranslation()(Berita);