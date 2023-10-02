import React, { useState } from 'react'
import { Grid, Link, Typography, Box } from "@mui/material";
import {
  FooterTitle,
  FooterTitleDecription,
  FooterContainer,
  BoxContainer,
  BoxContainer2,
  BoxContainer3,
} from "../../styles/footer/FooterStyle";
import { Divider } from "@material-ui/core";
import Skeleton from '@mui/material/Skeleton';

import { withTranslation } from 'react-i18next';

function Footer(props) {
  const { t } = props;

  const today = new Date();
  const year = today.getFullYear();

  const [loading, setLoading] = useState(false);
  const handleSetLoading = () => {
    setLoading(true);
  };

  return (
    <FooterContainer>
      <BoxContainer>
        <Grid container
          spacing={2}
          direction="row"
          justifyContent="space-between">
          <Grid item xs={12} md={3}>
            <FooterTitle>{t('footer.informasiKontak')}</FooterTitle>
            <FooterTitleDecription variant="caption2" dangerouslySetInnerHTML={{ __html: t('footer.informasiKontakDetail') }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <FooterTitle>{t('footer.tentangSitus')}</FooterTitle>
            <Typography variant="caption2">
              {t('footer.tentangSitusDetail')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <FooterTitle>{t('footer.mediaSosial')}</FooterTitle>
            <Grid container
              direction="row"
              alignItems="center">
              <Grid item xs={12}>
                <Skeleton variant='rounded' animation="wave"
                  sx={{
                    width: 200,
                    height: 18,
                    display: loading ? "none" : "block"
                  }} />
                <Box onLoad={handleSetLoading}
                  sx={{
                    alignItems: "center",
                    display: loading ? "flex" : "none"
                  }}>
                  <img src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d150f441e939441a9c229bb7e95765f3/data"
                    style={{ height: "18px" }} alt="" />
                  <Link href="https://www.youtube.com/@JakartaSatuDKI/" target="_blank" style={{ textDecoration: "none", color: "black" }}>
                    <Typography variant="caption2" style={{ marginLeft: "10px" }}>
                      Jakarta Satu DKI
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant='rounded' animation="wave"
                  sx={{
                    mt: 1,
                    mb: 1,
                    width: 200,
                    height: 18,
                    display: loading ? "none" : "block"
                  }} />
                <Box onLoad={handleSetLoading}
                  sx={{
                    alignItems: "center",
                    display: loading ? "flex" : "none"
                  }}>
                  <img onLoad={handleSetLoading} src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/b24f7dd6b91c4be18df88a6616d368b3/data"
                    style={{ height: "16px" }} alt="" />
                  <Link href="https://www.twitter.com/jakartasatudki/" target="_blank" style={{ textDecoration: "none", color: "black" }}>
                    <Typography variant="caption2" style={{ marginLeft: "10px" }}>
                      Jakarta Satu
                    </Typography>
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant='rounded' animation="wave"
                  sx={{
                    width: 200,
                    height: 18,
                    display: loading ? "none" : "block"
                  }} />
                <Box onLoad={handleSetLoading}
                  sx={{
                    alignItems: "center",
                    display: loading ? "flex" : "none"
                  }}>
                  <img onLoad={handleSetLoading} src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/510e8e1269dd4658ac3a518217356553/data"
                    style={{ height: "18px" }} alt="" />
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
        <Typography variant="caption2">
          {t('footer.hakCipta1')}{year}{t('footer.hakCipta2')}
        </Typography>
      </BoxContainer3>
    </FooterContainer >
  );
}

export const HalamanFooter = withTranslation()(Footer);
