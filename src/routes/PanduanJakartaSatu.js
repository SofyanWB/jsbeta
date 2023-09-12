import React, { useState } from 'react'
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
    AppBar,
} from "@material-ui/core";
import {
    Nav,
    NavContainer
} from '../styles/appbar/indexNavbar2';
import {
    Card,
    CardActionArea,
    CardMedia,
    Box,
    Grid,
    ThemeProvider,
    Divider,
    Skeleton
} from '@mui/material';
import { HalamanFooter } from "../../src/components/footer/index";
import { withTranslation } from 'react-i18next';
import {
    BoxTitle,
    BoxTitle2,
    BoxContainer,
    BoxBukuPanduan,
    BoxTutorialdanPanduanGIS,
    BoxTutorialdanPanduanIRK,
    BoxLittleTitle,
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

function PanduanJakartaSatu(props) {
    const { t } = props;

    document.title = t('panduanJakartaSatu.panduanTab');

    const [loading, setLoading] = useState(false);
    const handleSetLoading = () => {
        setLoading(true);
    };

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
                    <BoxBukuPanduan>
                        <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item xs={12} sm={7} md={7} lg={7} xl={3}>
                                <BoxTitle variant="h3">{t('panduanJakartaSatu.judul1')}</BoxTitle>
                                <BoxLittleTitle>
                                    {t('panduanJakartaSatu.keterangan1')}
                                </BoxLittleTitle>
                                {/* <ImageUnduhBukuPanduan src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/cbbf39437984447091f5e1608fc56d70/data" /> */}
                            </Grid>
                            <Grid item xs={12} sm={5} md={5} lg={5} xl={3}>
                                <CardActionArea href='https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/7591855abaed4533adfc52696778b2d4/data' target='_blank' disableRipple>
                                    <CardMedia>
                                        <Skeleton variant='rounded' animation="wave" sx={{ height: 600, display: loading ? "none" : "block" }} />
                                        <img onLoad={handleSetLoading} src='https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c1d9c2e2b2344ae29d297f77bdda94f5/resources/cover%20manual%20book.png?v=1688716463345' alt=''
                                            style={{
                                                margin: "0 auto",
                                                width: "75%",
                                                borderRadius: "30px",
                                                boxShadow: "0 0px 50px rgb(0 0 0 / 0.1)",
                                                display: loading ? "block" : "none"
                                            }} />
                                    </CardMedia>
                                </CardActionArea>
                            </Grid>
                        </Grid>
                    </BoxBukuPanduan>
                    <BoxTutorialdanPanduanGIS>
                        <BoxTitle variant="h3">{t('panduanJakartaSatu.judul2')}</BoxTitle>
                        <Divider
                            sx={{
                                margin: "0 auto",
                                bgcolor: "#004581",
                                height: 4,
                                width: "75px",
                                borderRadius: "10px",
                                marginBottom: "20px"
                            }} />
                        <BoxLittleTitle>{t('panduanJakartaSatu.keterangan2')}</BoxLittleTitle>

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
                                <BoxTitle2 variant="h3">{t('panduanJakartaSatu.judul3')}</BoxTitle2>
                                <embed width="100%" height="365px" title="6" src="https://www.youtube.com/embed/pSr4_NUD1_Y" />
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
                                                <Skeleton variant='rounded' animation="wave" sx={{ height: 200, display: loading ? "none" : "block" }} />
                                                <CardMedia onLoad={handleSetLoading} sx={{ border: "1px solid grey", }}>
                                                    {irk.url && (
                                                        <img
                                                            style={{
                                                                maxWidth: "100%",
                                                                height: "auto",
                                                                backgroundColor: "grey",
                                                                display: loading ? "block" : "none"
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
                <HalamanFooter />
            </ThemeProvider>
        </>
    );
};

export const RoutePanduanJakartaSatu = withTranslation()(PanduanJakartaSatu);