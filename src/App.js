import { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import useMediaQuery from '@mui/material/useMediaQuery';
import Skeleton from '@mui/material/Skeleton';
import Slide from '@mui/material/Slide';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import { ExtrasScrollTop } from "./components/ScrollTop";
// import { ExtrasKritikSaran } from "./components/KritikSaran";
import { Route, Routes, HashRouter } from 'react-router-dom';
// import Interaktif from '../src/routes/Interaktif';
import { RoutePetaInteraktif } from '../src/routes/Interaktif/PetaInteraktif';
import { RouteTematik } from '../src/routes/Tematik';
import { RouteSimpulJaringanAPI } from '../src/routes/SimpulJaringanAPI';
import IRK from '../src/routes/IRK';
import { RouteUnduh } from '../src/routes/Unduh';
import Beranda from '../src/routes/Beranda';
import Peta3DBasemaps from '../src/routes/Peta3DBasemaps';
import Peta3DTransitOriented from '../src/routes/Peta3DTransitOriented';
import { RouteBerita } from '../src/routes/Berita';
import { RouteDetailBerita } from '../src/routes/DetailBerita';
import { RoutePanduanJakartaSatu } from '../src/routes/PanduanJakartaSatu';
import { RouteGaleri } from '../src/routes/Galeri';
import { RoutePenghargaan } from '../src/routes/Penghargaan';
import { RouteDashboard } from "./routes/Dashboard";
import { RouteDataAPI } from "./routes/DataAPI";
import { RouteIntegrasiSistem } from "./routes/IntegrasiSistem";
import { RoutePublikasi } from "./routes/Publikasi";
import LandasanHukum from "./routes/LandasanHukum";
// import Footer from './components/footer/index';

import SmartRDTR from "./routes/SmartRDTR";

import DataTenagaKesehatan from "./routes/PetaKerja/DataTenagaKesehatan";
import DigitasiAsetKIBA from "./routes/PetaKerja/DigitasiAsetKIBA";
import Perda1Tahun2014 from "./routes/PetaKerja/Perda1Tahun2014";
import PetaHasilUkurAset from "./routes/PetaKerja/PetaHasilUkurAset";
import PetaKerjaLainnya from "./routes/PetaKerja/PetaKerjaLainnya";

import { Container, Grid, ThemeProvider } from "@mui/material";
import { useTranslation } from 'react-i18next';
import theme from "./styles/theme";
import './i18n';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Jakarta Satu (Satu Peta, Satu Data, Satu Kebijakan)";
  }, []);

  const isMobileLandscape = useMediaQuery("(max-height: 540px)");

  const [loading, setLoading] = useState(false);
  const handleSetLoading = () => {
    setLoading(true);
  };

  const [open, setOpen] = useState(true);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          background: "#ffff",
        }}>
        <Button href='https://forms.gle/QJ672f62tXt4Neyu9' target='_blank'
          variant="contained" disableElevation
          sx={{
            // backgroundColor: "#ED783E",
            backgroundColor: "#F7941D",
            boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
            position: "fixed",
            alignItems: "flex-start",
            height: "50px",
            width: "250px",
            zIndex: "999",
            transform: 'translateY(-50%) rotate(90deg) ',
            top: '50%',
            left: '-116px',
          }}>
          {t('beranda.kritikSaranButton')}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          sx={{ backdropFilter: 'blur(10px)' }}
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Slide direction='right' in={open}>
            <Grid container
              direction="column"
              sx={{
                position: 'absolute',
                width: isMobileLandscape ? '60%' : '85%',
                maxWidth: isMobileLandscape ? '800px' : '500px',
                borderRadius: 10,
                background: 'rgba(255, 255, 255, 0.9)',
                outline: "none",
                padding: isMobileLandscape ? "10px" : "20px"
              }}>
              <Grid item>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Fab size="small"
                    onClick={handleClose}
                    sx={{
                      backgroundColor: 'transparent',
                      boxShadow: '0px 4px 20px rgba(170, 180, 190, 0.0)',
                      marginBottom: isMobileLandscape ? '-80%' : '-80%',
                    }}>
                    <CloseRoundedIcon sx={{ color: "#1455A3" }} />
                  </Fab>
                </Box>
              </Grid>
              <Grid item>
                <Skeleton variant='rounded' animation="wave" sx={{ height: isMobileLandscape ? 120 : 250, display: loading ? "none" : "flex" }} />
                <Box onLoad={handleSetLoading} sx={{ display: loading ? "flex" : "none", justifyContent: "center" }}>
                  <img
                    style={{
                      margin: isMobileLandscape ? '-10%' : '-10%',
                      width: isMobileLandscape ? '50%' : '75%',
                      maxWidth: '500px'
                    }} src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/2105e1180548434784efed3529799e6c/data" alt="" />
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    sx={{
                      fontSize: isMobileLandscape ? "0.7em" : "1.1em",
                      textAlign: "center",
                      color: "#003577",
                      margin: isMobileLandscape ? "5%" : "5%"
                    }} dangerouslySetInnerHTML={{ __html: t('beranda.kritikSaran') }}>
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    title="Kritik dan Saran"
                    href="https://forms.gle/QJ672f62tXt4Neyu9" target="_blank"
                    variant="contained"
                    sx={{
                      height: isMobileLandscape ? "40px" : "65px",
                      width: "auto",
                      fontSize: isMobileLandscape ? "0.6em" : "18px",
                      backgroundColor: "#ED783E",
                      borderRadius: 8,
                      textTransform: "none",
                      boxShadow: "0px 4px 20px rgba(170, 180, 190, 0.3)"
                    }}>
                    {t('beranda.kritikSaranButton')}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Slide>
        </Modal>

        <HashRouter>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/peta-3d-basemaps" element={<Peta3DBasemaps />} />
            <Route path="/peta-3d-transit-oriented" element={<Peta3DTransitOriented />} />
            <Route path="/interaktif" element={<RoutePetaInteraktif />} />
            <Route path="/tematik" element={<RouteTematik />} />
            <Route path="/irk" element={<IRK />} />
            <Route path="/unduh" element={<RouteUnduh />} />
            <Route path="/simpul-jaringan" element={<RouteSimpulJaringanAPI />} />
            <Route path="/berita" element={<RouteBerita />} />
            <Route path="/detail-berita/:id" element={<RouteDetailBerita />} />
            <Route path="/panduan-jakarta-satu" element={<RoutePanduanJakartaSatu />} />
            <Route path="/galeri" element={<RouteGaleri />} />
            <Route path="/penghargaan" element={<RoutePenghargaan />} />
            <Route path="/dashboard" element={<RouteDashboard />} />
            <Route path="/data-api" element={<RouteDataAPI />} />
            <Route path="/integrasi-sistem" element={<RouteIntegrasiSistem />} />
            <Route path="/publikasi" element={<RoutePublikasi />} />
            <Route path="/landasan-hukum" element={<LandasanHukum />} />

            <Route path="/smart-rdtr" element={<SmartRDTR />} />

            <Route path="/data-tenaga-kesehatan" element={<DataTenagaKesehatan />} />
            <Route path="/digitasi-aset-kib-a" element={<DigitasiAsetKIBA />} />
            <Route path="/perda-1-tahun-2014" element={<Perda1Tahun2014 />} />
            <Route path="/peta-hasil-ukur-aset" element={<PetaHasilUkurAset />} />
            <Route path="/peta-kerja-lainnya" element={<PetaKerjaLainnya />} />
          </Routes>
          {/* <Footer /> */}
          {/* <ExtrasKritikSaran /> */}
          <ExtrasScrollTop />
        </HashRouter>
      </Container>
    </ThemeProvider >
  );
}

export default App;
