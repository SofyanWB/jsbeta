import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import {
    Typography,
    Box,
    Card,
    CardContent,
    CardMedia,
    CardActionArea,
    ThemeProvider,
    Divider
} from '@mui/material';
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";

import axios from "axios";

import theme from '../styles/theme';

import { BoxContainer } from './routeStyle/DetailBeritaStyle';

const DetailBerita = () => {
    const { id } = useParams();

    const [newsLatest, setnewsLatest] = useState([]);
    const getLatestList = async () => {
        const response = await axios.get(
            "https://jakartasatu.jakarta.go.id/apimobile/app/v4/news/" + id
        );
        const newsLatest = response.data.data;
        setnewsLatest(newsLatest);
    };

    const [newsList, setNewsList] = useState([]);
    const getNewsList = async () => {
        const response = await axios.get(
            "https://jakartasatu.jakarta.go.id/apimobile/app/v4/news/"
        );
        const beritaTerbaru = response.data.data.items;
        const beritaTerbaruBaru = beritaTerbaru.slice(0, 3);

        setNewsList(beritaTerbaruBaru);
    };
    useEffect(() => {
        getNewsList();
        getLatestList(); // eslint-disable-next-line
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar2 />
                <BoxContainer>
                    <Grid container
                        spacing={10}
                        justifyContent="space-between">
                        <Grid item xs={12} sm={12} md={12} lg={9} xl={12}>
                            <Box sx={{ textAlign: "left", marginTop: "-40px" }}>
                                <Typography sx={{
                                    fontSize: "1em",
                                    color: "rgba(0, 0, 0, 0.40)",
                                    mb: 2
                                }}>{newsLatest.created_at}</Typography>
                                <Typography sx={{
                                    fontSize: "2em",
                                    color: "rgba(0, 0, 0, 0.80)",
                                }}>{newsLatest.title}</Typography>
                            </Box>
                            <CardMedia>
                                <img
                                    style={{
                                        marginTop: "30px",
                                        marginBottom: "30px",
                                        width: "100%",
                                        boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "grey",
                                    }} src={newsLatest.source_image} alt='' />
                            </CardMedia>
                            <Typography
                                sx={{
                                    fontSize: "1.1em",
                                    color: "rgba(0, 0, 0, 0.80)",
                                    textAlign: "justify",
                                    lineHeight: "195.3%"
                                }}
                                dangerouslySetInnerHTML={{ __html: newsLatest.content }}></Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
                            <Box
                                sx={{
                                    padding: "20px",
                                    margin: "-20px",
                                    background: "rgb(243, 246, 249)",
                                    borderRadius: "30px",
                                }}>
                                <Typography sx={{
                                    fontSize: "2em",
                                    color: "rgba(0, 0, 0, 0.80)",
                                    mb: 3.2
                                }}>Berita Terkait</Typography>
                                <Divider
                                    sx={{
                                        margin: "0 auto",
                                        bgcolor: "#004581",
                                        height: 4,
                                        width: "75px",
                                        borderRadius: "10px",
                                        marginTop: "-20px",
                                        marginBottom: "20px"
                                    }} />
                                <Grid
                                    sx={{
                                        display: "grid",
                                        gap: 4,
                                    }}>
                                    {newsList.map((news) => (
                                        <Card key={news.id} elevation={0} square={true} sx={{ background: "none" }}>
                                            <CardActionArea sx={{ padding: "10px", borderRadius: "10px" }}>
                                                <CardMedia sx={{ mb: -1 }}>
                                                    {news.source_image && (
                                                        <img
                                                            style={{
                                                                maxWidth: "100%",
                                                                height: "auto",
                                                                backgroundColor: "grey",
                                                            }}
                                                            alt="" src={news.source_image} />
                                                    )}
                                                </CardMedia>
                                                <CardContent
                                                    sx={{
                                                        textAlign: "left",
                                                        marginLeft: "-14px",
                                                        marginRight: "-14px",
                                                    }}>
                                                    <Typography sx={{
                                                        fontSize: "1.4em",
                                                        lineHeight: "185.5%",
                                                        mb: 1
                                                    }}>{news.title}</Typography>
                                                    <Typography sx={{
                                                        color: "rgba(0, 0, 0, 0.70)",
                                                        fontSize: "1.1em",
                                                        mb: 1
                                                    }}>{news.created_at}</Typography>
                                                    <Typography sx={{
                                                        fontSize: "1.1em",
                                                        textAlign: "justify",
                                                        lineHeight: "195.3%",
                                                    }}>{news.short_content}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </BoxContainer>
            </ThemeProvider>
            <Footer />
        </>
    );
};

export default DetailBerita;