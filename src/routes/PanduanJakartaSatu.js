import React from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    // Typography,
    Box,
    Grid,
    ThemeProvider,
    Divider,
} from '@mui/material';
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";
import {
    BoxTitle,
    BoxTitle2,
    BoxContainer,
    BoxBukuPanduan,
    BoxTutorialdanPanduanGIS,
    BoxTutorialdanPanduanIRK,
    BoxLittleTitle,
    // ImageUnduhBukuPanduan,
} from "../routes/routeStyle/PanduanJakartaSatuStyle";
import theme from '../styles/theme';

const images = [
    {
        url: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c1d9c2e2b2344ae29d297f77bdda94f5/resources/igtv@2x.png?v=1688716463433',
        link: 'https://www.instagram.com/tv/COw-SiOn2rJ/?utm_source=ig_web_copy_link'
    },
    {
        url: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c1d9c2e2b2344ae29d297f77bdda94f5/resources/Login.png?v=1688716463434',
        link: 'https://www.instagram.com/p/COc2j9kscdS/?utm_source=ig_web_copy_link'
    },
    {
        url: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c1d9c2e2b2344ae29d297f77bdda94f5/resources/Digitasi@2x.png?v=1688716463437',
        link: 'https://www.instagram.com/p/COeo3sjsMdR/?utm_source=ig_web_copy_link'
    },
    {
        url: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c1d9c2e2b2344ae29d297f77bdda94f5/resources/Tutorial%20IRK%20v2-04.png?v=1688716463439',
        link: 'https://www.instagram.com/p/COhJC9usjCz/?utm_source=ig_web_copy_link'
    },
    {
        url: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c1d9c2e2b2344ae29d297f77bdda94f5/resources/Tutorial%20IRK%20v2-05-05.png?v=1688716463441',
        link: 'https://www.instagram.com/p/COkmtBBM3C_/?utm_source=ig_web_copy_link'
    },
    {
        url: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c1d9c2e2b2344ae29d297f77bdda94f5/resources/riwayat%20data@2x.png?v=1688716463443',
        link: 'https://www.instagram.com/p/COrl-RUHC_R/?utm_source=ig_web_copy_link'
    },
];

const PanduanJakartaSatu = () => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar2 />
                <BoxContainer>
                    <BoxBukuPanduan>
                        <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item xs={12} sm={7} md={7} lg={7} xl={3}>
                                <BoxTitle variant="h3">Buku Panduan Jakarta Satu</BoxTitle>
                                <BoxLittleTitle>
                                    Informasi tentang penggunaan website dan beserta aplikasi Jakarta Satu. Tekan gambar disamping untuk membaca secara online
                                </BoxLittleTitle>
                                {/* <ImageUnduhBukuPanduan src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/cbbf39437984447091f5e1608fc56d70/data" /> */}
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
                                <CardActionArea href='https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/7591855abaed4533adfc52696778b2d4/data' target='_blank' disableRipple>
                                    <CardMedia>
                                        <img src='https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c1d9c2e2b2344ae29d297f77bdda94f5/resources/cover%20manual%20book.png?v=1688716463345' alt=''
                                            style={{
                                                width: "75%",
                                                borderRadius: "30px",
                                                boxShadow: "0 0px 50px rgb(0 0 0 / 0.1)",
                                            }} />
                                    </CardMedia>
                                </CardActionArea>
                            </Grid>
                        </Grid>
                    </BoxBukuPanduan>
                    <BoxTutorialdanPanduanGIS>
                        <BoxTitle variant="h3">Tutorial dan Panduan GIS</BoxTitle>
                        <Divider
                            sx={{
                                margin: "0 auto",
                                bgcolor: "#004581",
                                height: 4,
                                width: "75px",
                                borderRadius: "10px",
                                marginBottom: "20px"
                            }} />
                        <BoxLittleTitle>Informasi tentang penggunaan aplikasi GIS</BoxLittleTitle>

                        <Grid container
                            spacing={2}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="scretch"
                            sx={{ mb: 12 }}>
                            <Grid item xs={4}>
                                <embed width="100%" height="150%" title="1" src="https://www.youtube.com/embed/FzTXg8CHSz8" />
                            </Grid>
                            <Grid item xs={4}>
                                <embed width="100%" height="150%" title="2" src="https://www.youtube.com/embed/PucIzxFGeT4" />
                            </Grid>
                            <Grid item xs={4}>
                                <embed width="100%" height="150%" title="3" src="https://www.youtube.com/embed/1BorXWowekk" />
                            </Grid>
                        </Grid>
                        <Grid container
                            spacing={2}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="scretch">
                            <Grid item xs={6}>
                                <embed width="100%" height="225%" title="4" src="https://www.youtube.com/embed/PucIzxFGeT4" />
                            </Grid>
                            <Grid item xs={6}>
                                <embed width="100%" height="225%" title="5" src="https://www.youtube.com/embed/1BorXWowekk" />
                            </Grid>
                        </Grid>
                    </BoxTutorialdanPanduanGIS>
                    <BoxTutorialdanPanduanIRK>
                        <Grid container
                            spacing={4}
                            direction="row"
                            alignItems="center">
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <BoxTitle2 variant="h3">Tutorial dan Panduan Informasi Rencana Kota</BoxTitle2>
                                <embed width= "100%" height="365px" title="6" src="https://www.youtube.com/embed/pSr4_NUD1_Y" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateRows: { md: '1fr 1fr' },
                                        gridTemplateColumns: { md: '1fr 1fr 1fr' },
                                        gap: 1,
                                    }}>
                                    {images.map((irk, i) => (
                                        <Card key={i} elevation={0} square={true}>
                                            <CardActionArea href={irk.link} target='_blank' disableRipple>
                                                <CardMedia sx={{ border: "1px solid grey", }}>
                                                    {irk.url && (
                                                        <img
                                                            style={{
                                                                maxWidth: "100%",
                                                                height: "auto",
                                                                backgroundColor: "grey",
                                                            }}
                                                            alt="" src={irk.url} />
                                                    )}
                                                </CardMedia>
                                            </CardActionArea>
                                        </Card>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </BoxTutorialdanPanduanIRK>
                </BoxContainer >
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default PanduanJakartaSatu;