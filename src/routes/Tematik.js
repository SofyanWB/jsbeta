import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";
import {
    BoxTitle,
    BoxContainer,
    BoxAtas,
    BoxPagination,
    BoxLittleTitle,
    BoxTitlePagination,
    BoxdescriptionPagination
} from "../routes/routeStyle/TematikStyle";
import {
    Pagination,
    Stack,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    OutlinedInput,
    Box,
    Grid,
    Divider,
    useMediaQuery
} from '@mui/material';

const Tematik = () => {
    const isMobile = useMediaQuery("(max-width: 1042px)");

    const [tematikList, setTematikList] = useState([]);
    const getTematikList = async () => {
        const response = await axios.get("https://jakartasatu.jakarta.go.id/apimobile/app/v4/maps");
        setTematikList(response.data.data[0].maps);
    };

    useEffect(() => {
        getTematikList();
    }, []);

    const firstIndex = 0;

    const pageSize = isMobile ? 8 : 16;
    const [page, setPage] = useState(1);
    const [data, setData] = useState([tematikList.slice(firstIndex, pageSize)]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setData(tematikList.slice(0, pageSize));
    }, [pageSize]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event, value) => {
        setPage(value);
        setData(tematikList.slice(firstIndex + pageSize * (value - 1), pageSize * value))
    }

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        const filteredData = tematikList.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        setPage(1);
        setData(filteredData.slice(firstIndex, firstIndex + pageSize));
    };

    // Animasi Card
    // const handleMouseEnter = (id) => {
    //     setCardState(
    //         cardState.map((card) =>
    //             card.id === id ? { ...card, showActions: true } : card
    //         )
    //     );
    // };

    // const handleMouseLeave = (id) => {
    //     setCardState(
    //         cardState.map((card) =>
    //             card.id === id ? { ...card, showActions: false } : card
    //         )
    //     );
    // };

    return (
        <>
            <Navbar2 />
            <BoxContainer>
                <BoxAtas>
                    <BoxTitle>Peta Tematik</BoxTitle>
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
                        Temukan Seluruh Informasi Spasial Sesuai Kata Kunci
                    </BoxLittleTitle>
                    <OutlinedInput
                        placeholder="cari tematik berdasarkan nama"
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
                        spacing={isMobile ? 2 : 8}
                        sx={{
                            marginTop: '20px',
                            marginBottom: '50px',
                        }}>
                        {data.map((tematik, i) => (
                            <Grid key={i} item xs={6} sm={3} md={3} lg={3} xl={3}>
                                <Card key={tematik.id} elevation={0} square={true}
                                    sx={{
                                        background: "none",
                                        height: "100%",
                                        borderRadius: "30px",
                                        boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.10)",
                                    }}>
                                    <CardActionArea href={tematik.webview} target='_blank' disableRipple
                                        sx={{
                                            p: 1,
                                            borderRadius: "30px",
                                            height: "100%"
                                        }}>
                                        <CardMedia
                                            component='div'
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                            }}>
                                            {tematik.icon && (
                                                <Box
                                                    style={{
                                                        height: isMobile ? "100px" : "150px",
                                                        alignItems: 'center'
                                                    }}>
                                                    <img
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: 'cover'
                                                        }}
                                                        alt="" src={tematik.icon} />
                                                </Box>
                                            )}
                                        </CardMedia>
                                        <CardContent>
                                            <BoxTitlePagination>{tematik.name}</BoxTitlePagination>
                                            <BoxdescriptionPagination>Peta {tematik.description} di DKI Jakarta</BoxdescriptionPagination>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Stack alignItems="center" spacing={2}>
                        <Pagination
                            shape="rounded"
                            count={Math.ceil(tematikList.length / pageSize)}
                            page={page}
                            onChange={handleChange}
                            sx={{
                                marginBottom: "80px"
                            }} />
                    </Stack>
                </BoxPagination>
            </BoxContainer>
            <Footer />
        </>
    );
};

export default Tematik;