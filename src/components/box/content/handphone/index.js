import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import {
  HandphoneContainer,
  HandphoneContent,
  HandphoneDescription,
  HandphoneImage,
  HandphoneTitle,
  GetInGoogle,
  dividerStyle,
  subtitleStyle,
} from "../../../../styles/handphone";

function Handphone() {
  //const matches = useMediaQuery(theme.breakpoints.down("md"));

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
        <HandphoneTitle variant="h6">Jakarta Satu Mobile Apps</HandphoneTitle>
        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}>
          Satu Platform untuk beragam kebutuhan Data Spasial di Jakarta
        </Typography>
        <HandphoneDescription variant="subtitle2">
          Memudahkan kita dalam mencari informasi terkait geospasial di DKI Jakarta dimanapun anda berada
        </HandphoneDescription>
        <Divider
          sx={dividerStyle}
        />

        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}>
          Fitur Tematik
        </Typography>
        <HandphoneDescription variant="subtitle2">
          Dengan fitur tematik lengkap, memastikan penggunaannya mudah mengakses lebih cepat, efektif dan efisien
        </HandphoneDescription>


        <Divider
          sx={dividerStyle} />

        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}>
          Unduh
        </Typography>
        <HandphoneDescription variant="subtitle2">
          Dapatkan beragam informasi dengan mudah terkait data spasial, seperti peta seluruh Jakarta meupun per-Kelurahan. Data tersebut dapat diunduh sesuai kebutuhan dalam format ZIP dan PDF
        </HandphoneDescription>


        <Divider
          sx={dividerStyle} />

        <a href="https://play.google.com/store/apps/details?id=id.go.jakarta.jakartasatu&hl=id" target="_blank" rel="noreferrer">
          <GetInGoogle src="/images/handphone/googleplay.png" />
        </a>
      </HandphoneContent>
    </HandphoneContainer>
  );
}

export default Handphone;