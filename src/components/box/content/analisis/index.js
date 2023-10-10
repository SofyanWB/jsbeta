import React from 'react'
import { Button, Skeleton } from "@mui/material";
import {
  BoxContainer,
  BoxContent,
  BoxContent2,
  BoxDescription,
  BoxImage,
  BoxTitle,
  iconButtonStyles3,
} from "../../../../styles/dataAnalisis/index.js";
import { Box } from '@mui/system';
import { HalamanKotak } from './buttonV2.js';
import { Link as RouterLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { useState } from 'react';

function DataAnalisis(props) {
  const { t } = props;

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <BoxContainer>
      <BoxContent>
        <Skeleton
          variant="rectangular"
          width={550}
          height={300}
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 30, marginLeft: "-30%" }}
          animation={false}
        />
        <BoxImage
          src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/cbbf39437984447091f5e1608fc56d70/data"
          style={{ display: imageLoaded ? "block" : "none" }}
          onLoad={handleImageLoad} />
      </BoxContent>
      <BoxContent2>
        <Skeleton
          variant="text" width="70%" height="92px" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 20, marginBottom: "1.3vw" }}
        />
        <BoxTitle
          variant="h2"
          style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.analisis.judul')}
        </BoxTitle>
        <Skeleton
          variant="text" width="50%" height="34px" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
        />
        <Skeleton
          variant="text" width="30%" height="34px" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10, marginBottom: "2vw" }}
        />
        <BoxDescription
          style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.analisis.keterangan')}
        </BoxDescription>

        <HalamanKotak></HalamanKotak>

        <Box
          justifyContent="center"
          alignItems="center">
          {imageLoaded ? (
            <Button
              component={RouterLink} to="/unduh"
              sx={iconButtonStyles3}
              variant="contained"
              size="large"
              onLoad={handleImageLoad}>
              {t('beranda.analisis.lihatSemua')}
            </Button>
          ) : (
            <div></div>
          )}
        </Box>
      </BoxContent2>
    </BoxContainer>
  )
}

export const HalamanAnalisis = withTranslation()(DataAnalisis);