import { Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  BoxContainer,
  BoxContent,
  BoxContent2,
  BoxDescription,
  BoxImage,
  BoxImageLatar,
  BoxTitle,
  Deskripsi1,
  ImagePeta,
  PetaTitle,
} from "../../../../styles/peta";
import {
  HalamanDialog1,
  HalamanDialog2,
  HalamanDialog3
} from "./dialogButton";

import { withTranslation } from "react-i18next";

import { Element } from 'react-scroll'

function Peta(props) {

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const { t } = props;

  return (
    <Element id='HalamanPeta'>

      <BoxContainer>
        <BoxContent>

          {imageLoaded ? (
            <BoxImageLatar src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/979388b0f1944b23aed602beab869092/data"
              onLoad={handleImageLoad} />
          ) : (
            <></>
          )}

          <Skeleton
            variant="text" animation="wave"
            style={{ display: imageLoaded ? "none" : "block" }}
            sx={PetaTitle}
          />

          <BoxTitle
            variant="h3"
            style={{ display: imageLoaded ? "block" : "none" }}>
            {t('beranda.peta.judul')}
          </BoxTitle>

          <Skeleton
            variant="text" animation="wave"
            style={{ display: imageLoaded ? "none" : "block" }}
            sx={Deskripsi1}
          />

          <Skeleton
            variant="text" animation="wave"
            style={{ display: imageLoaded ? "none" : "block" }}
            sx={Deskripsi1}
          />

          <Skeleton
            variant="text" width="60%" animation="wave"
            style={{ display: imageLoaded ? "none" : "block", marginBottom: "2.9vw" }}
            sx={Deskripsi1}
          />

          <BoxDescription
            variant="subtitle"
            style={{ display: imageLoaded ? "block" : "none" }}>
            {t('beranda.peta.keterangan')}
          </BoxDescription>

          <Skeleton
            variant="rectangular"
            style={{ display: imageLoaded ? "none" : "block" }}
            sx={ImagePeta}
            animation="wave"
          />
          <BoxImage
            src="https://jakartasatu.jakarta.go.id/portal/sharing/rest/content/items/d3fc334e61d049809c6316b8185f79ef/data"
            alt="Peta Jakarta Satu"
            style={{ display: imageLoaded ? "block" : "none" }}
            onLoad={handleImageLoad}
          />

        </BoxContent>
        <BoxContent2>
          <Typography
            sx={{
              width: "400px"
            }} />
          <HalamanDialog1 />
          <HalamanDialog3 />
          <HalamanDialog2 />
        </BoxContent2>
      </BoxContainer>
      
    </Element>
  );
}

export const HalamanPeta = withTranslation()(Peta);
