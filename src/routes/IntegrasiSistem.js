import React from 'react';
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
    Divider,
    Button,
    ThemeProvider,
} from '@mui/material';
import {
    BoxImage1,
    BoxImage2,
    BoxAtas,
    BoxContent,
    BoxTitle,
    BoxContainer,
    BoxLittleTitle,
    // BoxLittleTitle2,
} from "../routes/routeStyle/IntegrasiSistemStyle";

import pdfFile from './pdf/19_2022_SK_Kadis_Petunjukan_Pelaksanaan_Integrasi.pdf';
import pdfFile2 from './pdf/2021_PERKADIS_2_TAHUN_Tentang_Pedoman_Pengukuran_dan_Pemetaan_di_DKI_Jakarta.pdf';
import theme from '../styles/theme';

function IntegrasiSistem(props) {
    const { t } = props;

    document.title = t('integrasiSistem.integrasiSistemTab');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    const MyPDFViewer2 = () => {
        const handleDownload = () => {
            const link = document.createElement('a');
            link.href = pdfFile;
            link.download = '2021_PERKADIS_2_TAHUN_Tentang_Pedoman_Pengukuran_dan_Pemetaan_di_DKI_Jakarta.pdf';
            link.click();
        };

        return (
            <div>
                {/* Komponen penampil PDF */}
                <embed src={pdfFile2} width="100%" height="800" type="application/pdf" />

                {/* Tombol Download PDF */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDownload}
                    style={{
                        backgroundColor: "green",
                        margin: "40px",
                        marginBottom: "100px"
                    }}>
                    Download PDF
                </Button>
            </div>
        );
    };

    const MyPDFViewer = () => {
        const handleDownload = () => {
            const link = document.createElement('a');
            link.href = pdfFile;
            link.download = '19_2022_SK_Kadis_Petunjukan_Pelaksanaan_Integrasi.pdf';
            link.click();
        };

        return (
            <div>
                {/* Komponen penampil PDF */}
                <embed src={pdfFile} width="100%" height="800" type="application/pdf" />

                {/* Tombol Download PDF */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDownload}
                    style={{
                        backgroundColor: "green",
                        margin: "40px",
                        marginBottom: "100px"
                    }}>
                    Download PDF
                </Button>
            </div>
        );
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
                <BoxImage1 src="/images/menuPeta/Rectangle_1.png" />
                <BoxImage2 src="/images/menuPeta/bentuk.png" />
                <BoxContainer>
                    <BoxAtas>
                        <BoxTitle>{t('integrasiSistem.judul')}</BoxTitle>
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
                            {t('integrasiSistem.keterangan')}
                        </BoxLittleTitle>
                    </BoxAtas>
                    <BoxContent>
                        <Button
                            onClick={() => scrollToSection('section1')}
                            variant="contained"
                            color="primary"
                            style={{
                                marginRight: "15px",
                                marginBottom: "100px",
                                width: "25%",
                                backgroundColor: "#1455A3",
                            }}>
                            {t('integrasiSistem.button1')}
                        </Button>
                        <Button
                            onClick={() => scrollToSection('section2')}
                            variant="contained"
                            color="primary"
                            style={{
                                marginBottom: "100px",
                                width: "25%",
                                backgroundColor: "#1455A3",
                            }}>
                            {t('integrasiSistem.button2')}
                        </Button>

                        <BoxTitle id="section1">{t('integrasiSistem.judul1')}</BoxTitle>
                        <BoxLittleTitle>
                            {t('integrasiSistem.lihatTampilanPenuh')} <a href="https://drive.google.com/file/d/1AU04yFobQdspwEL7Ordx62cxxr173GLj/preview" target="_blank" rel="noreferrer">{t('integrasiSistem.klikDisini')}</a>
                        </BoxLittleTitle>

                        <MyPDFViewer />

                        <BoxTitle id="section2">{t('integrasiSistem.judul2')}</BoxTitle>
                        <BoxLittleTitle>
                            {t('integrasiSistem.lihatTampilanPenuh')} <a href="https://drive.google.com/file/d/1mlzkmFjZj6we0L8hX2HOxc1-f-EglcmX/view" target="_blank" rel="noreferrer">{t('integrasiSistem.klikDisini')}</a>
                        </BoxLittleTitle>

                        <MyPDFViewer2 />
                    </BoxContent>
                </BoxContainer>
                <HalamanFooter />
            </ThemeProvider>
        </>
    );
};

export const RouteIntegrasiSistem = withTranslation()(IntegrasiSistem);