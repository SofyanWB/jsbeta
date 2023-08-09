import React from 'react'
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

import Carousel from "react-material-ui-carousel";
// import Slider from "react-slick";

const Galeri = () => {
    const isMobile = useMediaQuery("(max-width: 1042px)");

    const galeryList = [
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d5c0791226374e12adec4740fa72d7ea/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/26c8737fc78e4778a20d71e70c9bf8f1/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d77f17c634fd4d05a90a2749359f2d61/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d77f17c634fd4d05a90a2749359f2d61/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d77f17c634fd4d05a90a2749359f2d61/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d77f17c634fd4d05a90a2749359f2d61/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/12074130d0464454bc0545c059f2c0e0/data',
            title: 'Lorem ipsum dolor sit amet consectetur. Cras sit posuere vitae mi. Euismod integer eu nisi enim ut.',
        },
    ]

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
                    <Carousel
                        stopAutoPlayOnHover={true}
                        navButtonsAlwaysVisible={true}
                        swipe={true}
                        animation={"slide"}
                        IndicatorIcon={false}
                        indicatorProps={{
                            style: {
                                display: "none"
                            }
                        }}
                        navButtonsProps={{
                            style: {
                                display: "none"
                            }
                        }}>
                        {galleryCarousel.map((buttonPage, pageIndex) => (
                            <Grid
                                key={pageIndex}
                                container
                                spacing={2}
                                direction="row"
                                justifyContent="center"
                                alignItems="stretch">
                                {buttonPage.map((button, index) => (
                                    <Grid item key={index} xs={4} sm={4} md={4}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}>
                                        <Card square={true}
                                            sx={{
                                                boxShadow: "none",
                                            }}>
                                            <CardMedia>
                                                <Box
                                                    component="img"
                                                    sx={{
                                                        width: "100%",
                                                        objectFit: "cover",
                                                        boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.15)",
                                                    }} src={button.imageSrc} alt='' />
                                            </CardMedia>
                                            <CardContent
                                                sx={{
                                                    textAlign: "center",
                                                    color: "#003577",
                                                    fontWeight: "700",
                                                }}>
                                                <Typography>{button.title}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        ))}
                    </Carousel>
                </BoxCarouselBawah>
            </BoxContainer >
            <Footer />
        </>
    );
};

export default Galeri;