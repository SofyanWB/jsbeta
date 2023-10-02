import { Divider, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from 'react';
import Button from '@material-ui/core/Button';
import { ListItemText } from "@material-ui/core";

export const BoxContainer = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    position: "relative",
    paddingTop: "10%",
    zIndex: "1",
    textAlign: "center",
}));

export const BoxImage1 = styled("img")(({ src }) => ({
    src: `url(${src})`,
    position: "absolute",
    width: "30%",
    height: "60%",
    paddingTop: "50px",
    // marginTop: "80px",
}));

export const BoxImage2 = styled("img")(({ src }) => ({
    src: `url(${src})`,
    position: "absolute",
    width: "40%",
    marginTop: "-80px",
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    zIndex: "10",
    fontSize: "2em",
    textAlign: "center",
    marginBottom: "15px",
    color: "#004581",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const BoxLittleTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",
    margin: "45px",
    color: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const BoxLittleTitle2 = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",
    margin: "20px",
    color: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const Dividers = () => {
    return (
        <div>
            <Divider
                color="#004581"
                sx={{
                    marginLeft: "47%",
                    marginRight: "47%",
                    height: 4,
                    width: "75px",
                    borderRadius: "10px",
                    marginBottom: "20px"
                }} />
        </div>
    )
}

// untuk ember ke file pdf secara online
// const MyPDFViewer = () => {
//     const pdfURL = 'https://www.example.com/path-to-your-pdf.pdf';

//     return (
//       <div>
//         <iframe
//           src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfURL)}&embedded=true`}
//           width="100%"
//           height="500"
//           title="PDF Viewer"
//         />
//         <Button variant="contained" color="primary">
//           Download PDF
//         </Button>
//       </div>
//     );
//   };

// const MyPDFViewer = () => {
//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = pdfFile;
//         link.download = '19_2022_SK_Kadis_Petunjukan_Pelaksanaan_Integrasi.pdf';
//         link.click();
//     };

//     return (
//         <div>
//             {/* Komponen penampil PDF */}
//             <embed src={pdfFile} width="100%" height="800" type="application/pdf" />

//             {/* Tombol Download PDF */}
//             <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleDownload}
//                 style={{
//                     backgroundColor: "green",
//                     margin: "40px",
//                     marginBottom: "100px"
//                 }}>
//                 Download PDF
//             </Button>
//         </div>
//     );
// };

// const MyPDFViewer2 = () => {
//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = pdfFile;
//         link.download = '2021_PERKADIS_2_TAHUN_Tentang_Pedoman_Pengukuran_dan_Pemetaan_di_DKI_Jakarta.pdf';
//         link.click();
//     };

//     return (
//         <div>
//             {/* Komponen penampil PDF */}
//             <embed src={pdfFile2} width="100%" height="800" type="application/pdf" />

//             {/* Tombol Download PDF */}
//             <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleDownload}
//                 style={{
//                     backgroundColor: "green",
//                     margin: "40px",
//                     marginBottom: "100px"
//                 }}>
//                 Download PDF
//             </Button>
//         </div>
//     );
// };


export class App extends React.Component {
    scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <div>
                <Button
                    onClick={() => this.scrollToSection('section1')}
                    variant="contained"
                    color="primary"
                    style={{
                        marginRight: "15px",
                        marginBottom: "100px",
                        width: "25%",
                        backgroundColor: "#1455A3"
                    }}>
                    Petunjuk Pelaksanaan Integrasi Sistem
                </Button>
                <Button
                    onClick={() => this.scrollToSection('section2')}
                    variant="contained"
                    color="primary"
                    style={{
                        marginBottom: "100px",
                        width: "25%",
                        backgroundColor: "#1455A3"
                    }}>
                    Dokumen Pengukuran dan Pemetaan
                </Button>

                <BoxTitle id="section1">Dokumen Petunjuk Pelaksanaan Integrasi Sistem</BoxTitle>
                <BoxLittleTitle2>
                    Lihat Tampilan Penuh, <a href="https://drive.google.com/file/d/1AU04yFobQdspwEL7Ordx62cxxr173GLj/preview" target="_blank" rel="noreferrer">Klik Disini</a>
                </BoxLittleTitle2>

                {/* <MyPDFViewer/> */}

                <BoxTitle id="section2">Dokumen Pengukuran dan Pemetaan</BoxTitle>
                <BoxLittleTitle2>
                    Lihat Tampilan Penuh, <a href="https://drive.google.com/file/d/1mlzkmFjZj6we0L8hX2HOxc1-f-EglcmX/view" target="_blank" rel="noreferrer">Klik Disini</a>
                </BoxLittleTitle2>

                {/* <MyPDFViewer2/> */}

               
            </div>
        );
    }
}

export default App;