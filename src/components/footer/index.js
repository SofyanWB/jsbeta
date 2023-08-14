import { Grid, Link, Typography, Box } from "@mui/material";
import React from 'react';
import {
  FooterTitle,
  FooterContainer,
  BoxContainer,
  BoxContainer2,
  BoxContainer3,
} from "../../styles/footer/FooterStyle";
import { Divider } from "@material-ui/core";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <FooterContainer>
      <BoxContainer>
        <Grid container
          spacing={2}
          direction="row"
          justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <FooterTitle>Informasi Kontak</FooterTitle>
            <Typography variant="caption2">
              Kirimkan Surat Elektronik ke alamat berikut:
              <br />
              <b><i>  jakartasatu@jakarta.go.id</i></b>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterTitle>Tentang Situs</FooterTitle>
            <Typography variant="caption2">
              Situs ini merupakan sarana komunikasi dan visualisasi peta dan data dari program
              Jakarta Satu baik untuk Pemerintah Provinsi DKI Jakarta ataupun untuk masyarakat.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <FooterTitle>Media Sosial</FooterTitle>
            <Grid container
              direction="row"
              alignItems="center">
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d150f441e939441a9c229bb7e95765f3/data" style={{ height: "18px" }} alt="" />
                  <Link href="https://www.youtube.com/@JakartaSatuDKI/" target="_blank" style={{ textDecoration: "none", color: "black" }}>
                    <Typography variant="caption2" style={{ marginLeft: "10px" }}>
                      Jakarta Satu DKI
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d35cbf7f9b0e4931aaa62bc0ff14719a/data" style={{ height: "18px" }} alt="" />
                  <Link href="https://www.twitter.com/jakartasatudki/" target="_blank" style={{ textDecoration: "none", color: "black" }}>
                    <Typography variant="caption2" style={{ marginLeft: "10px" }}>
                      Jakarta Satu
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/510e8e1269dd4658ac3a518217356553/data" style={{ height: "18px" }} alt="" />
                  <Link href="https://www.instagram.com/jakartasatudki/" target="_blank" style={{ textDecoration: "none", color: "black" }}>
                    <Typography variant="caption2" style={{ marginLeft: "10px" }}>
                      jakartasatudki
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BoxContainer>
      <BoxContainer2>
        <Divider />
      </BoxContainer2>
      <BoxContainer3>
        &copy; Hak Cipta {year}. Pemerintah Provinsi Daerah Khusus Ibu Kota Jakarta.
      </BoxContainer3>
    </FooterContainer >
  );
}

export default Footer;
