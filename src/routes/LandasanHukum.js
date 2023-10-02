import React from 'react';
import { HalamanNavbar } from "../../src/components/appBar/Navbar";
import {
  AppBar,
} from "@material-ui/core";
import {
  Nav,
  NavContainer
} from '../styles/appbar/indexNavbar2';
import App, {
  BoxImage1,
  BoxImage2,
  BoxTitle,
  BoxContainer,
  BoxLittleTitle,
  Dividers,

} from "../routes/routeStyle/LandasanHukumStyle";
import Card from '@mui/material/Card';
import { CardContent, Grid } from '@mui/material';
import { Typography } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import image from "./TematikBackground.png";
import { fontGrid } from '@mui/material/styles/cssUtils';
import { useMediaQuery } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { styled } from "@mui/material/styles";

// const divStyle = {
//     background : '../TematikBackground.png',
//     backgroundSize: 'cover',
//     minHeight: '100vh',
// };

const LandasanHukum = () => {
  const isSmallScreen = useMediaQuery;
  const message = isSmallScreen ? 'Mobile View' : 'Desktop View';
  // const classes = useStyles();

  const divStyle = {
    background: './TematikBackground.png',
    backgroundSize: 'cover',
    minHeight: '100vh',
  };


  // function LandasanHukum () {
  //   const classes = useStyles();
  //   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


  return (

    <div className='container'>

      <AppBar elevation={0} color='transparent'>
        <Nav>
          <NavContainer>
            <HalamanNavbar />
          </NavContainer>
        </Nav>
      </AppBar>


      <BoxContainer>
        <BoxTitle>Landasan Hukum</BoxTitle>
        <Dividers />
        <Grid container spacing={2}
          sx={{
            paddingRight: "70px",
            paddingLeft: "70px",

          }}>
          <Grid item sm={6}>
            <BoxLittleTitle >
              {/* <Typography variant='h3'>Landasan Hukum</Typography> */}
              <List>
                <ListItem sx={{
                  display: "block",
                  // marginLeft : "150px",

                }}>
                  <ListItemText primary="1. PERPU No. 2 Tahun 2022 Tentang Cipta Kerja" />
                  <ListItemText primary="2. PP No. 45/2021 Tentang Penyelenggaraan Informasi Geospasial" />
                  <ListItemText primary="3. Perpres No. 27/2014 Tentang Jaringan Informasi Geospasial Nasional (JIGN)" />
                  <ListItemText primary="4. PERPRES No. 23 Tahun 2021 tentang Perubahan atas Peraturan Presiden Nomor 9 Tahun 2016" />
                  <ListItemText primary="5. Perpres No. 95/2018 Tentang Sistem Pemerintahan Berbasis Elektronik" />
                  <ListItemText primary="6. Perpres No. 39/2019 Tentang Satu Data Indonesia (SDI)" />
                  <ListItemText primary="7. Peraturan Gubernur DKI Jakarta Nomor 37 Tahun 2022 Tentang Satu Data Indonesia Tingkat Provinsi" />
                  <ListItemText primary="8. Instruksi Gubernur Provinsi DKI Jakarta Nomor 34 Tahun 2018 Tentang Sistem Peta dan Data Dalam Program Jakarta Satu" />
                  <ListItemText primary="9. Instruksi Gubernur Provinsi DKI Jakarta Nomor 107 Tahun 2018 Tentang Pemanfaatan Peta Dasar Tunggal Provinsi DKI Jakarta" />
                  <ListItemText primary="10. Keputusan Kepala Dinas Cipta Karya, Tata Ruang dan Pertanahan Provinsi DKI Jakarta Nomor 19 Tahun 2022 Tentang Petunjuk Pelaksanaan Pemukthiran dan Pengintegrasian Sistem Peta dan Data dalam Sistem Informasi Geospasial Jakarta Satu" />
                </ListItem>
              </List>
            </BoxLittleTitle>
          </Grid>
          <Grid item sm={4}>
            <BoxImage1 sx={{

              width: '100%',
              height: 'auto',
              position: isSmallScreen ? 'relative' : 'static', // Set position to relative for small screens
              top: isSmallScreen ? '-50px' : '0', // Adjust top property for small screens

            }}
              src='https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/e15df7e347ea4d4788b5cf1bcbe1252e/data' />

          </Grid>
        </Grid>


        {/* <App/> */}



      </BoxContainer>
      {/* </div> */}
    </div>



  );

};


// }; //punya si const

export default LandasanHukum;