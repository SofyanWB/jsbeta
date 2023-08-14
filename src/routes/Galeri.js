import React, { useState, useEffect } from 'react';
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";
import {
    // BoxImage1,
    // BoxImage2,
    BoxTitle,
    BoxDescription,
    BoxContainer,
    BoxAtas,
    BoxContent,
    BoxCarouselAtas,
    BoxCarouselBawah,
    BoxLittleTitle,
    // Dividers,
} from "../routes/routeStyle/GaleriStyle";
import {
    Divider,
    Grid,
    Typography,
    // Button,
    Card,
    CardMedia,
    Box,
    CardContent,
    useMediaQuery
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';

import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        marginTop: "-15vh",
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

const Galeri = () => {
    const isMobile = useMediaQuery("(max-width: 1042px)");
    const classes = useStyles();
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const galeryList = [
        {
            id: 1,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d5c0791226374e12adec4740fa72d7ea/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 2,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/26c8737fc78e4778a20d71e70c9bf8f1/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 3,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d77f17c634fd4d05a90a2749359f2d61/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 4,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 5,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d77f17c634fd4d05a90a2749359f2d61/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 6,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 7,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d77f17c634fd4d05a90a2749359f2d61/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 8,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 9,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d77f17c634fd4d05a90a2749359f2d61/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            id: 10,
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!clicked) {
                setHighlightedIndex((prevIndex) => (prevIndex + 1) % galeryList.length);
            } else {
                setClicked(false);
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [clicked]);

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
            <Navbar2 />
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
                            marginBottom: "20px"
                        }} />
                    <BoxLittleTitle>
                        Lorem ipsum dolor sit amet consectetur. Fermentum ut a urna nibh ac.
                    </BoxLittleTitle>
                </BoxAtas>
                <BoxContent>
                    <Grid
                        container
                        spacing={4}
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch">
                        <Grid item xs={12} sm={12} md={3} lg={6} xl={6}>
                            <img
                                src='https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d5c0791226374e12adec4740fa72d7ea/data'
                                alt=''
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: 'cover',
                                    boxShadow: "0 1px 5px rgb(0 0 0 / 0.2)",
                                }} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={6} xl={6}>
                            <BoxDescription
                                sx={{
                                    color: "#004581",
                                    fontSize: "31px",
                                    fontWeight: "550",
                                    lineHeight: "160%",
                                    letterSpacing: "0.047px",
                                    textAlign: "left",
                                }}>
                                Lorem ipsum dolor sit amet consectetur. Ligula proin elit sit id. Porta vulputate pretium suspendisse rhoncus ipsum arcu tortor.
                            </BoxDescription>
                        </Grid>
                    </Grid>
                </BoxContent>
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
                                            <CardMedia>
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        width: "100%",
                                                        objectFit: "cover",
                                                        filter: "brightness(0.6)",
                                                        boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)",
                                                    }} src={button.imageSrc} alt='' />
                                            </CardMedia>
                                            <CardContent
                                                sx={{
                                                    top: "60%",
                                                    width: "21%",
                                                    textAlign: "center",
                                                    position: "absolute",
                                                    zIndex: "10",
                                                    color: "white"
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
                <BoxCarouselBawah>
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
                                                    <CardMedia
                                                        sx={{ width: '100%' }}
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
                </BoxCarouselBawah>
            </BoxContainer >
            <Footer />
        </>
    );
};

export default Galeri;