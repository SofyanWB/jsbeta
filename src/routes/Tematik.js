import React, { useEffect, useState } from 'react';
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
    CardActions,
    CardActionArea,
    OutlinedInput,
    Box,
    Grid,
    Divider,
    useMediaQuery,
    Skeleton,
    Typography,

} from '@mui/material';

function Tematik(props) {
    const { t } = props;

    document.title = t('tematik.tematikTab');

    const [isLoading, setIsLoading] = useState(true);

    const isMobile = useMediaQuery("(max-width: 1024px)");
    const isiPadAir = useMediaQuery("(max-height: 820px)");

    const [tematikList, setTematikList] = useState([]);
    const [data, setData] = useState([]);

    const firstIndex = 0;
    const pageSize = isMobile ? 8 : 16;
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [cardState, setCardState] = useState([]);

    useEffect(() => {
        const getTematikList = async () => {
            const response = await axios.get("https://jakartasatu.jakarta.go.id/apimobile/app/v4/maps");
            setTematikList(response.data.data[0].maps); // eslint-disable-next-line
            const initialData = response.data.data[0].maps.slice(firstIndex, pageSize);
            setCardState(
                response.data["data"][0]["maps"].map((card) => ({
                    id: card.id,
                    showActions: false,
                }))
            );
            setIsLoading(false);
        };
        getTematikList();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event, value) => {
        setPage(value);
    }

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        setPage(1);
    };

    useEffect(() => {
        const filteredData = tematikList
            .filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .slice(firstIndex + pageSize * (page - 1), pageSize * page);

        setData(filteredData);
    }, [searchTerm, page, pageSize, tematikList]);

    // Animasi Card
    const handleMouseEnter = (id) => {
        setCardState(prevState => (
            prevState.map(card => (
                card.id === id ? { ...card, showActions: true } : card
            ))
        ));
    };

    const handleMouseLeave = (id) => {
        setCardState(prevState => (
            prevState.map(card => (
                card.id === id ? { ...card, showActions: false } : card
            ))
        ));
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
                    <BoxTitle>{t('tematik.judul')}</BoxTitle>
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
                        {t('tematik.keterangan')}
                    </BoxLittleTitle>
                    <OutlinedInput
                        placeholder={t('tematik.cariData')}
                        value={searchTerm}
                        onChange={handleInputChange}
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
                    {isMobile || isiPadAir ?
                        (
                            <>
                                {isLoading ?
                                    (
                                        <Grid container spacing={isMobile ? 2 : 8} sx={{ marginTop: '20px', marginBottom: '50px' }}>
                                            {Array.from({ length: pageSize }).map((_, i) => (
                                                <Grid key={i} item xs={6} sm={3} md={3} lg={3} xl={3}>
                                                    <Skeleton variant="rounded" animation="wave" height={isMobile ? 100 : 180} />
                                                    <Skeleton variant="text" animation="wave" height={50} />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    ) : (
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
                                    )
                                }
                            </>
                        ) : (
                            <>
                                {isLoading ?
                                    (
                                        <Grid container spacing={isMobile ? 2 : 8} sx={{ marginTop: '20px', marginBottom: '50px' }}>
                                            {Array.from({ length: pageSize }).map((_, i) => (
                                                <Grid key={i} item xs={6} sm={3} md={3} lg={3} xl={3}>
                                                    <Skeleton variant="rounded" animation="wave" height={isMobile ? 100 : 180} />
                                                    <Skeleton variant="text" animation="wave" height={50} />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    ) : (
                                        <Grid container
                                            spacing={isMobile ? 2 : 8}
                                            sx={{
                                                marginTop: '20px',
                                                marginBottom: '50px',
                                            }}>
                                            {data.map((data) => (
                                                <Grid item xs={6} sm={3} md={3} lg={3} xl={3} key={data.id}>
                                                    <Card
                                                        sx={{
                                                            background: "none",
                                                            height: "100%",
                                                            borderRadius: "30px",
                                                            boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.10)",
                                                        }}
                                                        onMouseEnter={() => handleMouseEnter(data.id)}
                                                        onMouseLeave={() => handleMouseLeave(data.id)}>
                                                        <CardActionArea href={data.webview} target='_blank' disableRipple
                                                            sx={{
                                                                borderRadius: "30px",
                                                                height: "100%"
                                                            }}>
                                                            <CardMedia
                                                                component='div'
                                                                sx={{
                                                                    display: "flex",
                                                                    justifyContent: "center"
                                                                }}>
                                                                {data.icon && (
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
                                                                            alt="" src={data.icon} />
                                                                    </Box>
                                                                )}
                                                            </CardMedia>
                                                            <CardContent>
                                                                <BoxTitlePagination
                                                                    style={{
                                                                        visibility: cardState.find((card) => card.id === data.id).showActions ? "hidden" : "visible",
                                                                    }}>
                                                                    {data.name}
                                                                </BoxTitlePagination>
                                                            </CardContent>
                                                            <CardActions
                                                                style={{
                                                                    display: cardState.find((card) => card.id === data.id).showActions ? "grid" : "none",
                                                                    position: "absolute",
                                                                    width: "100%",
                                                                    height: "98px",
                                                                    bottom: "0px",
                                                                    background: "rgba(0, 69, 129, 0.6)",
                                                                    boxShadow: "0px 15px 50px rgba(0, 0, 0, 0.1)",
                                                                }}
                                                            >
                                                                <Typography
                                                                    style={{
                                                                        fontSize: "17px",
                                                                        lineHeight: "20px",
                                                                        letterSpacing: "-0,3px",
                                                                        color: "#fff",
                                                                        textAlign: "center",
                                                                        fontWeight: "bold",
                                                                    }}
                                                                >
                                                                    {data.name}
                                                                </Typography>
                                                                <Typography
                                                                    style={{
                                                                        fontSize: "13px",
                                                                        lineHeight: "15px",
                                                                        letterSpacing: "-0,3px",
                                                                        color: "#fff",
                                                                        textAlign: "center",
                                                                    }}
                                                                >
                                                                    Peta {data.name} di DKI Jakarta
                                                                </Typography>
                                                            </CardActions>
                                                        </CardActionArea>
                                                    </Card>

                                                </Grid>
                                            ))}
                                        </Grid>
                                    )
                                }
                            </>
                        )
                    }
                    {isLoading ? null : (
                        <Stack alignItems="center" spacing={2}>
                            <Pagination
                                shape="rounded"
                                count={Math.ceil(tematikList.length / pageSize)}
                                page={page}
                                onChange={handleChange}
                                sx={{
                                    margin: "80px 0 80px 0"
                                }} />
                        </Stack>
                    )}
                </BoxPagination >
            </BoxContainer >
            <HalamanFooter />
        </>
    );
};

export const RouteTematik = withTranslation()(Tematik);