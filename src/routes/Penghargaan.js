import React from 'react'
import Navbar2 from "../../src/components/appBar/Navbar2";
import Footer from "../../src/components/footer/index";
import {
    BoxTitle,
    BoxAtas,
    BoxContainer,
    BoxPagination,
} from "../routes/routeStyle/PenghargaanStyle";
import {
    Typography,
    // Grid,
    Box,
    Card,
    CardMedia,
    CardContent,
    CardActionArea,
    Divider,
    useMediaQuery,
} from '@mui/material';

const Penghargaan = () => {
    const isMobile = useMediaQuery("(max-width: 1042px)");

    const datas = [
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/8%20(1).jpg?v=1690523853370',
            title: 'Inovasi Pemanfaatan Geospasial Bhumandala Award (2021)',
            desc: 'Pemerintah Provinsi DKI Jakarta melalui aplikasi Informasi Rencana Kota (IRK) meraih Inovasi Terbaik (Piala Emas) terbaik dalam inovasi pemanfaatan informasi geospasial pada ajang Bhumandala Award 2021. Aplikasi Informasi Rencana Kota (IRK) merupakan salah satu inovasi pemanfaatan informasi geospasial yang dikembangkan pada portal Jakarta Satu sebagai salah satu upaya peningkatan pelayanan publik berbasis geospasial yang memuat peta dan informasi rencana kota.',
            link: 'https://dcktrp.jakarta.go.id/beranda/v.1/DCKTRP/lihat_berita/437/Pemprov_DKI_Dapat_Bhumandala_Award_2021'
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/uc%20esri@4x-100%20(1)%20(1).jpg?v=1690523853375',
            title: '1st Place - 3D Map Category (2021)',
            desc: 'Jakarta 3D Urban Regeneration - Kemayoran meraih posisi pertama dalam kategori Peta 3D dari Esri User Conference Map Gallery Tahun 2021 berdasarkan penilaian tim Esri UC. <br><br>Jakarta 3D Urban Regeneration - Kemayoran<br><br>Peta 3D Urban Kemayoran Jakarta menunjukkan Urban Design Guideline (UDGL) Kemayoran yang berlokasi di DKI Jakarta. Peta ini memvisualisasikan: Bangunan 3D Eksisting, Perencanaan Bangunan 3D, Peta Dasar 3D, Keteduhan Pohon, Walkability dan Populasi Penduduk.',
            link: ''
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/anis_bumandala.jpg?v=1690523853381',
            title: 'Bhumandala Kanaka Award (2020)',
            desc: 'Merupakan penghargaan terhadap upaya membangun simpul jaringan informasi geospasial kepada Kementerian/ Lembaga dan Pemerintah Daerah yang dinilai terbaik dalam upayanya mempersiapkan diri dan membangun simpul jaringan. <br>Pemerintah Provinsi DKI Jakarta berhasil meraih 2 (dua) penghargaan yaitu Bhumandala Kanaka Simpul Terbaik dan Bhumandala Kencana Geoportal terbaik kategori Provinsi.',
            link: ''
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/hub-image-card-crop-ig2tpxepe.png?v=1690523853386',
            title: 'Geo Innovation Award (2019)',
            desc: 'Merupakan penghargaan untuk mendukung industri 4.0 Geospasial atas inovasi dalam implementasi GIS (Geographic Information System) untuk mendukung kebijakan Satu Peta Indonesia, yang diselenggarakan oleh Esri Indonesia.',
            link: ''
        },
        {
            imageSrc: 'https://jakartasatu.jakarta.go.id/portal//sharing/rest/content/items/c8da6e5126fe488b8ab608594634ddee/resources/hub-image-card-crop-i2lguttta.png?v=1690523853389',
            title: 'Bhumandala Kanaka Award (2018)',
            desc: 'Merupakan penghargaan tingkat Provinsi se-Indonesia dari Badan Informasi Geospasial. Penghargaan dianugerahkan kepada DKI Jakarta karena telah berhasil membangun simpul jaringan dengan baik dan aktif, serta mengikuti sistem referensi geospasial nasional.',
            link: ''
        },

    ];

    return (
        <>
            <Navbar2 />
            <BoxContainer>
                <BoxAtas>
                    <BoxTitle>Penghargaan JakartaSatu</BoxTitle>
                    <Divider
                        sx={{
                            margin: "0 auto",
                            bgcolor: "#004581",
                            height: 4,
                            width: "75px",
                            borderRadius: "10px",
                            marginBottom: "20px"
                        }} />
                </BoxAtas>
                <BoxPagination>
                    {datas.map((penghargaan, i) => (
                        <CardActionArea key={i} href={penghargaan.link} target='_blank' disableRipple>
                            <Card elevation={0}
                                sx={{
                                    height: "100%",
                                    display: isMobile ? "flex-start" : "flex",
                                    background: "none",
                                    margin: "20px",
                                    border: "1px solid grey"
                                }}>
                                <CardMedia
                                    sx={{
                                        width: "auto",
                                        minWidth: "450px",
                                        maxWidth: "450px",
                                        maxHeight: "450px",
                                        backgroundSize: "100% 100%"
                                    }}>
                                    {penghargaan.imageSrc && (
                                        <img
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                backgroundPosition: "center",
                                                objectFit: "cover",
                                                objectPosition: "right",
                                                aspectRatio: "1/1"
                                            }}
                                            alt="" src={penghargaan.imageSrc} />
                                    )}
                                </CardMedia>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Card key={i} elevation={0} square={true} sx={{ display: 'flex', background: "none" }}>
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    fontSize: "2em",
                                                    fontWeight: "bold"
                                                }}>{penghargaan.title}</Typography>
                                            <Typography
                                                sx={{
                                                    color: "rgba(0, 0, 0, 0.80)",
                                                    textAlign: "justify",
                                                    lineHeight: "195.3%"
                                                }}
                                                dangerouslySetInnerHTML={{ __html: penghargaan.desc }}></Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            </Card>
                        </CardActionArea>
                    ))}
                </BoxPagination >
            </BoxContainer >
            <Footer />
        </>
    );
};

export default Penghargaan;