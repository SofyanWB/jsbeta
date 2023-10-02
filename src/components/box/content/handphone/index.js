import React from "react";
import { Box, Divider } from "@mui/material";
import {
  HandphoneContainer,
  HandphoneContent,
  HandphoneSubtitle,
  HandphoneDescription,
  HandphoneImage,
  HandphoneTitle,
  GetInGoogle,
  dividerStyle,
} from "../../../../styles/handphone";

import { withTranslation } from 'react-i18next';

function Handphone(props) {
  const { t } = props;

  return (
    <HandphoneContainer>
      <Box
        position="absolute"
        top="-130px"
        backgroundColor="white"
        borderRadius="50%"
        width="100%"
        height="250px">
      </Box>

      <HandphoneImage src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/006f81226fa34e9e8baca114787846e6/data" />

      <HandphoneContent>
        <HandphoneTitle>Jakarta Satu Mobile Apps</HandphoneTitle>
        <HandphoneSubtitle>
          {t('beranda.handphone.judul1')}
        </HandphoneSubtitle>
        <HandphoneDescription variant="subtitle2">
          {t('beranda.handphone.keterangan1')}
        </HandphoneDescription>
        <Divider
          sx={dividerStyle}
        />

        <HandphoneSubtitle>
          {t('beranda.handphone.judul2')}
        </HandphoneSubtitle>
        <HandphoneDescription variant="subtitle2">
          {t('beranda.handphone.keterangan2')}
        </HandphoneDescription>


        <Divider
          sx={dividerStyle} />

        <HandphoneSubtitle>
          {t('beranda.handphone.judul3')}
        </HandphoneSubtitle>
        <HandphoneDescription variant="subtitle2">
          {t('beranda.handphone.keterangan3')}
        </HandphoneDescription>


        <Divider
          sx={dividerStyle} />

        <a href="https://play.google.com/store/apps/details?id=id.go.jakarta.jakartasatu&hl=id" target="_blank" rel="noreferrer"
          style={{
            width: "100px",
            marginLeft: "-9px"
          }}>
          <GetInGoogle src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/1d018fe3f862436ca4b283c46f0b63ac/data" />
        </a>
      </HandphoneContent>
    </HandphoneContainer>
  );
}

export const HalamanHandphone = withTranslation()(Handphone);
