import React, { useState } from 'react'
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
    AppBar,
} from "@material-ui/core";
import {
    NavFix,
    NavContainerFix
} from '../styles/appbar/index';
import { HalamanFooter } from "../../src/components/footer/index";
import { withTranslation } from 'react-i18next';
import {
    BoxAll,
    BoxTitle1,
    BoxAtas,
    BoxContainer,
    BoxContent,
    BoxLittleTitle,
} from "../routes/routeStyle/PublikasiStyle";
import {
    Divider,
    ThemeProvider,
    Skeleton
} from '@mui/material';
import theme from '../styles/theme';

function Publikasi(props) {
    const { t } = props;

    document.title = t('publikasi.publikasiTab');

    const [loading, setLoading] = useState(false);
    const handleSetLoading = () => {
        setLoading(true);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <AppBar elevation={0} color='transparent'>
                    <NavFix>
                        <NavContainerFix>
                            <HalamanNavbar />
                        </NavContainerFix>
                    </NavFix>
                </AppBar>
                <BoxContainer>
                    <BoxAll>
                        <BoxAtas>
                            <BoxTitle1>{t('publikasi.judul')}</BoxTitle1>
                            <Divider
                                sx={{
                                    margin: "0 auto",
                                    bgcolor: "#004581",
                                    height: 4,
                                    width: "75px",
                                    borderRadius: "10px",
                                    marginBottom: "20px"
                                }} />
                            <BoxLittleTitle>{t('publikasi.keterangan')}</BoxLittleTitle>
                        </BoxAtas>
                        <BoxContent>
                            <BoxTitle1>{t('publikasi.judul1')}</BoxTitle1>
                            <BoxLittleTitle>{t('publikasi.keterangan1')}</BoxLittleTitle>
                            <Skeleton variant='rounded' animation="wave" sx={{ height: 800, display: loading ? "none" : "block" }} />
                            <embed onLoad={handleSetLoading} src='https://docs.google.com/document/d/1AlfNzfN1ZXFNdhxdnTTO9Criv7pYuXj55oDuSwfDnEk/preview'
                                style={{
                                    border: "1px solid",
                                    borderRadius: "30px",
                                    width: "100%",
                                    height: "800px",
                                    display: loading ? "block" : "none"
                                }}
                            />

                            <BoxTitle1 sx={{ marginTop: "5%" }}>{t('publikasi.judul2')}</BoxTitle1>
                            <BoxLittleTitle>{t('publikasi.keterangan2')}</BoxLittleTitle>
                            <Skeleton variant='rounded' animation="wave" sx={{ height: 800, display: loading ? "none" : "block" }} />
                            <embed onLoad={handleSetLoading} src='https://drive.google.com/file/d/11W2eNVomg5f9_mXyiEPVfDpveZf5hdv-/preview'
                                style={{
                                    border: "1px solid",
                                    borderRadius: "30px",
                                    width: "100%",
                                    height: "800px",
                                    display: loading ? "block" : "none"
                                }}
                            />
                        </BoxContent>
                    </BoxAll>
                </BoxContainer>
                <HalamanFooter />
            </ThemeProvider>
        </>
    );
};

export const RoutePublikasi = withTranslation()(Publikasi);