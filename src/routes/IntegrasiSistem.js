import React from 'react';
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";
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

const IntegrasiSistem = () => {
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
                <Navbar2 />
                <BoxImage1 src="/images/menuPeta/Rectangle_1.png" />
                <BoxImage2 src="/images/menuPeta/bentuk.png" />
                <BoxContainer>
                    <BoxAtas>
                        <BoxTitle>Integrasi Sistem</BoxTitle>
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
                            Petunjuk pelaksanaan pemutakhiran dan pengintegrasikan sistem peta dan data dalam sistem informasi geospasial Jakarta Satu ini disusun
                            dalam rangka memfasilitasi integrasi spasial dari semua perangkat daerah di lingkungan Pemerintah Provinsi DKI Jakarta ataupun instansi
                            lainnya agar dapat mewujudkan integrasi informasi gespasial di wilayah DKI Jakarta dalam wadah Jakarta Satu untuk meningkatkan kinerja
                            penataan dan pembangunan kota.
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
                            Petunjuk Pelaksanaan Integrasi Sistem
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
                            Dokumen Pengukuran dan Pemetaan
                        </Button>

                        <BoxTitle id="section1">Dokumen Petunjuk Pelaksanaan Integrasi Sistem</BoxTitle>
                        <BoxLittleTitle>
                            Lihat Tampilan Penuh, <a href="https://drive.google.com/file/d/1AU04yFobQdspwEL7Ordx62cxxr173GLj/preview" target="_blank" rel="noreferrer">Klik Disini</a>
                        </BoxLittleTitle>

                        <MyPDFViewer />

                        <BoxTitle id="section2">Dokumen Pengukuran dan Pemetaan</BoxTitle>
                        <BoxLittleTitle>
                            Lihat Tampilan Penuh, <a href="https://drive.google.com/file/d/1mlzkmFjZj6we0L8hX2HOxc1-f-EglcmX/view" target="_blank" rel="noreferrer">Klik Disini</a>
                        </BoxLittleTitle>

                        <MyPDFViewer2 />
                    </BoxContent>
                </BoxContainer>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default IntegrasiSistem;