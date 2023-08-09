import React from 'react'
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";
import {
    BoxTitle1,
    BoxAtas,
    BoxContainer,
    BoxContent,
    BoxLittleTitle,
} from "../routes/routeStyle/PublikasiStyle";
import {
    Divider,
    ThemeProvider
} from '@mui/material';
import theme from '../styles/theme';

const Publikasi = () => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar2 />
                <BoxContainer>
                    <BoxAtas>
                        <BoxTitle1>Publikasi</BoxTitle1>
                        <Divider
                            sx={{
                                margin: "0 auto",
                                bgcolor: "#004581",
                                height: 4,
                                width: "75px",
                                borderRadius: "10px",
                                marginBottom: "20px"
                            }} />
                        <BoxLittleTitle>Informasi riset jakartasatu</BoxLittleTitle>
                    </BoxAtas>
                    <BoxContent>
                        <BoxTitle1>Pemetaan Pohon</BoxTitle1>
                        <BoxLittleTitle>Metode Deep Learning</BoxLittleTitle>
                        <embed src='https://docs.google.com/document/d/1AlfNzfN1ZXFNdhxdnTTO9Criv7pYuXj55oDuSwfDnEk/preview'
                            style={{
                                border: "1px solid",
                                borderRadius: "30px",
                                width: "100%",
                                height: "800px"
                            }}
                        />

                        <BoxTitle1 sx={{ marginTop: "5%" }}>Perhitungan Lahan Terbangun</BoxTitle1>
                        <BoxLittleTitle>Metode DDLB</BoxLittleTitle>
                        <embed src='https://drive.google.com/file/d/11W2eNVomg5f9_mXyiEPVfDpveZf5hdv-/preview'
                            style={{
                                border: "1px solid",
                                borderRadius: "30px",
                                width: "100%",
                                height: "800px"
                            }}
                        />
                    </BoxContent>
                </BoxContainer>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Publikasi;