import React, { useState, useEffect } from 'react'
import axios from "axios";
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
    BoxLittleTitle,
    BoxTitlePagination
} from "../routes/routeStyle/SimpulJaringanStyle";
import {
    OutlinedInput,
    Pagination,
    Stack,
    Grid,
    Box,
    Card,
    CardMedia,
    CardActionArea,
    Divider,
    useMediaQuery,
    Skeleton
} from '@mui/material';

function SimpulJaringanAPI(props) {
    const { t } = props;

    document.title = t('simpulJaringan.simpulJaringanTab');

    const [loading, setLoading] = useState(false);
    const handleSetLoading = () => {
        setLoading(true);
    };

    const [simpulJaringanList, setSimpulJaringanList] = useState([]);

    useEffect(() => {
        const getSimpulJaringanList = async () => {
            const response = await axios.get("https://jakartasatu.jakarta.go.id/apimobile/app/web/simpul-jaringan");
            setSimpulJaringanList(response.data.data);
        };

        getSimpulJaringanList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const firstIndex = 0;

    const isMobile = useMediaQuery("(max-width: 800px)");
    const pageSize = isMobile ? 8 : 16;
    const [page, setPage] = useState(1);
    const [data, setData] = useState([simpulJaringanList.slice(firstIndex, pageSize)]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const filteredData = simpulJaringanList
            .filter((item) =>
                item.judul.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .slice(firstIndex + pageSize * (page - 1), pageSize * page);

        setData(filteredData);
    }, [searchTerm, page, pageSize, simpulJaringanList]);

    const handleChange = (event, value) => {
        setPage(value);
    }

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        const filteredData = simpulJaringanList.filter((item) =>
            item.judul.toLowerCase().includes(value.toLowerCase())
        );

        setPage(1);
        setData(filteredData.slice(firstIndex, firstIndex + pageSize));
    };

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
                    <BoxTitle>{t('simpulJaringan.judul')}</BoxTitle>
                    <Divider
                        sx={{
                            margin: "0 auto",
                            bgcolor: "#004581",
                            height: 4,
                            width: "75px",
                            borderRadius: "10px",
                            marginBottom: "20px"
                        }} />
                    <BoxLittleTitle>
                        {t('simpulJaringan.keterangan')}
                    </BoxLittleTitle>
                    <OutlinedInput
                        placeholder={t('simpulJaringan.cariData')}
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={{
                            width: isMobile ? "87%" : "50%",
                            paddingLeft: "1%",
                            borderRadius: "40px",
                            background: "white",
                            boxShadow: "0 1px 5px rgb(0 0 0 / 0.2)",
                        }}
                    />
                </BoxAtas>
                <BoxPagination>
                    <Grid container
                        sx={{
                            marginTop: '20px',
                            marginBottom: '20px',
                        }}>
                        {data.map((simpulJaringan, i) => (
                            <Grid key={i} item xs={6} sm={3} md={3} lg={3} xl={3}>
                                <Card key={simpulJaringan.id} elevation={0} square={true} sx={{ background: "none", height: "100%" }}>
                                    <Skeleton variant='rounded' animation="wave"
                                        sx={{
                                            margin: "20px 20px 0 20px",
                                            height: isMobile ? 100 : 180,
                                            display: loading ? "none" : "block"
                                        }} />
                                    <Skeleton variant='text' animation="wave"
                                        sx={{
                                            margin: "0 20px 0 20px",
                                            height: isMobile ? 30 : 50,
                                            display: loading ? "none" : "block"
                                        }} />
                                    <CardActionArea href={simpulJaringan.link} target='_blank' disableRipple
                                        sx={{
                                            padding: loading ? 3 : 0,
                                            borderRadius: "30px",
                                            height: "100%"
                                        }}>
                                        <CardMedia onLoad={handleSetLoading}
                                            component='div'
                                            sx={{
                                                justifyContent: "center",
                                                display: loading ? "flex" : "none"
                                            }}>
                                            {simpulJaringan.icon && (
                                                <Box style={{ height: "100px", alignItems: 'center', }}>
                                                    <img
                                                        style={{
                                                            // width: "100%",
                                                            height: isMobile ? "70%" : "100px",
                                                            objectFit: 'cover'
                                                        }}
                                                        alt="" src={simpulJaringan.icon} />
                                                </Box>
                                            )}
                                        </CardMedia>
                                        <BoxTitlePagination onLoad={handleSetLoading}
                                            sx={{
                                                paddingTop: isMobile ? "0" : "10%",
                                                display: loading ? "block" : "none"
                                            }}>{simpulJaringan.judul}</BoxTitlePagination>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {loading ?
                        (
                            <Stack alignItems="center" spacing={2}>
                                <Pagination
                                    shape="rounded"
                                    count={Math.ceil(simpulJaringanList.length / pageSize)}
                                    page={page}
                                    onChange={handleChange}
                                    sx={{
                                        margin: "80px 0 80px 0"
                                    }} />
                            </Stack>
                        ) : null
                    }
                </BoxPagination>
            </BoxContainer>
            <HalamanFooter />
        </>
    );
};

export const RouteSimpulJaringanAPI = withTranslation()(SimpulJaringanAPI);