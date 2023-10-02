import React, { useState, useEffect } from 'react';
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
    BoxDescription,
    BoxContainer,
    BoxAtas,
    BoxContent,
    BoxCarouselAtas,
    BoxCarouselBawah,
    // BoxLittleTitle,
    // Dividers,
} from "../routes/routeStyle/GaleriStyle";
import {
    Divider,
    Grid,
    Typography,
    // Button,
    Card,
    CardMedia,
    // Box,
    // CardContent,
    // useMediaQuery,
    Skeleton,
    Pagination,
    Stack,
    ImageList,
    ImageListItem,
    ImageListItemBar
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';

// import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '900px',
        // marginTop: "-15vh",
    },
    slideContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    card: {
        width: "500px",
        margin: '0 -100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        width: '100%', // Change width to 100% to fill the card
        height: "auto",
        borderRadius: 0, // Remove border radius
        // marginBottom: 3 0,
        objectFit: 'cover', // Add object-fit property
    },
});

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}


function Galeri(props) {
    const { t } = props;

    document.title = t('galeri.galeriTab');

    const [loading, setLoading] = useState(false);
    const handleSetLoading = () => {
        setLoading(true);
    };

    const classes = useStyles();
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const galeryList = [
        {
            id: 1,
            rows: 2,
            cols: 2,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/21bd4657490b455db3fd64d3675ed155/data',
            title: t('galeri.item1'),
        },
        {
            id: 2,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/fc7b8264a8a84bf2bb9296040faececd/data',
            title: t('galeri.item2'),
        },
        {
            id: 3,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/624bf3fd74d645d299400a1e5cc03ff8/data',
            title: t('galeri.item3'),
        },
        {
            id: 4,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/94af60b427694ad98c4983826db360a8/data',
            title: t('galeri.item4'),
        },
        {
            id: 5,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/78652efb73454bc580caee22a0556d91/data',
            title: t('galeri.item5'),
        },
        {
            id: 6,
            rows: 2,
            cols: 2,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: t('galeri.item6'),
        },
        {
            id: 7,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/8ebc73ec1ac1484da5cd9cd6ce292c6d/data',
            title: t('galeri.item7'),
        },
        {
            id: 8,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/16e0a16bcf6843469749c02052a564d0/data',
            title: t('galeri.item8'),
        },
        {
            id: 9,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/006686e2b32745fea9db49f45a1b86af/data',
            title: t('galeri.item9'),
        },
        {
            id: 10,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/ed3d3a6a17354cf9ac93d0dff98154ed/data',
            title: t('galeri.item10'),
        },
        {
            id: 11,
            rows: 2,
            cols: 2,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/e3bafc3491164b70b469973b7aeb7577/data',
            title: t('galeri.item11'),
        },
    ];

    const firstIndex = 0;

    const [pageSizePagination] = useState(5);
    const [pagePagination, setPagePagination] = useState(1);
    const [data, setData] = useState([galeryList.slice(firstIndex, pageSizePagination)]);

    const handleChange = (event, value) => {
        setPagePagination(value);
        setData(galeryList.slice(firstIndex + pageSizePagination * (value - 1), pageSizePagination * value))
    }

    useEffect(() => {
        setData(galeryList.slice(0, pageSizePagination));

        const interval = setInterval(() => {
            if (!clicked) {
                setHighlightedIndex((prevIndex) => (prevIndex + 1) % galeryList.length);
            } else {
                setClicked(false);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [clicked]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleDragEnd = (event, info) => {
        const swipeThreshold = 100; // Adjust this threshold as needed
        if (info.offset.x > swipeThreshold) {
            showPreviousImage();
        } else if (info.offset.x < -swipeThreshold) {
            showNextImage();
        }
    };

    const showPreviousImage = () => {
        setHighlightedIndex((prevIndex) => (prevIndex - 1 + galeryList.length) % galeryList.length);
    };

    const showNextImage = () => {
        setHighlightedIndex((prevIndex) => (prevIndex + 1) % galeryList.length);
    };

    const handleImageClick = (index) => {
        setHighlightedIndex(index);
        // Set clicked state ketika gambar diklik
        setClicked(true);
    };

    const displayedIndices = [
        (highlightedIndex - 1 + galeryList.length) % galeryList.length,
        highlightedIndex,
        (highlightedIndex + 1) % galeryList.length,
    ];

    const pageSize = 3;
    const pages = Math.ceil(galeryList.length / pageSize);

    const galleryCarousel = [];
    for (let i = 0; i < pages; i++) {
        galleryCarousel.push(galeryList.slice(i * pageSize, (i + 1) * pageSize));
    }

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
                    <BoxTitle>Galeri</BoxTitle>
                    <Divider
                        sx={{
                            margin: "0 auto",
                            bgcolor: "#004581",
                            height: 4,
                            width: "75px",
                            borderRadius: "10px",
                            marginBottom: "8%"
                        }} />
                    {/* <BoxLittleTitle>
                        Lorem ipsum dolor sit amet consectetur. Fermentum ut a urna nibh ac.
                    </BoxLittleTitle> */}
                </BoxAtas>
                <BoxContent>
                    <Grid
                        container
                        spacing={4}
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch">
                        <Grid item xs={12} sm={12} md={3} lg={6} xl={6}>
                            <Skeleton variant='rounded' animation="wave" sx={{ height: 400, display: loading ? "none" : "block" }} />
                            <img onLoad={handleSetLoading}
                                src='https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/21bd4657490b455db3fd64d3675ed155/data'
                                alt=''
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: 'cover',
                                    boxShadow: "0 1px 5px rgb(0 0 0 / 0.2)",
                                    display: loading ? "block" : "none"
                                }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={6} xl={6}>
                            <BoxDescription
                                sx={{
                                    color: "#004581",
                                    fontSize: "31px",
                                    fontWeight: "500",
                                    lineHeight: "160%",
                                    letterSpacing: "0.047px",
                                    textAlign: "left",
                                }}>
                                {t('galeri.itemAtas')}
                            </BoxDescription>
                        </Grid>
                    </Grid>
                </BoxContent>
                <BoxCarouselAtas>
                    <div className={classes.root}>
                        <div className={classes.slideContainer}>
                            <AnimatePresence>
                                {displayedIndices.map((index, i) => {
                                    const image = galeryList[index];
                                    const isHighlighted = index === highlightedIndex;
                                    const rotation = i === 0 ? -15 : i === 2 ? 15 : 0;
                                    const scale = isHighlighted ? 1.2 : 0.8;
                                    const opacity = isHighlighted ? 1 : 0.7;

                                    return (
                                        <motion.div
                                            key={galeryList[index].id}
                                            className={classes.card}
                                            initial={{ opacity: 0, x: 0, rotate: 0 }} // Tambahkan rotate: 0 di sini
                                            animate={{ opacity: 1, x: i === 1 ? 0 : i === 0 ? '-100%' : '100%', rotate: rotation }} // Gunakan nilai rotation di sini
                                            exit={{ opacity: 0, x: 0, rotate: 0 }} // Tambahkan rotate: 0 di sini
                                            transition={{ type: 'tween' }}
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            onDragEnd={handleDragEnd} // New: Handle drag end
                                            style={{
                                                transform: `rotate(${rotation}deg)`,
                                                zIndex: isHighlighted ? 2 : 1,
                                            }}
                                            onClick={() => handleImageClick(index)}>
                                            <motion.div
                                                style={{
                                                    opacity: opacity,
                                                    transform: `scale(${scale})`,
                                                }}
                                                initial={{ scale: 0.8 }}
                                                animate={{ scale: isHighlighted ? 1.2 : 0.8 }}
                                                transition={{ duration: 0.3 }}>
                                                <Card elevation={isHighlighted ? 10 : 1}>
                                                    <Skeleton variant='rounded' animation="wave" sx={{ height: 400, display: loading ? "none" : "block" }} />
                                                    <CardMedia onLoad={handleSetLoading}
                                                        sx={{
                                                            width: '100%',
                                                            display: loading ? "block" : "none"
                                                        }}
                                                        component="img"
                                                        image={galeryList[index].imageSrc}
                                                        alt={`image ${galeryList[index].id}`}
                                                        className={classes.media}
                                                    />
                                                </Card>
                                                <Typography
                                                    variant="h6"
                                                    align="center"
                                                    sx={{
                                                        marginTop: '30px',
                                                        color: "#004581",
                                                    }}>
                                                    {image.title}
                                                </Typography>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    </div>
                </BoxCarouselAtas>
                <BoxCarouselBawah>
                    <ImageList
                        sx={{ mb: 10, width: "100%", overflow: "hidden" }}
                        variant="quilted"
                        cols={4}
                        gap={10}
                        rowHeight={300}>
                        {data.map((item, i) => (
                            <ImageListItem onLoad={handleSetLoading} key={i} cols={item.cols || 1} rows={item.rows || 1}>
                                <Skeleton variant='rounded' animation="wave" sx={{ height: "100%", display: loading ? "none" : "block" }} />
                                <img
                                    {...srcset(item.imageSrc, 500, item.rows, item.cols)}
                                    alt={item.title}
                                    style={{ display: loading ? "block" : "none" }}
                                />
                                <Skeleton variant='text' animation="wave" sx={{ height: 50, display: loading ? "none" : "block" }} />
                                <ImageListItemBar title={item.title}
                                    sx={{
                                        display: loading ? "block" : "none",
                                        height: "auto",

                                        "& .MuiImageListItemBar-title": {
                                            textAlign: "center",
                                            whiteSpace: "pre-wrap"
                                        }
                                    }} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Stack alignItems="center" spacing={2}>
                        <Pagination
                            shape="rounded"
                            count={Math.ceil(galeryList.length / pageSizePagination)}
                            page={pagePagination}
                            onChange={handleChange}
                            sx={{
                                marginBottom: "80px"
                            }} />
                    </Stack>
                </BoxCarouselBawah>

                {/* 
                <BoxCarouselAtas>
                    <Carousel
                        stopAutoPlayOnHover={true}
                        navButtonsAlwaysVisible={true}
                        swipe={true}
                        height={350}
                        fullHeightHover={true}
                        animation={"slide"}
                        IndicatorIcon={false}
                        indicatorProps={{
                            style: {
                                display: "none"
                            }
                        }}
                        navButtonsProps={{
                            style: {
                                position: "absolute",
                                left: "0",
                                backgroundColor: isMobile ? "transparent" : "#1455A3",
                                transform: isMobile ? "translateY(-50%)" : "translateY(-50%)"
                            }
                        }}
                        sx={{
                            marginLeft: "20%",
                            marginRight: "-50%",
                        }}>
                        {galleryCarousel.map((buttonPage, pageIndex) => (
                            <Grid
                                container
                                key={pageIndex}
                                sx={{
                                    paddingLeft: "5%",
                                }}>
                                {buttonPage.map((button, index) => (
                                    <Grid item key={index} xs={3} sm={6} md={isMobile ? 6 : 3}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}>
                                        <Card square={true}
                                            sx={{
                                                width: "90%",
                                                borderRadius: "none",
                                                boxShadow: "none",
                                                textAlign: "center",
                                            }}>
                                            <Skeleton variant='rounded' animation="wave" sx={{ height: 400, display: loading ? "none" : "block" }} />
                                            <CardMedia onLoad={handleSetLoading} sx={{ display: loading ? "block" : "none" }}>
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        width: "100%",
                                                        objectFit: "cover",
                                                        filter: "brightness(0.6)",
                                                        boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)",
                                                    }} src={button.imageSrc} alt='' />
                                            </CardMedia>
                                            <Skeleton variant='rounded' animation="wave" sx={{ width: 200, height: 50, display: loading ? "none" : "block" }} />
                                            <CardContent onLoad={handleSetLoading}
                                                sx={{
                                                    top: "60%",
                                                    width: "21%",
                                                    textAlign: "center",
                                                    position: "absolute",
                                                    zIndex: "10",
                                                    color: "white",
                                                    display: loading ? "block" : "none"
                                                }}>
                                                <Typography>{button.title}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ))}
                    </Carousel>
                </BoxCarouselAtas> 
                */}

            </BoxContainer >
            <HalamanFooter />
        </>
    );
};

export const RouteGaleri = withTranslation()(Galeri);