import React from 'react';
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
  AppBar,
} from "@material-ui/core";
import {
  NavFix,
  NavContainerFix
} from '../styles/appbar/index';
import {
  BoxImage1,
  BoxTitle,
  BoxContainer,
  BoxLittleTitle,
  Dividers,
} from "../routes/routeStyle/LandasanHukumStyle";
import {
  Grid,
  useMediaQuery
} from '@mui/material';
import { HalamanFooter } from "../../src/components/footer/index";

const LandasanHukum = () => {
  const isSmallScreen = useMediaQuery; // eslint-disable-next-line
  const message = isSmallScreen ? 'Mobile View' : 'Desktop View';

  return (
    <div className='container'>
      <AppBar elevation={0} color='transparent'>
        <NavFix>
          <NavContainerFix>
            <HalamanNavbar />
          </NavContainerFix>
        </NavFix>
      </AppBar>

      <BoxContainer>
        <BoxTitle>Landasan Hukum</BoxTitle>
        <Dividers />
        <Grid container spacing={2}
          sx={{
            paddingRight: "50px",
            paddingLeft: "50px",
            flexDirection: "row-reverse"
          }}>
          <Grid item sm={8} order={2}>
            <BoxLittleTitle>
              <ol>
                <li>PERPU No. 2 Tahun 2022 Tentang Cipta Kerja</li>
                <li>PP No. 45/2021 Tentang Penyelenggaraan Informasi Geospasial</li>
                <li>Perpres No. 27/2014 Tentang Jaringan Informasi Geospasial Nasional (JIGN)</li>
                <li>PERPRES No. 23 Tahun 2021 tentang Perubahan atas Peraturan Presiden Nomor 9 Tahun 2016</li>
                <li>Perpres No. 95/2018 Tentang Sistem Pemerintahan Berbasis Elektronik</li>
                <li>Perpres No. 39/2019 Tentang Satu Data Indonesia (SDI)</li>
                <li>Peraturan Gubernur DKI Jakarta Nomor 37 Tahun 2022 Tentang Satu Data Indonesia Tingkat Provinsi</li>
                <li>Instruksi Gubernur Provinsi DKI Jakarta Nomor 34 Tahun 2018 Tentang Sistem Peta dan Data Dalam Program Jakarta Satu</li>
                <li>Instruksi Gubernur Provinsi DKI Jakarta Nomor 107 Tahun 2018 Tentang Pemanfaatan Peta Dasar Tunggal Provinsi DKI Jakarta</li>
                <li>Keputusan Kepala Dinas Cipta Karya, Tata Ruang dan Pertanahan Provinsi DKI Jakarta Nomor 19 Tahun 2022 Tentang Petunjuk Pelaksanaan Pemukthiran dan Pengintegrasian Sistem Peta dan Data dalam Sistem Informasi Geospasial Jakarta Satu</li>
              </ol>
            </BoxLittleTitle>
          </Grid>
          <Grid item sm={4} order={1}>
            <BoxImage1 sx={{
              width: '100%',
              height: 'auto',
              position: isSmallScreen ? 'relative' : 'static', // Set position to relative for small screens
              top: isSmallScreen ? '-80px' : '0', // Adjust top property for small screens
            }}
              src='https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/e15df7e347ea4d4788b5cf1bcbe1252e/data' />
          </Grid>
        </Grid>
      </BoxContainer>
      <HalamanFooter />
    </div>
  );
};

export default LandasanHukum;