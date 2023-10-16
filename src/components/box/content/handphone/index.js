import React from "react";
import {
  Box,
  Divider,
  Skeleton,
  Typography,
  useMediaQuery
} from "@mui/material";
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

import { withTranslation } from 'react-i18next';
import { useState } from "react";

function Handphone(props) {
  const { t } = props;

  const isiPadAir = useMediaQuery("(max-height: 820px)");

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

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
      <Skeleton
        variant="rectangular"
        width={400}
        height={700}
        style={{ display: imageLoaded ? "none" : "block", borderRadius: 30, marginRight: "5vw" }}
        animation="wave"
      />
      <HandphoneImage
        src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/006f81226fa34e9e8baca114787846e6/data"
        style={{ display: imageLoaded ? "block" : "none", maxWidth: isiPadAir ? "380px" : "490px" }}
        onLoad={handleImageLoad} />
      <HandphoneContent>
        <Skeleton
          variant="text" width="30vw" height="92px" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 20, margin: "0 auto", marginBottom: "2.3vw", marginTop: "-50px" }}
        />
        <HandphoneTitle
          variant="h6"
          style={{ display: imageLoaded ? "block" : "none" }}>
          Jakarta Satu Mobile Apps
        </HandphoneTitle>
        <Skeleton
          variant="text" width="100%" height="2vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10, marginBottom: "20px" }}
        />
        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}
          style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.handphone.judul1')}
        </Typography>
        <Skeleton
          variant="text" width="100%" height="1.5vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
        />
        <Skeleton
          variant="text" width="30%" height="1.5vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10, marginBottom: "20px" }}
        />
        <HandphoneDescription
          variant="subtitle2"
          style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.handphone.keterangan1')}
        </HandphoneDescription>
        <Divider
          sx={dividerStyle}
        />
        <Skeleton
          variant="text" width="30%" height="2vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10, marginBottom: "20px" }}
        />
        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}
          style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.handphone.judul2')}
        </Typography>
        <Skeleton
          variant="text" width="100%" height="1.5vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
        />
        <Skeleton
          variant="text" width="30%" height="1.5vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10, marginBottom: "20px" }}
        />
        <HandphoneDescription
          variant="subtitle2"
          style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.handphone.keterangan2')}
        </HandphoneDescription>
        <Divider sx={dividerStyle} />
        <Skeleton
          variant="text" width="30%" height="2vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10, marginBottom: "20px" }}
        />
        <Typography
          variant="h6"
          paddingBottom="20px"
          fontWeight="bold"
          sx={subtitleStyle}
          style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.handphone.judul3')}
        </Typography>
        <Skeleton
          variant="text" width="100%" height="1.5vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10 }}
        />
        <Skeleton
          variant="text" width="30%" height="1.5vw" animation="wave"
          style={{ display: imageLoaded ? "none" : "block", borderRadius: 10, marginBottom: "20px" }}
        />
        <HandphoneDescription
          variant="subtitle2"
          style={{ display: imageLoaded ? "block" : "none" }}>
          {t('beranda.handphone.keterangan3')}
        </HandphoneDescription>
        <Divider
          sx={dividerStyle} />
        {imageLoaded ? (
          <a href="https://play.google.com/store/apps/details?id=id.go.jakarta.jakartasatu&hl=id" target="_blank" rel="noreferrer"
            style={{
              width: "100px",
              marginLeft: "-9px"
            }}>
            <GetInGoogle src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/1d018fe3f862436ca4b283c46f0b63ac/data" />
          </a>
        ) : (
          <div></div>
        )}
      </HandphoneContent>
    </HandphoneContainer>
  );
}

export const HalamanHandphone = withTranslation()(Handphone);