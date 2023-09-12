import React from 'react'
import { Button } from "@mui/material";
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

function DataAnalisis(props) {
  const { t } = props;

  return (
    <BoxContainer>
      <BoxContent>
        <BoxImage src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/cbbf39437984447091f5e1608fc56d70/data" />
      </BoxContent>
      <BoxContent2>
        <BoxTitle variant="h2">
          {t('beranda.analisis.judul')}
        </BoxTitle>
        <BoxDescription>
          {t('beranda.analisis.keterangan')}
        </BoxDescription>
        <HalamanKotak></HalamanKotak>
        <Box
          justifyContent="center"
          alignItems="center">
          <Button
            component={RouterLink} to="/unduh"
            sx={iconButtonStyles3}
            variant="contained"
            size="large">
            {t('beranda.analisis.lihatSemua')}
          </Button>
        </Box>
      </BoxContent2>
    </BoxContainer>
  )
}

export const HalamanAnalisis = withTranslation()(DataAnalisis);