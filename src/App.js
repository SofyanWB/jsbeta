import { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import useMediaQuery from '@mui/material/useMediaQuery';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import ScrollTop from "./components/ScrollTop";
import { Route, Routes, HashRouter } from 'react-router-dom';
// import Interaktif from '../src/routes/Interaktif';
import PetaInteraktif from '../src/routes/Interaktif/PetaInteraktif';
import Tematik from '../src/routes/Tematik';
import SimpulJaringan from '../src/routes/SimpulJaringan';
import IRK from '../src/routes/IRK';
import Unduh from '../src/routes/Unduh';
import Beranda from '../src/routes/Beranda';
import Peta3DBasemaps from '../src/routes/Peta3DBasemaps';
import Peta3DTransitOrientied from '../src/routes/Peta3DTransitOrientied';
import Berita from '../src/routes/Berita';
import DetailBerita from '../src/routes/DetailBerita';
import PanduanJakartaSatu from '../src/routes/PanduanJakartaSatu';
import Galeri from '../src/routes/Galeri';
import Penghargaan from '../src/routes/Penghargaan';
import Dashboard from "./routes/Dashboard";
import DataAPI from "./routes/DataAPI";
import IntegrasiSistem from "./routes/IntegrasiSistem";
import Publikasi from "./routes/Publikasi";
// import Footer from './components/footer/index';

import SmartRDTR from "./routes/SmartRDTR";

import DataTenagaKesehatan from "./routes/PetaKerja/DataTenagaKesehatan";
import DigitasiAsetKIBA from "./routes/PetaKerja/DigitasiAsetKIBA";
import Perda1Tahun2014 from "./routes/PetaKerja/Perda1Tahun2014";
import PetaHasilUkurAset from "./routes/PetaKerja/PetaHasilUkurAset";
import PetaKerjaLainnya from "./routes/PetaKerja/PetaKerjaLainnya";

import { Container, Grid, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "Jakarta Satu (Satu Peta, Satu Data, Satu Kebijakan)";
  }, []);

  const isMobile = useMediaQuery("(max-width: 800px)");

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        style={{ backdropFilter: 'blur(10px)' }}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Grid container
            direction="column"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '85%',
              maxWidth: '700px',
              height: 'auto',
              borderRadius: 10,
              background: 'rgba(255, 255, 255, 0.9)',
              outline: "none",
              p: 2,
            }}>
            <Grid item>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Fab size="small"
                  onClick={handleClose}
                  sx={{
                    backgroundColor: 'transparent',
                    boxShadow: '0px 4px 20px rgba(170, 180, 190, 0.0)',
                  }}>
                  <CloseRoundedIcon sx={{ color: "#1455A3" }} />
                </Fab>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img style={{ margin: '-10%', width: '75%', maxWidth: '700px', }} src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/2105e1180548434784efed3529799e6c/data" alt="" />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontSize: isMobile ? "1em" : "1.5em",
                    textAlign: "center",
                    color: "#003577",
                    margin: "5%"
                  }}>
                  Sehubungan dengan adanya proses pengembangan tampilan terbaru, dengan ini diberitahukan bahwa website Jakarta Satu <b>tidak dapat diakses</b> untuk <b>sementara</b>. Anda dapat menyampaikan kritik dan saran dengan klik tombol di bawah ini.
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  title="Kritik dan Saran"
                  href="https://forms.gle/QJ672f62tXt4Neyu9" target="_blank"
                  variant="contained"
                  size="large"
                  sx={{
                    height: "65px",
                    width: "200px",
                    fontSize: "18px",
                    backgroundColor: "#ED783E",
                    borderRadius: 8,
                    textTransform: "none",
                    boxShadow: "0px 4px 20px rgba(170, 180, 190, 0.3)",
                  }}>
                  Kritik dan Saran
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Fade>
      </Modal>

      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          background: "#ffff",
        }}>

        <HashRouter basename="/jsbeta">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/peta-3d-basemaps" element={<Peta3DBasemaps />} />
            <Route path="/peta-3d-transit-orientied" element={<Peta3DTransitOrientied />} />
            <Route path="/interaktif" element={<PetaInteraktif />} />
            <Route path="/tematik" element={<Tematik />} />
            <Route path="/irk" element={<IRK />} />
            <Route path="/unduh" element={<Unduh />} />
            <Route path="/simpul-jaringan" element={< SimpulJaringan />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/detail-berita/:id" element={<DetailBerita />} />
            <Route path="/panduan-jakarta-satu" element={<PanduanJakartaSatu />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/penghargaan" element={<Penghargaan />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/data-api" element={<DataAPI />} />
            <Route path="/integrasi-sistem" element={<IntegrasiSistem />} />
            <Route path="/publikasi" element={<Publikasi />} />

            <Route path="/smart-rdtr" element={<SmartRDTR />} />

            <Route path="/data-tenaga-kesehatan" element={<DataTenagaKesehatan />} />
            <Route path="/digitasi-aset-kib-a" element={<DigitasiAsetKIBA />} />
            <Route path="/perda-1-tahun-2014" element={<Perda1Tahun2014 />} />
            <Route path="/peta-hasil-ukur-aset" element={<PetaHasilUkurAset />} />
            <Route path="/peta-kerja-lainnya" element={<PetaKerjaLainnya />} />
          </Routes>
          {/* <Footer /> */}
          <ScrollTop />
        </HashRouter>
      </Container>
    </ThemeProvider >
  );
}

export default App;
